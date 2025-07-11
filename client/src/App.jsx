import './App.css';
import { Routes, Route } from 'react-router';
import { useEffect } from 'react';

import { useCharactersDispatch } from './characters/CharacterContext';
import Characters from './characters/Characters';
import NotFound from './pages/NotFound';
import Character from './characters/Character';
import FormController from './characters/FormController';
import * as charactersAPI from './api/characters';

function App() {
  const dispatch = useCharactersDispatch();
  useEffect(() => {
    charactersAPI.all().then(({ ok, data }) => {
      if (ok) {
        dispatch({
          type: 'set',
          characters: data,
        });
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/characters/:id" element={<Character />} />
      <Route path="/characters/new" element={<FormController />} />
      <Route path="/characters/:id/edit" element={<FormController />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
