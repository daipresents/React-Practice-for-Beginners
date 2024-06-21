import { useState } from 'react';
import { useRecoilState } from 'recoil';
import './StateTodo.css';
import { idsAtom, todoListSelector } from './store/atomUp';

export default function RecoilTodoUp() {
  const [title, setTitle] = useState('');

  // Reciilから取得
  const [todo, setTodo] = useRecoilState(todoListSelector);
  const [ids, setIds] = useRecoilState(idsAtom);

  const handleChangeTitle = e => setTitle(e.target.value);

  // New
  const handleAdd = () => {
    // 最大IDの次の値を取得して作成で使う
    // ...はスプレッド構文。Math.maxは配列を扱えないので、配列を一旦分解している。
    const newId = Math.max(...(ids.length ? ids : [0])) + 1;
    setTodo({
      type: 'add',
      newItem: {
        id: newId,
        title,
        isDone: false
      }
    });
  };

  // DONE
  const handleDone = e => {
    setTodo({
      type: 'done',
      id: Number(e.target.dataset.id)
    });
  };

  // Remove
  const handleRemove = e => {
    setTodo({
      type: 'remove',
      id: Number(e.target.dataset.id)
    });
  };

  return (
    <div>
      <label>
        やること：
        <input type="text" name="todo" value={title} onChange={handleChangeTitle} />
      </label>
      <button type="button" onClick={handleAdd}>追加</button>
      <hr />
      <ul>
        {todo.map(item => (
          <li key={item.id}
            className={item.isDone ? 'done' : ''}>
            {item.title}
            <button type="button" onClick={handleDone} data-id={item.id}>済</button>
            <button type="button" onClick={handleRemove} data-id={item.id}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

