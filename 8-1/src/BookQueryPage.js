import { useSearchParams } from 'react-router-dom';

export default function BookQueryPage() {
  const [params, setParams] = useSearchParams(
    { isbn: 'default' }
  );

  return <p>ISBNコード 「{params.get('isbn')}」のページです</p>;
}
