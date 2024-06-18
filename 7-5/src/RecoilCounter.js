import { useRecoilState, useResetRecoilState } from 'recoil';
import { counterAtom } from './store/atom';

export default function RecoilCounter() {
  const [counter, setCounter] = useRecoilState(counterAtom);

  // ↑ こうも書ける
  // const counter = useRecoilValue(counterAtom);
  // const setCounter = useRecoilState(counterAtom);

  // 初期化
  const resetCounter = useResetRecoilState(counterAtom);

  const handleClick = () => {
    setCounter(c => c + 1);
  };

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <button onClick={resetCounter}>Reset</button>
      <p>{counter}回、クリックされました。</p>
    </>
  );
}
