import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import BookPage from './Book';
import RouterParam from './RouterParam';
import TopPage from './TopPage';

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route path="/" element={<TopPage />} />
      <Route path="/book/:isbn" element={<BookPage />} />
    </Route>
  )
);

export default routesParam;
