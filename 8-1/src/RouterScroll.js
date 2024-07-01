import { Outlet, ScrollRestoration } from 'react-router-dom';

export default function RouterScroll() {
  return (
    <>
      {/**
       * 常に同じ位置を復元する場合の書き方
       * <ScrollRestoration getKey={(location, mathces) => location.pathname} />
       */}
      <ScrollRestoration />
      <Outlet />
    </>
  );
}
