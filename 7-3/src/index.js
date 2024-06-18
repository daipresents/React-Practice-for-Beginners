import React from 'react';
import ReactDOM from 'react-dom/client';
import HookContext from './HookContext';
import HookReducer from './HookReducer';
import HookReducerInit from './HookReducerInit';
import HookreducerUp from './HookReducerUp';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>コンテキストの基本</h1>
    <HookContext />

    <h1>Stateの初期値を生成する場合の注意点</h1>
    <HookReducerInit init={0} />

    <h1>Reducerを複数のAction型に対応する</h1>
    <HookreducerUp init={0} />

    <h1>useReducer フックの基本</h1>
    <HookReducer init={0} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
