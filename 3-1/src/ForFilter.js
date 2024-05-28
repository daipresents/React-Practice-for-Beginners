import React from 'react';
import ForItem from './ForItem';

export default function ForFilter({ src }) {
  const lowPrice = src.filter(book => book.price < 3500);

  return (
    <dl>
      {
        lowPrice.map(elem => (
          <React.Fragment key={elem.isbn}>
            <ForItem book={elem} key={elem.isbn} />
          </React.Fragment>
        ))
      }
    </dl>
  )
}
