import { useEffect, useRef } from 'react';
import MyTextBoxImperativeHandle from './MyTextBoxImperativeHandle';

/**
 * 関数コンポーネントはインスタンスを持たないので、ref属性はわたせない。参照することもできない。
 * よってforwardRefを使う。
 * Warning: MyTextBox: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)
 *
 */
export default function HookRefImperativeHandle() {
  const text = useRef(null);
  useEffect(() => {
    // アプリ起動時にフォーカスを当てる
    text.current?.focus();
  }, []);

  return (
    <MyTextBoxImperativeHandle label="名前" ref={text} />
  );
}
