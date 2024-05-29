import React from 'react';
import ReactDOM from 'react-dom/client';
import EventBasic from './EventBasic';
import ForFilter from './ForFilter';
import ForList from './ForList';
import ForSort from './ForSort';
import MyHello from './MyHello';
import SelectStyle from './SelectStyle';
import StateBasic from './StateBasic';
import books from './books';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <p>
        <SelectStyle mode='light' />
      </p>
      <hr />

      <p>
        <SelectStyle mode='dark' />
      </p>
      <hr />

      <p>
        <MyHello myName="鈴木" />
      </p>
      <hr />

      <p>
        <EventBasic type="time" />
      </p>
      <hr />

      <p>
        <StateBasic init={0} />
      </p>
      <hr />

      <p>
        <ForList src={books} />
      </p>

      <hr />

      <p>
        <ForFilter src={books} />
      </p>
      <hr />

      <p>
        <ForSort src={books} />
      </p>
      <hr />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
