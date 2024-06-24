import { useParams } from 'react-router-dom';

export default function BookPage() {
  // isbnパラメタは省略可能なので、デフォルト値を設定
  const { isbn = 'default' } = useParams();
  return <p>ISBNコード 「{isbn}」のページです</p>;
}
