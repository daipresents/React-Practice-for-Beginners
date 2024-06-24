import { Link, Outlet } from 'react-router-dom';

export default function RouterApp() {
  return (
    <>
      <ul>
        {/* reloadDocument属性でページ全体をリフレッシュ */}
        <li><Link to="/" reloadDocument>トップ</Link></li>
        <li><Link to="/article">公開記事 /article</Link></li>
        <li><Link to="/article/info">公開記事 Infoページ /article</Link></li>
        <li><Link to="/book">/book</Link></li>
        <li><Link to="/book/1234">/book/1234</Link></li>
        {/* ブラウザに履歴を追加しないリンクを作成する */}
        <li><Link to="/about" replace>このサイトについて</Link></li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
