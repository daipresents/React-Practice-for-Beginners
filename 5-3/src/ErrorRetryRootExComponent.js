import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
import ErrorRetryThrow from './ErrorRetryThrow';

export default function ErrorRetryRootExComponent() {
  const handleReset = () => console.log('Retry!!');

  return (
    <>
      <h3>代替コンテンツをコンポーネントとして切り出す</h3>
      <ErrorBoundary onReset={handleReset} FallbackComponent={ErrorFallback}>
        <ErrorRetryThrow />
      </ErrorBoundary>
    </>
  )
}
