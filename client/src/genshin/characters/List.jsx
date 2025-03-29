import { Link } from 'react-router';

function CharacterList({ characters, handleRemove, handleUpdate }) {
  const charList = characters.map(c => {
    return (
      <li className="character-item" key={c.id}>
        <span className="character-name">
          <Link to={`${c.id}`}>{c.name}</Link>
        </span>
        <span className="character-controls">
          <button onClick={() => handleUpdate(c.id)} className="btn-char-edit">
            Edit
          </button>
          <button
            onClick={() => handleRemove(c.id)}
            className="btn-char-remove"
          >
            Remove
          </button>
        </span>
      </li>
    );
  });

  return <ul className="list-characters">{charList}</ul>;
}

export default CharacterList;
