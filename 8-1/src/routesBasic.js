import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './AboutPage';
import ArticlePage from './ArticlePage';
import TopPage from './TopPage';

const routesBasic = createBrowserRouter([
  { path: '/', element: <TopPage /> },
  { path: '/article', element: <ArticlePage /> },
  { path: '/about', element: <AboutPage /> },
]);

export default routesBasic;
