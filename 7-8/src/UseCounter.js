import { useDebugValue, useReducer } from 'react';

export default function useCounter(init, step) {
  // カウンターを管理するためのState/Reducerを準備
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'update':
          return { count: state.count + action.step };
        case 'reset':
          return { count: action.init };
        default:
          return state;
      }
    },
    {
      count: init
    }
  );

  // カスタムフック内の値を監視。React Developer Toolsに表示できる。
  useDebugValue(state.count >= 10 ? '10 over' : '10 less');

  const handleUp = () => dispatch({ type: 'update', step });
  const handleDown = () => dispatch({ type: 'update', step: -step });
  const handleReset = () => dispatch({ type: 'reset', init });
  return [state, handleUp, handleDown, handleReset];
}
