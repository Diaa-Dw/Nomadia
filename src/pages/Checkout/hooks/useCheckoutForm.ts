import { useFormik } from 'formik';
import { INITIAL_VALUES } from '../Checkout.constants';
import { validationSchema } from '../schema';
const useCheckoutForm = () => {
  const handleSubmit = () => {};

  const formikProps = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return { formikProps };
};

export default useCheckoutForm;
