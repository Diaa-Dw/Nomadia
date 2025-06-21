import { Toaster } from 'react-hot-toast';
import { AppRoutes } from './routes';
import { useRef } from 'react';
import { ACCESS_TOKEN_KEY } from './constants';

const App = () => {
  const ref = useRef(0);
  localStorage.setItem(
    ACCESS_TOKEN_KEY,
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMiIsImdpdmVuX25hbWUiOiJNYXplbiIsImZhbWlseV9uYW1lIjoiU2FtaSIsInVzZXJUeXBlIjoiVXNlciIsIm5iZiI6MTczMjExNTQyMCwiZXhwIjoyOTMyMTE5MDIwLCJpc3MiOiJodHRwczovL2FwcC1ob3RlbC1yZXNlcnZhdGlvbi13ZWJhcGktdWFlLWRldi0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQifQ.PfAuj-iqXVyxvGj2Wwv6N7ch6mpG4mwxGmghR2MKpf4'
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
