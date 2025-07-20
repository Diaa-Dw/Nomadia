import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from './components';
import { AppRoutes } from './routes';

const App = () => {
  return (
    <ErrorBoundary>
      <div>
        <AppRoutes />
        <Toaster position="top-center" />
      </div>
    </ErrorBoundary>
  );
};

export default App;
