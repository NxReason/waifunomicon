import { createContext, useReducer, useContext } from 'react';

export const CharactersContext = createContext(null);
export const CharactersDispatchContext = createContext(null);

export function useCharacters() {
  return useContext(CharactersContext);
}
export function useCharactersDispatch() {
  return useContext(CharactersDispatchContext);
}

const initialCharacters = [];
export function CharactersProvider({ children }) {
  const [characters, dispatch] = useReducer(
    characterReducer,
    initialCharacters
  );

  return (
    <CharactersContext value={characters}>
      <CharactersDispatchContext value={dispatch}>
        {children}
      </CharactersDispatchContext>
    </CharactersContext>
  );
}

function characterReducer(characters, action) {
  switch (action.type) {
    case 'set':
      return action.characters;
    case 'added':
      return [...characters, action.character];
    case 'deleted':
      return characters.filter(c => c.id !== action.id);
    case 'updated':
      return characters.map(c => {
        if (c.id !== action.character.id) return c;
        return action.character;
      });
    default:
      throw new Error('Invalid action type');
  }
}
