import { Link, useParams } from 'react-router';
import { useCharacters } from './CharacterContext';
import { useArtifactSets } from '../artifactSets/ArtifactSetsContext';
import { useEffect, useState } from 'react';
import { find, addSet } from '../api/characters';
import { useReducer } from 'react';
import CharacterSets from './CharacterSets';

const initialState = {
  artifactSets: [],
  selectorVisible: false,
  removingSet: false,
  addingSet: false,
};
export default function Character() {
  const params = useParams();
  const characters = useCharacters();
  const allSets = useArtifactSets();

  const [newSetId, setNewSetId] = useState(null);

  const [state, dispatch] = useReducer(artifactSetsReducer, initialState);
  const { artifactSets } = state;
  const id = parseInt(params.id);

  const character = characters.find(c => c.id === id);
  useEffect(() => {
    if (!character) return;

    find(id).then(({ ok, data }) => {
      if (ok) {
        dispatch({
          type: 'set',
          artifactSets: data.artifactSets,
        });
      }
    });
  }, [character]);

  useEffect(() => {
    if (allSets.length > 0) {
      setNewSetId(allSets[0].id);
    }
  }, [allSets]);

  if (!character) {
    return <CharacterNotFound />;
  }

  const showSetSelect = () => {
    dispatch({
      type: 'showSelector',
    });
  };

  const hideSetSelect = () => {
    dispatch({
      type: 'hideSelector',
    });
  };

  const saveSet = async () => {
    dispatch({
      type: 'requestAddSet',
    });

    const { ok, data } = await addSet(id, newSetId);

    if (ok) {
      dispatch({
        type: 'resolveAddSet',
        artifactSets: data.artifactSets,
      });
    } else {
      dispatch({
        type: 'rejectAddSet',
      });
    }
  };

  return (
    <>
      <Link className="btn" to="/characters">
        All characters
      </Link>
      <h1 className="character-header">{character.name}</h1>

      <CharacterSets
        artifactSets={artifactSets}
        allSets={allSets}
        selectedSet={newSetId}
        setNewSet={setNewSetId}
        selectorVisible={state.selectorVisible}
        addingSet={state.addingSet}
        handleAdd={showSetSelect}
        handleSave={saveSet}
        handleCancel={hideSetSelect}
      />
    </>
  );
}

function CharacterNotFound() {
  return (
    <>
      <Link className="btn" to="/characters">
        All characters
      </Link>
      <h1 className="character-header">Character not found</h1>
    </>
  );
}

function artifactSetsReducer(state, action) {
  switch (action.type) {
    case 'set':
      return { ...state, artifactSets: action.artifactSets };
    case 'showSelector':
      return { ...state, selectorVisible: true };
    case 'hideSelector':
      return { ...state, selectorVisible: false };
    case 'requestAddSet':
      return { ...state, addingSet: true };
    case 'resolveAddSet':
      return { ...state, addingSet: false, artifactSets: action.artifactSets };
    case 'rejectAddSet':
      return { ...state, addingSet: false };
    default:
      throw new Error('Invalid action type');
  }
}
