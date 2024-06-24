import { NavLink, Outlet } from 'react-router-dom';
import './RouterNav.css';

export default function RouterParam() {
  return (
    <>
      <ul>
        <li><NavLink to="/">トップ</NavLink></li>
        <li><NavLink to="/book/1234">/book/1234</NavLink></li>
        <li><NavLink to="/book/1234-5678">/book/1234-5678</NavLink></li>
      </ul>
      <hr />
      <Outlet />
    </>
  )
}
