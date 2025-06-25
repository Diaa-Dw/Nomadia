import * as Yup from 'yup';
import { AddHotelRequest, Hotel } from '../types/HotelsManagement.types';

const validationSchema = Yup.object<AddHotelRequest | Hotel>().shape({
  cityId: Yup.number().required('City is required'),
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  hotelType: Yup.number()
    .oneOf([0, 1, 2], 'Hotel type must be either 0 (Budget), 1 (Standard), or 2 (Luxury)')
    .required('Hotel type is required'),
  starRating: Yup.number().required('Star rating is required'),
  latitude: Yup.number().required('Latitude is required'),
  longitude: Yup.number().required('Longitude is required'),
});

export default validationSchema;
