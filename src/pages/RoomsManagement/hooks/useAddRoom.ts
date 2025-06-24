import { showErrorToast, showSuccessToast } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { addRoom as addRoomApi } from '../API';

const useAddRoom = () => {
  const { mutate: addRoom, isPending } = useMutation({
    mutationFn: addRoomApi,

    onSuccess: () => {
      showSuccessToast('Room Added Successfully!');
    },

    onError: () => {
      showErrorToast('Something went wrong while adding room.');
    },
  });

  return { addRoom, isPending };
};

export default useAddRoom;
