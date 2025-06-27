import { AccountCircle } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FormikProvider } from 'formik';
import { useLoginForm } from '../../hooks';
import { PasswordField, TextField } from '@/components';
import { LoginFormContainer } from './LoginForm.style';

const LoginForm = () => {
  const { formikProps, isPending } = useLoginForm();

  const { dirty, isValid } = formikProps;
  return (
    <FormikProvider value={formikProps}>
      <LoginFormContainer>
        <TextField
          name="userName"
          label="User Name"
          placeholder="your.username"
          startIcon={<AccountCircle />}
          aria-invalid="false"
          autoComplete="username"
        />
        <PasswordField name="password" label="Password" autoComplete="current-password" />

        <Button
          type="submit"
          variant={'contained'}
          fullWidth
          loading={isPending}
          loadingPosition={'start'}
          disabled={!dirty || !isValid}
          aria-label="Login"
        >
          Sign In
        </Button>
      </LoginFormContainer>
    </FormikProvider>
  );
};

export default LoginForm;
