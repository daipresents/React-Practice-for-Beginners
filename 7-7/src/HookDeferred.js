import { useDeferredValue, useState } from 'react';

export default function HookDeferred() {
  const [text, setText] = useState('');
  const deferText = useDeferredValue(text);

  const handleChange = e => {
    setText(e.target.value);

    // 入力した値textから少し遅れて deferTextが反映される
    console.log(text, deferText);
  };

  return (
    <>
      <input type='text' value={text} onChange={handleChange} />

      {/** 10000万個の要素を持つ空配列を生成しmapメソッドで処理。 ...はスプレッド構文 */}
      {[...Array(10000)].map((e, index) => <p key={index}>{deferText}</p>)}
    </>
  );
}
