import { useFormik } from 'formik';
import useLoginUser from './useLoginUser';
import { INITIAL_VALUES } from '../Login.constants';
import { LoginFormPayload } from '../Login.type';
import validationSchema from '../Login.Schema';

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
