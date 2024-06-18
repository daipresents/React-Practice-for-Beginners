import { useReducer } from 'react';

function initCounter(init) {
  const randomInt = Math.random();
  console.log(`initCounter is called! init: ${init}, random:${randomInt}`);

  return {
    count: Math.floor(randomInt * (init + 1))
  };
}

export default function HookReducerInit({ init }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'update':
          return { count: state.count + 1 };
        default:
          return state;
      }
    },
    // これだとクリックのたびに呼び出されてしまう
    // initCounter(init),
    init,
    // 初期値生成のための関数を指定できるがこれでも2回呼び出されるのが謎。
    initCounter,
  );

  const handleClick = () => {
    dispatch({ type: 'update' });
  };

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{state.count}回、クリックされました。</p>
    </>
  )
};

