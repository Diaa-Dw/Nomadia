import { useFormik } from 'formik';
import useLoginUser from './useLoginUser';
import { INITIAL_VALUES } from '../constants';
import { LoginFormPayload } from '../types';
import { validationSchema } from '../schema';

const useLoginForm = () => {
  const { loginMutate } = useLoginUser();

  const submitForm = (values: LoginFormPayload) => {
    loginMutate(values);
  };

  const formikProps = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: submitForm,
  });

  return formikProps;
};

export default useLoginForm;
