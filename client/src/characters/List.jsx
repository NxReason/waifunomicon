import { Link } from 'react-router';

export default function List({ characters }) {
  const cards = characters?.map(c => (
    <li className="character-card" key={c.id}>
      <Link to={`/characters/${c.id}`} className="character-card-name">
        {c.Name}
      </Link>
      <div className="character-card-controls">
        <Link to={`/characters/${c.id}/edit`}>
          <i className="icon icon-edit"></i>
        </Link>
        <i className="icon icon-delete"></i>
      </div>
    </li>
  ));

  return (
    <>
      <ul className="character-list">{cards}</ul>
    </>
  );
}
