import { useFormik } from 'formik';
import { validationSchema } from '../schema';
import { AddHotelRequest, Hotel, UseHotelsFormProps } from '../types/HotelsManagement.types';

const useHotelsForm = ({ initialValues, mutateAsync, onClose }: UseHotelsFormProps) => {
  const formikProps = useFormik<AddHotelRequest | Hotel>({
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

export default useHotelsForm;
