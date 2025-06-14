import { useFormik } from 'formik';
import { filterInitialValues } from '../Search.constants';

const useFilterForm = () => {
  const handleSubmit = () => {};

  const formikProps = useFormik({
    initialValues: filterInitialValues,
    onSubmit: handleSubmit,
  });

  return { formikProps };
};

export default useFilterForm;
