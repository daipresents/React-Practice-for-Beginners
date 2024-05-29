import React from 'react';

// 分割代入している
export default function ListTemplate({ src, children }) {
  return (
    <dl>
      {src.map(elem => (
        <React.Fragment key={elem.isbn}>
          {children(elem)}
        </React.Fragment>
      ))}
    </dl>
  );
}
