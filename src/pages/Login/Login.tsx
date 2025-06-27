import { Typography } from '@mui/material';
import { LoginContainer } from './Login.style';
import { LoginForm } from './components';
import { useAppSelector } from '@/store';
import { selectUser } from '@/features';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();

  const { isAuthenticated, userType } = useAppSelector(selectUser);

  useEffect(() => {
    if (isAuthenticated) {
      const navigateTo = userType === 'Admin' ? '/admin/cities' : '/';
      navigate(navigateTo);
    }
  }, [isAuthenticated, userType, navigate]);

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
