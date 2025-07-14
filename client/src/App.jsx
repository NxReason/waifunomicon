import './App.css';
import { Routes, Route } from 'react-router';
import { useEffect } from 'react';

import { useCharactersDispatch } from './characters/CharacterContext';
import { useArtifactSetsDispatch } from './artifactSets/ArtifactSetsContext';
import Characters from './characters/Characters';
import NotFound from './pages/NotFound';
import Character from './characters/Character';
import FormController from './characters/FormController';
import * as charactersAPI from './api/characters';
import * as artifactSetsAPI from './api/artifactSets';
import Home from './pages/Home';
import ArtifactSets from './artifactSets/ArtifactSets';
import Layout from './Layout';
import ArtifactSet from './artifactSets/ArtifactSet';

function App() {
  usePreload();

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
          <Route path=":id" element={<ArtifactSet />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function usePreload() {
  const dispatchCharacters = useCharactersDispatch();
  const dispatchArtifactSets = useArtifactSetsDispatch();
  useEffect(() => {
    charactersAPI.all().then(({ ok, data }) => {
      if (ok) {
        dispatchCharacters({
          type: 'set',
          characters: data,
        });
      }
    });

    artifactSetsAPI.all().then(({ ok, data }) => {
      if (ok) {
        dispatchArtifactSets({
          type: 'set',
          artifactSets: data,
        });
      }
    });
  }, []);
}

export default App;
