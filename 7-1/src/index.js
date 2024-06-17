import React from 'react';
import ReactDOM from 'react-dom/client';
import HookEffect from './HookEffect';
import HookTimer from './HookTimer';
import StateEffect from './StateEffect';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HookRefNg from './HookRefNg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <h1>関数コンポーネントでインスタンス変数を定義する</h1>
      <HookRefNg />
      
      <h1>描画時に同期的に処理を実行する</h1>
      <HookEffect init={10} />

      <h1>副作用フックを利用したタイマー</h1>
      <HookTimer init={10} />

      <h1>ボタンクリックのサンプル</h1>
      <StateEffect init={0} />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
