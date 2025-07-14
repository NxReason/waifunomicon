import { Outlet } from 'react-router';
import Nav from './Nav';

export default function Layout() {
  return (
    <>
      <Nav />
      <main className="page">
        <Outlet />
      </main>
    </>
  );
}
