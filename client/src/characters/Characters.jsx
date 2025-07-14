import { useContext } from 'react';
import { Link } from 'react-router';
import { CharactersContext } from './CharacterContext';
import './Characters.css';
import List from './List';

export default function Characters() {
  const characters = useContext(CharactersContext);
  return (
    <>
      <Link className="btn btn-new-character" to="/characters/new">
        New character
      </Link>
      <List characters={characters} />
    </>
  );
}
