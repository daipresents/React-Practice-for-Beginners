import { ErrorBoundary } from 'react-error-boundary';
import ErrorEvent from './ErrorEvent';

export default function ErrorEventRoot() {
  const handleFallback = ({ error, resetErrorBoundary }) => {
    const handleClick = () => resetErrorBoundary();

    return (
      <div>
        <h4>以下のエラーが発生しました。</h4>
        <p>{error.message}</p>
        <button type="button" onClick={handleClick}>
          Retry
        </button>
      </div>
    );
  };

  const handleReset = () => console.log('Retry!!');

  return (
    <div>
      <h3>イベントハンドラーからの例外をError Boundaryで処理する</h3>
      <ErrorBoundary onReset={handleReset} fallbackRender={handleFallback}>
        {/** これだけ動かなかった。エラー画面がでちゃう */}
        <ErrorEvent />
      </ErrorBoundary>
    </div>
  );
}
