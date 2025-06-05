import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../../api/genshin';
import Loadout from './Loadout';

export default function Character() {
  const params = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    api.characters.find(params.id).then(c => {
      if (c) {
        console.log(c);
        setCharacter(c);
      }
    });
  }, []);

  if (character === null) return <p>Loading...</p>;

  return (
    <div>
      <h2>{character.name}</h2>
      <Loadout />
    </div>
  );
}
