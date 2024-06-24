import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  // プログラムからのページ移動
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  // navigate(-1); // ひとつ前のページに戻る場合

  return (
    <>
      <p>Aboutページです。</p>
      <button type="button" onClick={handleClick}>
        トップへ移動</button>
    </>
  );
}
