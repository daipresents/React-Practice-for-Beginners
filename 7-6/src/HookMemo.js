import { useCallback, useMemo, useState } from 'react';
import { MyButton, MyCounter } from './HookMemoChild';

const sleep = delay => {
  const start = Date.now();
  while (Date.now() - start < delay);
};

export default function HookMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 関数そのものをMemo。これでログが1行だけ表示される。
  const increment = useCallback(() => setCount1(c => c + 1), []);
  const decrement = useCallback(() => setCount2(c => c - 1), []);

  // count1だけ反応するので、 count2は影響を受けない。
  const heavyProcess = useMemo(() => {
    sleep(1000);
    return count1 + 100;
  }, [count1]);

  return (
    <>
      <div>
        <MyButton id='btn1' handleClick={increment}>カウントアップ</MyButton>
        <MyCounter id='c1' value={count1} /> /
        {/** 毎回読み込みが重くなる部分。Stateが変わるたびに再描画となり呼び出されてしまう */}
        {heavyProcess}
      </div>
      <div>
        <MyButton id='btn2' handleClick={decrement}>カウントダウン</MyButton>
        <MyCounter id='c2' value={count2} />
      </div>
    </>
  )
}
