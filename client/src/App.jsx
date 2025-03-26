import { useEffect, useState } from 'react';
import './App.css';
import { characters as charactersAPI } from './api/gi';
import { Link, Outlet } from 'react-router';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    charactersAPI.all().then(charRes => {
      if (charRes) {
        setCharacters(charRes);
      }
    });
  }, []);

  const charList = characters.map(c => {
    return <li key={c.id}>{c.name}</li>;
  });

  return (
    <>
      <h1>Main page</h1>
      <ul>{charList}</ul>

      <ul>
        <li>
          <Link to="/genshin">Genshin</Link>
        </li>
        <li>
          <Link to="/wuwa">Wuwa</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

export default App;
