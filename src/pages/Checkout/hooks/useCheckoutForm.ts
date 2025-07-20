import { useFormik } from 'formik';
import { INITIAL_VALUES } from '../constants';
import { validationSchema } from '../schema';
import useSubmitBooking from './useSubmitBooking';
import { Room } from '@/types/room';
import { CheckoutFormValues } from '../types';

const useCheckoutForm = (room: Room) => {
  const { submitBooking, isPending } = useSubmitBooking(room.roomId);

  const { roomType, roomNumber, price } = room;

  const handleSubmit = async (values: CheckoutFormValues) => {
    const { fullName: customerName, paymentMethod } = values;

    await submitBooking({
      customerName,
      hotelName: roomType,
      roomNumber: roomNumber,
      roomType: roomType,
      bookingDateTime: new Date().toISOString(),
      totalCost: price,
      paymentMethod,
    });
  };

  const formikProps = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return { formikProps, isPending };
};

export default useCheckoutForm;
