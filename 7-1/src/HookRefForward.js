import { useEffect, useRef } from 'react';
import MyTextBox from './MyTextBox';

/**
 * 関数コンポーネントはインスタンスを持たないので、ref属性はわたせない。参照することもできない。
 * よってforwardRefを使う。
 * Warning: MyTextBox: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)
 *
 */
export default function HookRefForward() {
  const text = useRef(null);
  useEffect(() => {
    // アプリ起動時にフォーカスを当てる
    text.current?.focus();
  }, []);

  return (
    <MyTextBox label="名前" ref={text} />
  );
}
