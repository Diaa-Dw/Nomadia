import { useFormik } from 'formik';
import { INITIAL_VALUES, LoginFormPayload, validationSchema } from '../';
import useLoginUser from './useLoginUser';

const useLoginForm = () => {
  const { loginMutate } = useLoginUser();

  const submitForm = (values: LoginFormPayload) => {
    return loginMutate(values);
  };

  const formikProps = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: submitForm,
  });

  return formikProps;
};

export default useLoginForm;
