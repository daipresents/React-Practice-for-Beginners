import { useDeferredValue, useState } from 'react';
import { BookDetails, CommentList } from './HookTransitionChild';
import books from './books';
import commentList from './comments';

export default function HookDeferredTransition() {
  const [isbn, setIsbn] = useState('');
  const [comments, setComments] = useState([]);

  // useTransitionの代わりにuseDeferredValueを使う
  const deferredComments = useDeferredValue(comments);

  // useDeferredValue関数はisPendingを持たないので、commentsとdeferredCommentsに差分があるとisPending=trueとする
  const isPending = comments !== deferredComments;

  const handleChange = e => {
    const isbn = e.target.value;
    setIsbn(isbn);

    // トランジションのは以下でStateを管理する
    // これでCommentsの更新が優先度低くなる
    setComments(commentList.filter(c => c.isbn === isbn));
  };

  return (
    <>
      <select onChange={handleChange}>
        <option value="">選択してください。</option>
        {books.map(b => (
          <option key={b.isbn} value={b.isbn}>{b.title}</option>
        ))}
      </select>
      <BookDetails isbn={isbn} />

      <hr />

      {/** 何もしないとコメントだけuseTransitionで遅れて表記されるので、 isPendingを使ってローディング状態を示す */}
      <CommentList src={deferredComments} isPending={isPending} />
    </>
  );
}
