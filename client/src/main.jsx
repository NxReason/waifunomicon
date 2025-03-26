import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import Genshin from './Genshin.jsx';
import Wuwa from './Wuwa.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/genshin" element={<Genshin />} />
          <Route path="/wuwa" element={<Wuwa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
