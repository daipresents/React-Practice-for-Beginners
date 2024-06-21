import React from 'react';
import ReactDOM from 'react-dom/client';
import { default as HookDeferred, default as HookDeferredTransition } from './HookDeferredTransition';
import HookTransition from './HookTransition';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <h1>useTransitonの代わりにuseDeferredを使うパターン</h1>
      <HookDeferredTransition />

      <h1>特定の値の「遅延バージョン」を生成する（useDeferredValue）</h1>
      <HookDeferred />

      <h1>複数のStateに応じてページを制御する例(useTransition)</h1>
      <HookTransition />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
