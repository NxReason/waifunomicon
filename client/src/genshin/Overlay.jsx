import { Outlet } from 'react-router';
import Nav from '../components/Nav';
import GenshinNav from './GINav';

export default function Overlay() {
  return (
    <div className="section-overlay">
      <Nav>
        <GenshinNav />
      </Nav>

      <div className="section-content">
        <Outlet />
      </div>
    </div>
  );
}
