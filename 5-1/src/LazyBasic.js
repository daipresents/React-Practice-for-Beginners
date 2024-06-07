import { Suspense, lazy } from 'react';
import MyLoading from './MyLoading';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));
const LazyButton2 = lazy(() => sleep(1000).then(() => import('./LazyButton2')));

export default function LazyBasic() {
  return (
    <>
      <Suspense fallback={<MyLoading />}>
        <LazyButton />
        <LazyButton2 />
      </Suspense>

      <Suspense fallback={<MyLoading />}>
        <LazyButton />
      </Suspense>

      <div>Lazyじゃない</div>
      <LazyButton2 />
    </>
  );
}
