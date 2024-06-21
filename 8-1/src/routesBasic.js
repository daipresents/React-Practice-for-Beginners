import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AboutPage from './AboutPage';
import ArticlePage from './ArticlePage';
import TopPage from './TopPage';

//const routesBasic = createBrowserRouter(
// オブジェクト配列で定義
// [
//   { path: '/', element: <TopPage /> },
//   { path: '/article', element: <ArticlePage /> },
//   { path: '/about', element: <AboutPage /> },
// ],
// basename指定も可能
// {
//   basename: '/myapp',
// }
//);

// タグ形式でも記載できる。
const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TopPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/about" element={<AboutPage />} />
    </>
  )
);

export default routesBasic;
