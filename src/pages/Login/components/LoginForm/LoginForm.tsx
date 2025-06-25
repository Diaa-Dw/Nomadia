import { AccountCircle } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FormikProvider } from 'formik';
import { useLoginForm } from '../../hooks';
import { PasswordField, TextField } from '@/components';
import { LoginFormContainer } from './LoginForm.style';

const LoginForm = () => {
  const formikProps = useLoginForm();

  const { submitForm, isSubmitting, dirty, isValid } = formikProps;
  console.log('🚀 ~ LoginForm ~ isSubmitting:', isSubmitting);
  return (
    <FormikProvider value={formikProps}>
      <LoginFormContainer onSubmit={submitForm}>
        <TextField
          name="userName"
          label="User Name"
          placeholder="your.username"
          startIcon={<AccountCircle />}
          aria-invalid="false"
        />
        <PasswordField name="password" label="Password" />

        <Button
          type="submit"
          onClick={submitForm}
          variant={'contained'}
          fullWidth
          loading={isSubmitting}
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
