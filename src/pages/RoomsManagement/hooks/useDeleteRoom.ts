import { showErrorToast, showSuccessToast } from '@/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteRoomApi } from '../API';
import { HOTEL_ROOMS_QUERY_KEY } from '@/pages/Hotel/constants/Hotel.constants';
import { fetchHotelRoomsProps, Room } from '@/types/room';

const useDeleteRoom = (searchParams: fetchHotelRoomsProps | null) => {
  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: async (roomId: number) => {
      if (!searchParams) throw new Error('Invalid hotel context');
      return await deleteRoomApi(searchParams.hotelId, roomId);
    },

    onSuccess: (deletedRoomId: number) => {
      if (!searchParams) return;
      queryClient.setQueryData<Room[]>([HOTEL_ROOMS_QUERY_KEY, searchParams], prev => {
        if (!prev) return prev;
        return prev.filter(room => room.roomId !== deletedRoomId);
      });

      showSuccessToast('Room deleted successfully.');
    },

    onError: () => {
      showErrorToast('Failed to delete room.');
    },

    onSettled: () => {
      if (!searchParams) return;
      queryClient.invalidateQueries({
        queryKey: [HOTEL_ROOMS_QUERY_KEY, searchParams],
        exact: true,
      });
    },
  });

  return {
    deleteRoom: mutateAsync,
    isDeleting,
    error,
  };
};

export default useDeleteRoom;
