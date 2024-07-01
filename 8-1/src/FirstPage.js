import { Link } from 'react-router-dom';

export default function FirstPage() {
  return (
    <>
      <h2>FirstPage</h2>
      <hr />
      <p style={{ height: 800 }}></p>
      <p><Link to="/second">SecondPageへ</Link></p>
      <p><Link to="/second" preventScrollReset>スクロールの復元機能を無効にする</Link></p>
    </>
  );
}
