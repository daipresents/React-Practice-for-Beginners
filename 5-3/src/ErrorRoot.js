import { ErrorBoundary } from 'react-error-boundary';
import ErrorThrow from './ErrorThrow';

export default function ErrorRoot() {
  return (
    <>
      <h3>Error Boundaryの基本</h3>
      {/** エラー時の処理は次のように書く： onError={err => alert(err.message)} */}
      <ErrorBoundary fallback={<div>from ErrorThrow</div>}>
        {/** うまくError取得できなかったが npm start やりなおしたら動いた */}
        <ErrorThrow />
      </ErrorBoundary>
    </>
  );
}
