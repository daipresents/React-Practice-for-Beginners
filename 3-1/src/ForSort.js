import React from 'react';
import ForItem from './ForItem';

export default function ForSort({ src }) {
  //const lowPrice = src.sort((m, n) => m.price - n.price);
  const lowPrice = src.sort((m, n) => n.price - m.price);

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
