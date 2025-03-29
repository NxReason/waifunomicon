import { Outlet } from 'react-router';

export default function Overlay() {
  return (
    <div>
      <p>WuWa overlay</p>

      <Outlet />
    </div>
  );
}
