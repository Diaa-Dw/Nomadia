import { Toaster } from 'react-hot-toast';
import { AppRoutes } from './routes';

const App = () => {
  return (
    <div>
      <AppRoutes />
      <Toaster position="top-center" />
    </div>
  );
};

export default App;
