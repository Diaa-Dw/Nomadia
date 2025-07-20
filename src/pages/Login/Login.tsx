import { selectUser } from '@/features';
import { useAppSelector } from '@/store';
import { Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { LoginContainer } from './Login.style';
import { LoginForm } from './components';

const Login = () => {
  const { isAuthenticated, userType } = useAppSelector(selectUser);

  if (isAuthenticated) {
    return <Navigate to={userType === 'Admin' ? '/admin/cities' : '/'} replace />;
  }

  return (
    <LoginContainer>
      <Typography component="h2" variant="h4" fontWeight={600} color="primary" gutterBottom>
        Nomadia
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Your Digital Journey Begins Here
      </Typography>

      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
