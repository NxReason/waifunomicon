import './home.css';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div className="main-page">
      <nav className="main-nav">
        <ul className="pages-list">
          <h2 className="pages-header">Genshin Impact</h2>
          <li className="page-item">
            <Link to="/genshin/characters">Characters</Link>
          </li>
          <li className="page-item">
            <Link to="/genshin/artifacts">Artifacts</Link>
          </li>
          <li className="page-item">
            <Link to="/genshin/weapons">Weapons</Link>
          </li>
        </ul>
        <ul className="pages-list">
          <h2 className="pages-header">Wuthering Waves</h2>
          <li className="page-item">
            <Link to="/wuwa/characters">Characters</Link>
          </li>
          <li className="page-item">
            <Link to="/wuwa/echoes">Echoes</Link>
          </li>
          <li className="page-item">
            <Link to="/wuwa/weapons">Weapons</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
