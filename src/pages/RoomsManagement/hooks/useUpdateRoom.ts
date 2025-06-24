import { showErrorToast, showSuccessToast } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { updateRoomApi } from '../API';
import { UpdateRoomPayload } from '../types';

const useAddRoom = () => {
  const { mutate: updateRoom, isPending } = useMutation({
    mutationFn: ({ roomId, data }: UpdateRoomPayload) => updateRoomApi(roomId, data),

    onSuccess: () => {
      showSuccessToast('Room updated Successfully!');
    },

    onError: () => {
      showErrorToast('Something went wrong while updating room.');
    },
  });

  return { updateRoom, isPending };
};

export default useAddRoom;
