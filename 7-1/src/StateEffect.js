import { useEffect, useState } from 'react';

export default function StateEffect({ init }) {
  const [count, setCount] = useState(init);
  const [hoge, setHoge] = useState('hoge');

  // フックは関数コンポーネントのトップレベルで呼び出すこと
  useEffect(() => {
    console.log(`count is ${count}`);
  }, [count]);

  // 特別な理由がなければ、引数depsは常に明示すべき。
  //
  // depsがないとuseEffect関数の処理は再描画時に常に実行される
  // useEffect(() => {
  //   console.log(`count is ${count}`);
  // });
  //
  // depsが [] だと実行のトリガーになる変数がないので、コンポーネントの初期描画時にのみ処理を実行する
  // 再描画時に処理が実行されることはない
  // useEffect(() => {
  //   console.log(`count is ${count}`);
  // }, []);
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
