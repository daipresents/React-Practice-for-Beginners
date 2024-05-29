import React from 'react';
import ReactDOM from 'react-dom/client';
import StyledPanel from './StyledPannel';
import TitledPanel from './TitledPanel';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const title = <p>メンバー募集中！</p>;
const body = <p>ようこそ、WINGSプロジェクトへ！</p>;

root.render(
  <React.StrictMode>
    <>
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
