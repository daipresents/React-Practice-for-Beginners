import React from 'react';
import ReactDOM from 'react-dom/client';
import EventArgs from './EventArgs';
import EventCompare from './EventCompare';
import EventError from './EventError';
import EventKey from './EventKey';
import EventMouse from './EventMouse';
import EventObj from './EventObj';
import EventOnce from './EventOnce';
import EventPassive from './EventPassive';
import EventPoint from './EventPoint';
import EventPropagation from './EventPropagation';
import EventPropagationCap from './EventPropagationCap';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventKey />
    <hr />

    <EventPoint />
    <hr />


    <div style={{ marginTop: 300 }}>
      <EventPassive />
      <hr />

      <EventOnce />
      <hr />

      <EventPropagationCap />
      <hr />

      <EventPropagation />
      <hr />

      <EventArgs />
      <hr />

      <EventObj />
      <hr />
    </div>

    <EventMouse alt="ロゴ画像"
      beforeSrc="https://web-deli.com/image/linkbanner_l.gif"
      afterSrc="https://web-deli.com/image/home_chara.gif" />

    <EventCompare />

    <EventError src='../images/nothing.jpg' alt="サンプル画像" />
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
