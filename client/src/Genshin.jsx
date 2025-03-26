import { useState, useEffect } from 'react';
import './Genshin.css';
import api from './api/gi';

function Genshin() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.characters.all().then(charData => {
      if (charData) {
        setCharacters(charData);
      }
    });
  }, []);

  const charList = characters.map(c => {
    return (
      <li className="character-item" key={c.id}>
        {c.name}
      </li>
    );
  });
  return (
    <section className="page">
      <h1>Genshin</h1>
      <ul className="list-characters">{charList}</ul>
    </section>
  );
}

export default Genshin;
