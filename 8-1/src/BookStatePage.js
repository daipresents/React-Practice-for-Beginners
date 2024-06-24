import { useLocation } from 'react-router-dom';

export default function BookStatePage() {
  const { state: isbn = '123456' } = useLocation();

  return (
    <>
      <p>ISBNコード「{isbn}」のページです。</p>
    </>
  );
}
