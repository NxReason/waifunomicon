import './App.css';
import { Routes, Route } from 'react-router';
import { useEffect } from 'react';

import { useCharactersDispatch } from './characters/CharacterContext';
import Characters from './characters/Characters';
import NotFound from './pages/NotFound';
import Character from './characters/Character';
import FormController from './characters/FormController';
import * as charactersAPI from './api/characters';
import Home from './pages/Home';
import ArtifactSets from './artifactSets/ArtifactSets';
import Layout from './Layout';

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
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="characters">
          <Route index element={<Characters />} />
          <Route path=":id" element={<Character />} />
          <Route path="new" element={<FormController />} />
          <Route path=":id/edit" element={<FormController />} />
        </Route>

        <Route path="artifact-sets">
          <Route index element={<ArtifactSets />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
