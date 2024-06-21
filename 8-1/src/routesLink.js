import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AboutPage from './AboutPage';
import ArticlePage from './ArticlePage';
import BookPage from './Book';
import Book1234Page from './Book1234';
import RouterNav from './RouterNav';
import TopPage from './TopPage';

const routesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterNav />}>
      <Route index element={<TopPage />} />
      <Route path="article" element={<ArticlePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="book" end element={<BookPage />} />
      <Route path="book/1234" element={<Book1234Page />} />
    </Route>

    // <Route path="/" element={<RouterApp />}>
    //   {/* <Route path="" element={<TopPage />} /> */}
    //   <Route index element={<TopPage />} />
    //   <Route path="article" element={<ArticlePage />} />
    //   <Route path="about" element={<AboutPage />} />
    // </Route>

    // path属性のないレイアウトルート
    // <Route element={<RouterApp />}>
    //   <Route path="/" element={<TopPage />} />
    //   <Route path="/article" element={<ArticlePage />} />
    //   <Route path="/about" element={<AboutPage />} />
    // </Route>
  )
);

export default routesLink;
