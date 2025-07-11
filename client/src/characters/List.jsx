import { Link } from 'react-router';
import { useCharactersDispatch } from './CharacterContext';
import { remove } from '../api/characters.js';

export default function List({ characters }) {
  const dispatch = useCharactersDispatch();

  const handleDelete = async id => {
    const { ok } = await remove(id);
    if (ok) {
      dispatch({
        type: 'deleted',
        id,
      });
    }
  };

  const cards = characters?.map(c => (
    <li className="character-card" key={c.id}>
      <Link to={`/characters/${c.id}`} className="character-card-name">
        {c.name}
      </Link>
      <div className="character-card-controls">
        <Link to={`/characters/${c.id}/edit`}>
          <i className="icon icon-edit"></i>
        </Link>
        <i className="icon icon-delete" onClick={() => handleDelete(c.id)}></i>
      </div>
    </li>
  ));

  return (
    <>
      <ul className="character-list">{cards}</ul>
    </>
  );
}
