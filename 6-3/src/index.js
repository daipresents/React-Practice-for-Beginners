import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import QueryBasic from './QueryBasic';
import QueryPre from './QueryPre';
import QuerySuspense from './QuerySuspense';
import './index.css';
import reportWebVitals from './reportWebVitals';

const cliSuspense = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const cli = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <h1>React Query / Suspense and Error Boundaryを使う場合</h1>
      <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
        <QueryClientProvider client={cliSuspense}>
          <QuerySuspense />
        </QueryClientProvider>
      </ErrorBoundary>

      <h1>React Query</h1>
      <QueryClientProvider client={cli}>
        <QueryBasic />
      </QueryClientProvider>

      <h1>feachを使う場合</h1>
      <QueryPre />
    </>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
