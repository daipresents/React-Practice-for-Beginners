import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import RecoilCounter from './RecoilCounter';
import RecoilTodo from './RecoilTodo';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <RecoilRoot>
        <h1>Recoil Todoリスト</h1>
        <RecoilTodo />

        <h1>Recoil カウンター</h1>
        <RecoilCounter />
      </RecoilRoot>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
