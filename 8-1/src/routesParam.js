import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import BookPage from './Book';
import NotFoundPage from './NotFoundPage';
import RouterParam from './RouterParam';
import SearchPage from './SearchPage';
import TopPage from './TopPage';

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route path="/" element={<TopPage />} />

      {/* ルートパラメタの指定。 ?をつけると省略可能になる */}
      <Route path="/book/:isbn?" element={<BookPage />} />

      {/* 可変長パラメタ。キャッチオールセグメント、スターセグメント */}
      <Route path="/search/*" element={<SearchPage />} />

      {/* 任意のページに対応するルート */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default routesParam;
