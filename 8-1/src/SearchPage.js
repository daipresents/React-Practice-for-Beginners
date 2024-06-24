import { useParams } from 'react-router-dom';

export default function SearchPage() {
  const { '*': keywords } = useParams();

  // こうも書ける
  const keywords2 = useParams();
  console.log(keywords2['*']);

  return <p>検索ワード「{keywords}」のページです。</p>;
}
