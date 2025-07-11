import './App.css';
import { Routes, Route } from 'react-router';

import { CharactersProvider } from './characters/CharacterContext';
import Characters from './characters/Characters';
import NotFound from './pages/NotFound';
import Character from './characters/Character';
import FormController from './characters/FormController';

function App() {
  return (
    <CharactersProvider>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/characters/new" element={<FormController />} />
        <Route path="/characters/:id/edit" element={<FormController />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </CharactersProvider>
  );
}

export default App;
