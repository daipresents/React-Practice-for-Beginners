import React from 'react';
import ReactDOM from 'react-dom/client';
import FormBasic from './FormBasic';
import FormYup from './FormYup';
import FormYupJapan from './FormYupJapan';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <FormYupJapan />
      <hr />
      <FormYup />
      <hr />
      <FormBasic />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
