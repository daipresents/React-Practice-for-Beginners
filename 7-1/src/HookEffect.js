import { useEffect, useLayoutEffect, useState } from 'react';

const sleep = delay => {
  const start = Date.now();
  while (true) {
    if (Date.now() - start > 1000) {
      break;
    }
  }
};

export default function HookEffect({ init }) {
  // 初期値をここで定義
  const [count, setCount] = useState(0);

  // 初期値0が表示されてからinitの値10が表示される。
  // 基本はこちらを使う
  // useEffect(() => {
  //   sleep(2000);
  //   setCount(init);
  // }, []);

  // ページが表示されない状態が数秒続いた後、最初からinitの値10が表示される。
  // 描画的に同期的に実行される。
  // 同期的に最初に処理されるので体感速度が低下する
  // 利用例： 特定の要素をクリックするとその左上にメニュー表示する場合に
  //        表示前に左上に十分な余白があるかを確認する必要があるから。
  useLayoutEffect(() => {
    sleep(2000);
    setCount(init);
  }, []);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  )
}
