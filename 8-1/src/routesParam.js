import { Route, createBrowserRouter, createRoutesFromElements, redirect } from 'react-router-dom';
import { date, number, string } from 'yup';
import BookFormPage from './BookFormPage';
import BookPage from './BookPage';
import BookQueryPage from './BookQueryPage';
import BookStatePage from './BookStatePage';
import InvalidParamsPage from './InvalidParamsPage';
import NotFoundPage from './NotFoundPage';
import RouterParam from './RouterParam';
import SearchPage from './SearchPage';
import TopPage from './TopPage';
import yup from './yup.jp';

const bookAction = async ({ request }) => {

  const form = await request.formData();

  const bookSchema = yup.object({
    title: string().label('書名').required().max(100),
    price: number().label('価格').integer().positive(),
    published: date().label('刊行日').required().max(new Date(2100, 0, 1))
  });

  let info;

  try {
    info = await bookSchema.validate({
      title: form.get('title'),
      price: form.get('price') || 0,
      published: new Date(form.get('published') || Date.now()),
    }, {
      abortEarly: false
    });

    console.log(info);
    return redirect('/');

  } catch (e) {
    return e.errors;
  }
};

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

      {/* ルートで発生したアクションを処理する action属性 */}
      <Route path="/book/form" element={<BookFormPage />} action={bookAction} />
    </Route>
  )
);

export default routesParam;
