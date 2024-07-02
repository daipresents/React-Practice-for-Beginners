import React, { FC, ReactNode } from 'react';
import type { Book } from './Book';

type ListTemplateProps = {
  src: Array<Book>,
  children: (b: Book) => ReactNode
};

const ListTemplate: FC<ListTemplateProps> = ({src, children }) => {
  return (
    <dl>
      {
        src.map((elem, index) => (
          <React.Fragment key={elem.isbn}>
            {children(elem)}
          </React.Fragment>
        ))
      }
    </dl>
  );
}

export default ListTemplate;
