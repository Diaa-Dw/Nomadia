import { SearchFormPayload } from '@/types';
import * as Yup from 'yup';
import { startOfDay } from 'date-fns';
import { SORT_OPTIONS, STAR_RATES } from '../constants';

const today = startOfDay(new Date());

const searchBarValidationSchema = Yup.object<SearchFormPayload>().shape({
  city: Yup.string().required('City is required').min(2, 'City must be at least 2 characters long'),

  dateRange: Yup.object().shape({
    checkInDate: Yup.date()
      .required('Start date is required')
      .min(today, 'Start date cannot be in the past'),
    checkOutDate: Yup.date()
      .required('End date is required')
      .min(Yup.ref('checkInDate'), 'End date must be after start date'),
  }),

  adults: Yup.number()
    .required('Number of adults is required')
    .min(1, 'At least one adult is required'),

  children: Yup.number()
    .required('Number of children is required')
    .min(0, 'Number of children cannot be negative'),

  numberOfRooms: Yup.number()
    .required('Number of rooms is required')
    .min(1, 'At least one room is required'),

  starRate: Yup.number()
    .nullable()
    .oneOf(
      STAR_RATES,
      `Star rate must be between ${STAR_RATES[0]} and ${STAR_RATES[STAR_RATES.length - 1]}`
    ),

  sort: Yup.string().oneOf(SORT_OPTIONS, `Sort option must be one of: ${SORT_OPTIONS.join(', ')}`),
});

export default searchBarValidationSchema;
