import { startOfDay } from 'date-fns';
import { CreateRoomRequest, SearchFormPayload } from '../types';
import * as Yup from 'yup';

const today = startOfDay(new Date());

export const searchRoomvalidationSchema = Yup.object<SearchFormPayload>().shape({
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

export const addRoomvalidationSchema = Yup.object<CreateRoomRequest>().shape({
  hotelId: Yup.number().required('Hotel is required'),
  roomNumber: Yup.string().required('Room number is required'),
  cost: Yup.number().required('Cost is required'),
});
