import { useFormik } from 'formik';
import { AddCityRequest, UseCityFormProps } from '../types';
import { validationSchema } from '../schema';

const useCityForm = ({ initialValues, mutateAsync, onClose }: UseCityFormProps) => {
  const formikProps = useFormik<AddCityRequest>({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      await mutateAsync(values);
      resetForm();
      onClose();
    },
  });

  return formikProps;
};

export default useCityForm;
