import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AboutPage from './AboutPage';
import ArticlePage from './ArticlePage';
import RouterCustom from './RouterCustom';
import TopPage from './TopPage';

const routesMyLink = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterCustom />}>
      <Route path="/" element={<TopPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

export default routesMyLink;
