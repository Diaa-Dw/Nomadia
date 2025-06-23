import { useFormik } from 'formik';
import { INITIAL_VALUES } from '../constants';
import { validationSchema } from '../schema';
import { HotelRoomsSearchProps, SearchFormPayload } from '../types';

const useHotelRoomsForm = ({ onSearch }: HotelRoomsSearchProps) => {
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
