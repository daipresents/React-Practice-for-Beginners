import { useReducer } from 'react';

export default function HookReducer({ init }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'update':
          return { count: state.count + 1 };
        default:
          return state;
      }
    },

    // Stateの初期値
    {
      count: init
    }
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
