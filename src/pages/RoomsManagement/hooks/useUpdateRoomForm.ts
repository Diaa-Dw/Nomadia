import { Room } from '@/types/room';
import { showErrorToast } from '@/utils';
import { useFormik } from 'formik';
import { ADD_ROOM_INITIAL_VALUES } from '../constants';
import { updateRoomValidationSchema } from '../schema';
import { UpdateRoomRequest } from '../types';
import { useUpdateRoom } from './';

const useUpdateRoomForm = (roomToUpdate: Room | null) => {
  const { updateRoom, isPending } = useUpdateRoom();

  const isRoomValid = !!roomToUpdate?.roomId;

  const handleSubmit = (values: UpdateRoomRequest) => {
    if (!isRoomValid) {
      showErrorToast('Room data is missing or invalid.');
      return;
    }

    updateRoom({
      data: values,
      roomId: roomToUpdate.roomId,
    });
  };

  const initialValues = {
    roomNumber: roomToUpdate?.roomNumber.toString() ?? ADD_ROOM_INITIAL_VALUES.roomNumber,
    cost: roomToUpdate?.price ?? ADD_ROOM_INITIAL_VALUES.cost,
  };

  const formikProps = useFormik({
    initialValues,
    validationSchema: updateRoomValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  return {
    formikProps,
    isUpdating: isPending,
    isReady: isRoomValid,
    error: !isRoomValid ? 'Room not found or invalid.' : null,
  };
};

export default useUpdateRoomForm;
