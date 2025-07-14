import { NavLink } from 'react-router';

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-pages-list">
        <li className="nav-pages-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-pages-item">
          <NavLink to="/characters">Characters</NavLink>
        </li>
        <li className="nav-pages-item">
          <NavLink to="/artifact-sets">Artifact Sets</NavLink>
        </li>
      </ul>
    </nav>
  );
}
