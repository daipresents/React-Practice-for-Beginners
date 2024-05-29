import React from 'react';
import ReactDOM from 'react-dom/client';
import EventCompare from './EventCompare';
import EventError from './EventError';
import EventMouse from './EventMouse';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventMouse alt="ロゴ画像"
      beforeSrc="https://web-deli.com/image/linkbanner_l.gif"
      afterSrc="https://web-deli.com/image/home_chara.gif" />

    <EventCompare />

    <EventError src='../images/nothing.jpg' alt="サンプル画像" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
