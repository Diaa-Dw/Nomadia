import { useFormik } from 'formik';
import { INITIAL_VALUES } from '../constants';
import { validationSchema } from '../schema';
import { HotelRoomsSearchProps, SearchFormPayload } from '../types';
import { formatDate } from '@/utils';

const useHotelRoomsForm = ({ onSearch }: HotelRoomsSearchProps) => {
  const onSubmit = (values: SearchFormPayload) => {
    const { hotelId, dateRange } = values;

    const formatedValues = {
      hotelId: hotelId as number,
      checkInDate: formatDate(dateRange.checkInDate),
      checkOutDate: formatDate(dateRange.checkOutDate),
    };
    onSearch(formatedValues);
  };
  const formikProps = useFormik<SearchFormPayload>({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit,
  });

  return formikProps;
};

export default useHotelRoomsForm;
