import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showErrorToast, showSuccessToast } from '@/utils';
import { Filters } from '@/types';
import { deleteHotelApi } from '../API';
import { HotelsInfiniteData } from '../types/HotelsManagement.types';
import { HOTELS_PER_PAGE } from '../constants';

const useDeleteHotel = (filters: Filters) => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteHotel,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: deleteHotelApi,

    onSuccess: deletedCityId => {
      queryClient.setQueryData<HotelsInfiniteData>([HOTELS_PER_PAGE, filters], prev => {
        if (!prev) return prev;

        const updatedPages = prev.pages.map(page => page.filter(city => city.id !== deletedCityId));

        const newData = { ...prev, pages: updatedPages };
        console.log('✅ Cache after delete:', newData);
        return newData;
      });
      showSuccessToast('Hotel deleted successfully.');
    },

    onError: () => {
      showErrorToast('Failed to delete Hotel.');
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [HOTELS_PER_PAGE], exact: true });
    },
  });

  return {
    deleteHotel,
    isDeleting,
    error,
  };
};

export default useDeleteHotel;
