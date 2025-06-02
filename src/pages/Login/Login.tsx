import { Typography } from '@mui/material';
import { LoginContainer } from '../Login.style';
import { LoginForm } from './';

const Login = () => {
  return (
    <LoginContainer>
      <Typography component="h1" variant="h4" fontWeight={600} color="primary" gutterBottom>
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
