import './App.css';
import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

import Genshin from './genshin';
import GenshinOverlay from './genshin/Overlay';
import GICharacters from './genshin/characters';
import GICharacter from './genshin/character';
import Artifacts from './genshin/artifacts';
import GIWeapons from './genshin/weapons';

import Wuwa from './wuwa';
import WuwaOverlay from './wuwa/Overlay';
import WWCharacters from './wuwa/characters';
import WWCharacter from './wuwa/character';
import Echoes from './wuwa/echoes';
import WWWeapons from './wuwa/weapons';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="genshin" element={<Genshin />} />
        <Route path="genshin" element={<GenshinOverlay />}>
          <Route path="characters" element={<GICharacters />} />
          <Route path="characters/:id" element={<GICharacter />} />
          <Route path="artifacts" element={<Artifacts />} />
          <Route path="weapons" element={<GIWeapons />} />
        </Route>

        <Route path="wuwa" element={<Wuwa />} />
        <Route path="wuwa" element={<WuwaOverlay />}>
          <Route path="characters" element={<WWCharacters />} />
          <Route path="characters/:id" element={<WWCharacter />} />
          <Route path="echoes" element={<Echoes />} />
          <Route path="weapons" element={<WWWeapons />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
