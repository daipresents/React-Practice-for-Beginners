import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorEventRoot from './ErrorEventRoot';
import ErrorRetryRoot from './ErrorRetryRoot';
import ErrorRetryRootExComponent from './ErrorRetryRootExComponent';
import ErrorRoot from './ErrorRoot';
import PortalBasic from './PortalBasic';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <h1>Error Boundary</h1>
      <ErrorEventRoot />

      <ErrorRetryRootExComponent />

      <ErrorRetryRoot />

      <ErrorRoot />

      <h1>ポータル</h1>
      <div id="dialog"></div>
      <PortalBasic />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
