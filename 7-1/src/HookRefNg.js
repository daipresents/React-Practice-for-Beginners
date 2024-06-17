/**
 * useRef関数の本質は、コンポーネントが生成されてから破棄されるまで維持される、変更可能なオブジェクト
 * useRef関数の利用は、要素へのフォーカス・スクロール、
 * あるいはアニメーション操作のような、ごく限定された状況にとどめておく。
 *
 * useStateはState値が変更された場合に再描画が発生する
 * useRefはRef値が変更されても再描画しない。
 */

import { useRef, useState } from 'react';

export default function HookRef() {
  const id = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (id.current === null) {
      id.current = setInterval(() => setCount(c => c + 1), 1000);
    }
  };

  const handleEnd = () => {
    clearInterval(id.current);
    id.current = null;
  };

  return (
    <>
      <button onClick={handleStart}>開始</button>
      <button onClick={handleEnd}>終了</button>
      <p>{count}秒経過</p>
    </>
  );
}

// // これだと終了ボタンが動かない。
// // 開始をもう一度押すと2重カウントされてしまう。
// import { useState } from 'react';

// export default function HookRefNg() {
//   let id = null;
//   const [count, setCount] = useState(0);

//   const handleStart = () => {
//     if (id === null) {
//       // 複数のタイマーがcountを更新してしまう。
//       id = setInterval(() => setCount(c => c + 1), 1000);
//       console.log(`id: ${id}`);
//     }
//   };

//   const handleEnd = () => {
//     /**
//      * 関数コンポーネントは再描画のたび（この例ではState値が更新されるたび）に再実行される。
//      * よって、ローカル変数idについて、setInterval関数が実行されたときのidと、
//      * clearInterval関数が実行されるときのidが別物なので終了しない。
//      */
//     clearInterval(id);
//     id = null;
//     console.log(`id: ${id}`);
//   };

//   return (
//     <>
//       <button onClick={handleStart}>開始</button>
//       <button onClick={handleEnd}>終了</button>
//       <p>{count}秒経過</p>
//     </>
//   );
// }
