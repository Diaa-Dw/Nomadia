import { Toaster } from 'react-hot-toast';
import { AppRoutes } from './routes';
import { useRef } from 'react';
import { ACCESS_TOKEN_KEY } from './constants';

const App = () => {
  const ref = useRef(0);
  localStorage.setItem(
    ACCESS_TOKEN_KEY,
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImdpdmVuX25hbWUiOiJNb2hhbWFkIiwiZmFtaWx5X25hbWUiOiJNaWxoZW0iLCJ1c2VyVHlwZSI6IkFkbWluIiwibmJmIjoxNzMyNjQ4ODU5LCJleHAiOjE5MzI2NTI0NTksImlzcyI6Imh0dHBzOi8vYXBwLWhvdGVsLXJlc2VydmF0aW9uLXdlYmFwaS11YWUtZGV2LTAwMS5henVyZXdlYnNpdGVzLm5ldCJ9.JmiZxr5eUYC7egDi_bOlHhlpo99SLIoam45ZPQqYpxw'
  );

  ref.current += 1;

  return (
    <div>
      <AppRoutes />
      <Toaster position="top-center" />
    </div>
  );
};

export default App;
