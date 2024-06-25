import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import routesHandle from './routesHandle';
import routesParam from './routesParam';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      {/* <RouterProvider router={routesBasic} /> */}
      {/* <RouterProvider router={routesLink} /> */}
      <RouterProvider router={routesParam} />
      {/* <HelmetProvider>
        <RouterProvider router={routesHandle} />
      </HelmetProvider> */}
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
