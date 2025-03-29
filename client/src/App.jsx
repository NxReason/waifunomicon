import './App.css';
import { Link, Outlet } from 'react-router';
import Nav from './Nav';

function App() {
  return (
    <>
      <Nav />

      <Outlet />
    </>
  );
}

export default App;
