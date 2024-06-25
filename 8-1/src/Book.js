import { useParams } from 'react-router-dom';
import MyHeader from './MyHeader';
import books from './books';

export default function BookPage() {
  // ページ全体でカウントする場合は以下を追記
  // const [, setCount] = useOutletContext();
  // useEffect(() => setCount(c => c + 1), [setCount]);

  // isbnパラメタは省略可能なので、デフォルト値を設定
  const { isbn = '978-4-297-13288-0' } = useParams();
  // ISBNがないとここで落ちるので注意
  const { title, summary } = books.find(b => isbn === b.isbn);

  return (
    <>
      <MyHeader title={title} keywords={title} description={summary} />
      <p>ISBNコード： 「{isbn}」のページです。</p>
    </>
  );
}
