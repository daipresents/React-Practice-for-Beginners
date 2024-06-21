import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AboutPage from './AboutPage';
import ArticlePage from './ArticlePage';
import RouterApp from './RouterApp';
import TopPage from './TopPage';

const routesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterApp />}>
      {/* <Route path="" element={<TopPage />} /> */}
      <Route index element={<TopPage />} />
      <Route path="article" element={<ArticlePage />} />
      <Route path="about" element={<AboutPage />} />
    </Route>

    // path属性のないレイアウトルート
    // <Route element={<RouterApp />}>
    //   <Route path="/" element={<TopPage />} />
    //   <Route path="/article" element={<ArticlePage />} />
    //   <Route path="/about" element={<AboutPage />} />
    // </Route>
  )
);

export default routesLink;
