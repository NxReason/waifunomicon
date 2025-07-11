import { useParams } from 'react-router';
import { useCharacters } from './CharacterContext';

export default function Character() {
  const params = useParams();
  const characters = useCharacters();
  const id = parseInt(params.id);

  const character = characters.find(c => c.id === id);

  return (
    <>
      <h1>
        Character page (id: {character?.id} / name: {character?.name})
      </h1>
    </>
  );
}
