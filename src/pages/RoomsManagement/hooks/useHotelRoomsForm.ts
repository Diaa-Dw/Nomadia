import { useFormik } from 'formik';
import { validationSchema } from '../schema';
import { SearchFormPayload, UseHotelRoomsFormProps } from '../types';
import { INITIAL_VALUES } from '../constants';

const useHotelRoomsForm = ({ onSearch }: UseHotelRoomsFormProps) => {
  const onSubmit = (values: SearchFormPayload) => {
    onSearch(values);
  };
  const formikProps = useFormik<SearchFormPayload>({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit,
  });

  return formikProps;
};

export default useHotelRoomsForm;
