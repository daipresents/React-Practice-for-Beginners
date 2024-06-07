import React from 'react';
import ReactDOM from 'react-dom/client';
import LazyBasic from './LazyBasic';
import LazyMulti from './LazyMulti';
import SuspenseResult from './SuspenseResult';
import SuspenseSimple from './SuspenseSimple';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <SuspenseResult />
      <hr />
      <SuspenseSimple />
      <hr />
      <LazyMulti />
      <hr />
      <LazyBasic />
    </>
  </React.StrictMode>
);
