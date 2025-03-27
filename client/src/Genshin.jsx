import { useState, useEffect } from 'react';
import api from './api/gi';
import CharacterList from './components/CharacterList';
import GICharacterForm from './components/GICharacterForm';

function Genshin() {
  const [characters, setCharacters] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    api.characters.all().then(charData => {
      if (charData) {
        setCharacters(charData);
      }
    });
  }, []);

  const selectUpdatingChar = char => {
    setIsUpdating(true);
    setUpdatingId(char.id);
  };

  const removeCharacter = async id => {
    const result = await api.characters.remove(id);
    if (result) {
      setCharacters(characters.filter(c => c.id !== id));
    }
  };

  const saveCharacter = async character => {
    const result = await api.characters.create(character);
    if (result) {
      setCharacters([...characters, result]);
    }
  };

  const updateCharacter = async ({ name }) => {
    const result = await api.characters.update({ id: updatingId, name });
    console.log(result);
    setIsUpdating(false);
    setUpdatingId(null);
    if (result) {
      const newCharacters = characters.map(c => {
        if (c.id === result.id) {
          return result;
        }
        return c;
      });
      setCharacters(newCharacters);
    }
  };

  const defaultName = characters.find(c => c.id === updatingId)?.name ?? '';
  const saveHandler = isUpdating ? updateCharacter : saveCharacter;

  return (
    <section className="page">
      <h1>Genshin</h1>
      <CharacterList
        characters={characters}
        handleUpdate={selectUpdatingChar}
        handleRemove={removeCharacter}
      />
      <GICharacterForm saveHandler={saveHandler} defaultName={defaultName} />
    </section>
  );
}

export default Genshin;
