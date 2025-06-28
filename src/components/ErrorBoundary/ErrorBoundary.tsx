import { FC, PropsWithChildren, useState } from 'react';
import { ErrorBoundary as ErrorBoundaryComponent, ErrorBoundaryProps } from 'react-error-boundary';
import ErrorFallback from '../ErrorFallback';

const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  const [resetKey, setResetKey] = useState<number>(0);

  const resetErrorBoundary: ErrorBoundaryProps['onReset'] = () => {
    setResetKey(prev => prev + 1);
  };

  const logErrorToService: ErrorBoundaryProps['onError'] = (error, info) => {
    console.error('Caught an error:', error, info);
  };

  return (
    <ErrorBoundaryComponent
      FallbackComponent={ErrorFallback}
      onError={logErrorToService}
      onReset={resetErrorBoundary}
      resetKeys={[resetKey]}
    >
      {children}
    </ErrorBoundaryComponent>
  );
};

export default ErrorBoundary;
