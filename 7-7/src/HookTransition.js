import { useState, useTransition } from 'react';
import { BookDetails, CommentList } from './HookTransitionChild';
import books from './books';
import commentList from './comments';

export default function HookTransition() {
  const [isbn, setIsbn] = useState('');
  const [comments, setComments] = useState([]);

  // トランジションを利用するための準備
  const [isPending, startTransition] = useTransition();

  const handleChange = e => {
    const isbn = e.target.value;
    setIsbn(isbn);
    // トランジションのは以下でStateを管理する
    // これでCommentsの更新が優先度低くなる
    startTransition(() => {
      setComments(commentList.filter(c => c.isbn === isbn));
    });
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
      <CommentList src={comments} />
    </>
  );
}
