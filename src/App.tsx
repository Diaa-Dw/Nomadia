import { Toaster } from 'react-hot-toast';
import { AppRoutes } from './routes';
import { useRef } from 'react';

const App = () => {
  const ref = useRef(0);

  ref.current += 1;

  return (
    <div>
      <AppRoutes />
      <Toaster position="top-center" />
    </div>
  );
};

export default App;
