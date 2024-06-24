import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './RouterNav.css';

export default function RouterParam() {

  const [count, setCount] = useState(0);

  return (
    <>
      <p>アクセス数: {count}</p>
      <ul>
        <li><NavLink to="/">トップ</NavLink></li>
        <li><NavLink to="/book" end>/book 規定の書籍</NavLink></li>
        <li><NavLink to="/book/1234">/book/1234</NavLink></li>
        <li><NavLink to="/book/1234-5678">/book/1234-5678</NavLink></li>
        <li><NavLink to="/search/react/router/remix">検索結果</NavLink></li>
        <li><NavLink to="/nothing/foo/bar">存在しないページ</NavLink></li>
        <li><NavLink to="/bookQuery?isbn=4321">クエリ版</NavLink></li>
        <li><NavLink to="/bookState" state="1234567-7654">State版</NavLink></li>
      </ul>
      <hr />
      <Outlet context={[count, setCount]} />
    </>
  );
}
