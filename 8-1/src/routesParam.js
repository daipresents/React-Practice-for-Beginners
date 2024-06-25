import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import BookPage from './BookPage';
import BookQueryPage from './BookQueryPage';
import BookStatePage from './BookStatePage';
import InvalidParamsPage from './InvalidParamsPage';
import NotFoundPage from './NotFoundPage';
import RouterParam from './RouterParam';
import SearchPage from './SearchPage';
import TopPage from './TopPage';

const routesParam = createBrowserRouter(
  createRoutesFromElements(

    // ここにerrorElementをつけるとページ全体がエラーページに切り替わる
    <Route element={<RouterParam />}>

      <Route path="/" element={<TopPage />} />

      {/* ルートパラメタの指定。 ?をつけると省略可能になる */}
      <Route path="/book/:isbn?" element={<BookPage />} errorElement={<InvalidParamsPage />} />

      {/* 可変長パラメタ。キャッチオールセグメント、スターセグメント */}
      <Route path="/search/*" element={<SearchPage />} />

      {/* 任意のページに対応するルート */}
      <Route path="*" element={<NotFoundPage />} />

      {/* クエリ情報を取得 */}
      <Route path="/bookQuery" element={<BookQueryPage />} />

      {/* State属性 */}
      <Route path="/bookState" element={<BookStatePage />} />
    </Route>
  )
);

export default routesParam;
