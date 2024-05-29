import React from 'react';
import Download from './Download';

export default function ForItem({ book }) {
  return (
    <>
      <dt>
        <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
          {book.title} ({book.price}円)
        </a>
      </dt>
      <dd>{book.summary}</dd>
      {/** 即時関数でも解決できる */}
      {/**
       * {(() => {
       *  if (book.download) {
       *    return <dd>{book.summary}<Download isbn={book.isbn}</dd>
       *  } else {
       *    return <dd>{book.summary}</dd>
       *  }
       * })}
       */}
      {book.download ? <Download isbn={book.isbn} /> : null}
    </>
  );
}
