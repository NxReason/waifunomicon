import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../../api/genshin';

export default function Character() {
  const params = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    api.characters.find(params.id).then(c => {
      if (c) {
        setCharacter(c);
      }
    });
  }, []);

  return <p>Character: {character ? character.name : 'loading...'}</p>;
}
