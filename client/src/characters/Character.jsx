import { Link, useParams } from 'react-router';
import { useCharacters } from './CharacterContext';

export default function Character() {
  const params = useParams();
  const characters = useCharacters();
  const id = parseInt(params.id);

  const character = characters.find(c => c.id === id);

  const headerText = character?.name ?? 'Character not found';

  return (
    <>
      <Link className="btn" to="/characters">
        All characters
      </Link>
      <h1>{headerText}</h1>

      <p>Name: {character?.name}</p>
    </>
  );
}
