import { Link } from 'react-router';

export default function Nav() {
  return (
    <nav className="navigation">
      <ul className="list-page">
        <li>
          <Link className="link-page" to="/genshin">
            GI
          </Link>
        </li>
        <li>
          <Link className="link-page" to="/wuwa">
            WW
          </Link>
        </li>
      </ul>
    </nav>
  );
}
