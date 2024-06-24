import { NavLink, Outlet } from 'react-router-dom';
import './RouterNav.css';

export default function RouterParam() {
  return (
    <>
      <ul>
        <li><NavLink to="/">トップ</NavLink></li>
        <li><NavLink to="/book" end>/book 規定の書籍</NavLink></li>
        <li><NavLink to="/book/1234">/book/1234</NavLink></li>
        <li><NavLink to="/book/1234-5678">/book/1234-5678</NavLink></li>
        <li><NavLink to="/search/react/router/remix">検索結果</NavLink></li>
        <li><NavLink to="/nothing/foo/bar">存在しないページ</NavLink></li>
      </ul>
      <hr />
      <Outlet />
    </>
  )
}
