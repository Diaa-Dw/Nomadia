import { useFormik } from 'formik';
import { INITIAL_VALUES, validationSchema } from '../';

const useLoginForm = () => {
  const formikProps = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: () => {},
  });

  return formikProps;
};

export default useLoginForm;
