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
        <li><NavLink to="/book/form">書籍登録フォーム</NavLink></li>
        <li><NavLink to="/book" end>/book 規定の書籍</NavLink></li>
        <li><NavLink to="/book/978-4-7981-7613-0">/book/:isbn</NavLink></li>
        <li><NavLink to="/book/978-4-627-85711-7">/book/:isbn</NavLink></li>
        <li><NavLink to="/search/react/router/remix">検索結果</NavLink></li>
        <li><NavLink to="/nothing/foo/bar">存在しないページ</NavLink></li>
        <li><NavLink to="/bookQuery?isbn=978-4-627-85711-7">クエリ版</NavLink></li>
        <li><NavLink to="/bookState" state="978-4-627-85711-7">State版</NavLink></li>
      </ul>
      <hr />
      <Outlet context={[count, setCount]} />
    </>
  );
}
