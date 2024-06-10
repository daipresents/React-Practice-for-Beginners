import React from 'react';
import ReactDOM from 'react-dom/client';
import StyledBasic from './StyleBasic';
import StyledDynamic from './StyleDynamic';
import StyledCss from './StyledCss';
import StyledCssGlobal from './StyledCssGlobal';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <StyledDynamic theme={{
        radius: true,
        color: 'pink'
      }} />
      <hr />

      <h3 class="external">Styled JSXの外部化 Global化</h3>
      <StyledCssGlobal />
      <hr />

      <h3>Styled JSXの外部化</h3>
      <StyledCss />
      <hr />

      <h3 class="basic">Styled JSXの基本</h3>
      <StyledBasic />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
