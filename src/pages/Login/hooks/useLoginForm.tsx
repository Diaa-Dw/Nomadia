import { useFormik } from 'formik';
import useLoginUser from './useLoginUser';
import { INITIAL_VALUES } from '../constants';
import { LoginFormPayload } from '../types';
import { validationSchema } from '../schema';

const useLoginForm = () => {
  const { loginMutate, isPending } = useLoginUser();

  const submitForm = (values: LoginFormPayload) => {
    return loginMutate(values);
  };

  const formikProps = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: submitForm,
  });

  return { formikProps, isPending };
};

export default useLoginForm;
