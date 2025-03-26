import './App.css';
import { Link, Outlet } from 'react-router';

function App() {
  return (
    <>
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

      <Outlet />
    </>
  );
}

export default App;
