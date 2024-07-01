import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import routesHandle from './routesHandle';
import { HelmetProvider } from 'react-helmet-async';
import routesScroll from './routesScroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      {/** ルーティングの基本 */}
      {/* <RouterProvider router={routesBasic} /> */}

      {/** リンク設置の基本 */}
      {/* <RouterProvider router={routesLink} /> */}

      {/** ルーター経由で情報を受けわたす */}
      {/* <HelmetProvider>
        <RouterProvider router={routesParam} />
      </HelmetProvider> */}

      {/** ルート固有の情報を取得する handle属性 */}
      {/* <HelmetProvider>
        <RouterProvider router={routesHandle} />
      </HelmetProvider> */}

      { /** 現在のページへのリンクを解除する */}
      {/* <HelmetProvider>
        <RouterProvider router={routesMyLink} />
      </HelmetProvider> */}

      {/** スクロール位置を復元する ScrollRestoration */}
      <HelmetProvider>
        <RouterProvider router={routesScroll} />
      </HelmetProvider>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
