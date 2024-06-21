import { memo } from 'react';

// memo関数でコンソールログが4回 ＞ 3回 になる。
export const MyButton = memo(({ id, handleClick, children }) => {
  console.log(`MyButton is called: ${id}`);

  return (
    <button onClick={handleClick}>{children}</button>
  );
});

export const MyCounter = memo(({ id, value }) => {
  console.log(`MyCounter is called: ${id}`);

  return (
    <p>現在値： {value}</p>
  );
});
