import './App.css';
import { Routes, Route } from 'react-router';
import Characters from './characters/Characters';
import NotFound from './pages/NotFound';
import Character from './characters/Character';
import FormController from './characters/FormController';
import { CharactersContext } from './characters/CharacterContext';

const initialCharacters = [
  { id: 1, Name: 'Raiden' },
  { id: 2, Name: 'Skirk' },
  { id: 3, Name: 'Yelan' },
  { id: 4, Name: 'Mavuika' },
  { id: 5, Name: 'Arle' },
  { id: 6, Name: 'Ayaka' },
  { id: 7, Name: 'Jean' },
];

function App() {
  return (
    // <CharactersContext value={initialCharacters}>
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/characters/:id" element={<Character />} />
      <Route path="/characters/new" element={<FormController />} />
      <Route path="/characters/:id/edit" element={<FormController />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
    // </CharactersContext>
  );
}

export default App;
