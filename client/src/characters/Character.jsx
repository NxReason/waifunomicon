import { Link, useParams } from 'react-router';
import { useCharacters } from './CharacterContext';
import { useArtifactSets } from '../artifactSets/ArtifactSetsContext';
import { useEffect } from 'react';
import { find } from '../api/characters';
import { useReducer } from 'react';
import CharacterSets from './CharacterSets';

const initialState = { artifactSets: [], selectorVisible: false };
export default function Character() {
  const params = useParams();
  const characters = useCharacters();
  const allSets = useArtifactSets();
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

  if (!character) {
    return <CharacterNotFound />;
  }

  const showNewSetSelector = () => {
    dispatch({
      type: 'showSelector',
    });
  };

  const hideSetSelector = () => {
    dispatch({
      type: 'hideSelector',
    });
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
        selectorVisible={state.selectorVisible}
        handleAdd={showNewSetSelector}
        handleCancel={hideSetSelector}
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
    default:
      throw new Error('Invalid action type');
  }
}
