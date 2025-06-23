import { startOfDay } from 'date-fns';
import { SearchFormPayload } from '../types';
import * as Yup from 'yup';

const today = startOfDay(new Date());

const validationSchema = Yup.object<SearchFormPayload>().shape({
  hotelId: Yup.number().required('You must select a hotel'),

  dateRange: Yup.object().shape({
    checkInDate: Yup.date()
      .required('Start date is required')
      .min(today, 'Start date cannot be in the past'),
    checkOutDate: Yup.date()
      .required('End date is required')
      .min(Yup.ref('checkInDate'), 'End date must be after start date'),
  }),
});

export default validationSchema;
