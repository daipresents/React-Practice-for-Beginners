import { Link } from 'react-router-dom';

export default function InfoPage() {
  return (
    <>
      <p>Infoページ</p>
      {/* /article/info なので/articleに戻ってほしいがこのままだとトップページに戻る
          React Routerの規定ではルート階層でお互いの関係を認識する */}
      {/* <Link to="..">トップ</Link> */}

      {/* relative属性によって相対パスがパス階層でもって認識されるようになる */}
      <Link to=".." relative="path">トップ</Link>
    </>
  );
}
