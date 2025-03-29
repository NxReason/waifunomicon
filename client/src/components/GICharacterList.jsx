import './character-list.css';

function CharacterList({ characters, handleRemove, handleUpdate }) {
  const charList = characters.map(c => {
    return (
      <li className="character-item" key={c.id}>
        <span className="character-name">{c.name}</span>
        <span className="character-controls">
          <button onClick={() => handleUpdate(c.id)}>Edit</button>
          <button onClick={() => handleRemove(c.id)}>Remove</button>
        </span>
      </li>
    );
  });

  return <ul className="list-characters">{charList}</ul>;
}

export default CharacterList;
