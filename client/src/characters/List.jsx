import { Link } from 'react-router';

export default function List({ characters }) {
  const cards = characters?.map(c => (
    <li className="character-card" key={c.id}>
      <Link to={`/characters/${c.id}`}>{c.Name}</Link>
    </li>
  ));

  return (
    <>
      <ul className="character-list">{cards}</ul>
    </>
  );
}
