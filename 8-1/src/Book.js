import { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

export default function BookPage() {
  const [, setCount] = useOutletContext();
  useEffect(() => setCount(c => c + 1), [setCount]);

  // isbnパラメタは省略可能なので、デフォルト値を設定
  const { isbn = 'default' } = useParams();
  return <p>ISBNコード 「{isbn}」のページです</p>;
}
