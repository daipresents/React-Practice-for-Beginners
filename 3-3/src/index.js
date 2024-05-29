import React from 'react';
import ReactDOM from 'react-dom/client';
import ListTemplate from './ListTemplate';
import RenderProps from './RenderProps';
import StateBasic from './StateBasic';
import StyledPanel from './StyledPannel';
import TitledPanel from './TitledPanel';
import books from './books';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const title = <p>メンバー募集中！</p>;
const body = <p>ようこそ、WINGSプロジェクトへ！</p>;

root.render(
  <React.StrictMode>
    <>
      <StateBasic init={0} />
      <hr />
      <RenderProps src={books} render={renderElem => (
        <>
          <dt>
            <a href={`https://wings.msn.to/books/${renderElem.isbn}/${renderElem.isbn}.jpg`}>
              {renderElem.title} ({renderElem.price}円)
            </a>
          </dt>
          <dd>{renderElem.summary}</dd>
        </>
      )}>
      </RenderProps>
      <hr />
      <ListTemplate src={books}>
        {book => (
          <>
            <dt>
              <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
                {book.title} ({book.price}円)
              </a>
            </dt>
            <dd>{book.summary}</dd>

          </>
        )}
      </ListTemplate>
      <hr />
      <StyledPanel>
        <p>メンバー募集中！</p>
        <p>ようこそ、WINGSプロジェクトへ！</p>
      </StyledPanel>
      <hr />
      <TitledPanel title={<p>メンバー募集中！</p>} body={<p>ようこそ、WINGSプロジェクトへ！</p>} />
      <TitledPanel title={title} body={body} />
    </>
  </React.StrictMode>
);
