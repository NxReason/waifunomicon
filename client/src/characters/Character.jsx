import { Link, useParams } from 'react-router';
import { useCharacters } from './CharacterContext';
import { useEffect } from 'react';
import { find } from '../api/characters';
import { useReducer } from 'react';

export default function Character() {
  const params = useParams();
  const characters = useCharacters();
  const [artifactSets, dispatch] = useReducer(artifactSetsReducer, []);
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

  const headerText = character?.name ?? 'Character not found';

  return (
    <>
      <Link className="btn" to="/characters">
        All characters
      </Link>
      <h1>{headerText}</h1>

      <p>Name: {character?.name}</p>
      <CharacterSets artifactSets={artifactSets} />
    </>
  );
}

function CharacterSets({ artifactSets }) {
  const items = artifactSets.map(as => {
    return <li key={as.id}>{as.name}</li>;
  });
  return <ul className="character-artifact-sets">{items}</ul>;
}

function artifactSetsReducer(state, action) {
  switch (action.type) {
    case 'set':
      return action.artifactSets;
    default:
      throw new Error('Invalid action type');
  }
}
