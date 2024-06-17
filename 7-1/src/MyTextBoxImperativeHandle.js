import { forwardRef, useImperativeHandle, useRef } from 'react';

const MyTextBoxImperativeHandle = forwardRef(({ label }, ref) => {
  const input = useRef(null);

  /**
   * useImperativeHandle関数を利用する際は、forwardRef関数との併用が前提
   * 前のサンプルもindex.jsに書いているのでフォーカスはそちらにうつっちゃうけど
   * コメントアウトして動くことを確認した。
   *
   * useRefでもできるが、こちらの方法は内部のロジックを部分的に公開するので、
   * コンポーネントの中身をいじることができない。
   */

  // 親コンポーネントに対して公開するオブジェクトを生成
  useImperativeHandle(ref, () => {
    return {
      focus() {
        input.current.focus();
      }
    };
  }, []);

  return (
    <label>
      {label} :
      <input type='text' size='15' ref={input} />
    </label>
  );
});

export default MyTextBoxImperativeHandle;
