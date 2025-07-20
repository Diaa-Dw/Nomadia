import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCityRequest } from '../API';
import { CITIES_QUERY_KEY } from '../constants';
import { CitiesInfiniteData } from '../types';
import { showErrorToast, showSuccessToast } from '@/utils';
import { Filters } from '@/types';

const useDeleteCity = (filters: Filters, setDeletingId?: (id: number | null) => void) => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteCity,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: deleteCityRequest,

    onSuccess: deletedCityId => {
      queryClient.setQueryData<CitiesInfiniteData>([CITIES_QUERY_KEY, filters], prev => {
        if (!prev) return prev;

        const updatedPages = prev.pages.map(page => page.filter(city => city.id !== deletedCityId));

        const newData = { ...prev, pages: updatedPages };
        return newData;
      });
      showSuccessToast('City deleted successfully.');
      setDeletingId?.(null);
    },

    onError: () => {
      showErrorToast('Failed to delete city.');
      setDeletingId?.(null);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [CITIES_QUERY_KEY], exact: true });
    },
  });

  return {
    deleteCity,
    isDeleting,
    error,
  };
};

export default useDeleteCity;
