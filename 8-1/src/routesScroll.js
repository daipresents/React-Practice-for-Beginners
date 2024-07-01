import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import FirstPage from './FirstPage';
import RouterScroll from './RouterScroll';
import SecondPage from './SecondPage';

const routesScroll = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterScroll />} >
      <Route index element={<FirstPage />} />
      <Route path="/second" element={<SecondPage />} />
    </Route>
  )
);

export default routesScroll;
