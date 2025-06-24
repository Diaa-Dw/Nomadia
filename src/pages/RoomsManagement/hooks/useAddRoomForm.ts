import { useFormik } from 'formik';
import { ADD_ROOM_INITIAL_VALUES } from '../constants';
import { addRoomvalidationSchema } from '../schema';
import useAddRoom from './useAddRoom';
import { CreateRoomRequest } from '../types';
import { showErrorToast } from '@/utils';

const useAddRoomForm = (hotelId?: number | null) => {
  const { addRoom, isPending } = useAddRoom();

  const handleSubmit = (values: CreateRoomRequest) => {
    if (!hotelId) {
      showErrorToast('Hotel ID is missing. Please select a hote and try again.');
      return;
    }

    addRoom({
      ...values,
      hotelId,
    });
  };

  const formikProps = useFormik({
    initialValues: ADD_ROOM_INITIAL_VALUES,
    validationSchema: addRoomvalidationSchema,
    onSubmit: handleSubmit,
  });

  return {
    formikProps,
    isAdding: isPending,
    isHotelIdMissing: !hotelId,
  };
};

export default useAddRoomForm;
