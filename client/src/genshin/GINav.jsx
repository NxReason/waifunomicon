import { Link } from 'react-router';

export default function Nav() {
  return (
    <>
      <span className="link-separator"></span>

      <li>
        <Link className="link-page" to="/genshin/characters">
          Ch
        </Link>
      </li>
      <li>
        <Link className="link-page" to="/genshin/artifacts">
          Art
        </Link>
      </li>
      <li>
        <Link className="link-page" to="/genshin/weapons">
          Wp
        </Link>
      </li>
    </>
  );
}
