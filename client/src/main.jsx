import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import { CharactersProvider } from './characters/CharacterContext.jsx';
import { ArtifactSetsProvider } from './artifactSets/ArtifactSetsContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CharactersProvider>
      <ArtifactSetsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ArtifactSetsProvider>
    </CharactersProvider>
  </StrictMode>
);
