import { useState } from 'react';

export default function StateBasic({ init }) {
  const [count, setCount] = useState(init);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  const [count2, setCount2] = useState(init);
  const handleClick2 = () => {
    setCount2(count2 => count2 + 1);
    setCount2(count2 => count2 + 1);
  };

  return (
    <>
      <button onClick={handleClick2}>カウント</button>
      <p>{count2}回、クリックされました。</p>

      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  )
}
