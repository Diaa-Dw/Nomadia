import { AccountCircle } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FormikProvider } from 'formik';
import { useLoginForm } from '../..';
import { PasswordField, TextField } from '../../../../components';
import { LoginFormContainer } from './LoginForm.style';

const LoginForm = () => {
  const formikProps = useLoginForm();

  const { submitForm, isSubmitting, dirty, isValid } = formikProps;
  return (
    <FormikProvider value={formikProps}>
      <LoginFormContainer onSubmit={submitForm}>
        <TextField
          name="userName"
          label="User Name"
          placeholder="your.username"
          startIcon={<AccountCircle />}
        />
        <PasswordField name="password" label="Password" />

        <Button
          type="submit"
          variant={'contained'}
          fullWidth
          loading={isSubmitting}
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
