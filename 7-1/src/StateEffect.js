import { useEffect, useState } from 'react';

export default function StateEffect({ init }) {
  const [count, setCount] = useState(init);
  const [hoge, setHoge] = useState('hoge');

  // フックは関数コンポーネントのトップレベルで呼び出すこと
  useEffect(() => {
    console.log(`count is ${count}`);
  }, [count]);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      {/* ボタンにタイムスタンプ値を反映 */}
      <button onClick={() => setHoge(Date.now())}>Hoge ({hoge})</button>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}
