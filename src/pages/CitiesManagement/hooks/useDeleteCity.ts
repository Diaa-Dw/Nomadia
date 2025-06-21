import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCityRequest } from '../API';
import { CITIES_QUERY_KEY } from '../constants';
import { CitiesInfiniteData, CityFilters } from '../types';
import { showErrorToast, showSuccessToast } from '@/utils';

const useDeleteCity = (filters: CityFilters) => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteCity,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: deleteCityRequest,

    onSuccess: deletedCityId => {
      queryClient.setQueryData<CitiesInfiniteData>([CITIES_QUERY_KEY, filters], prev => {
        console.log('🚀 ~ prev:', prev);

        if (!prev) return prev;

        const updatedPages = prev.pages.map(page => page.filter(city => city.id !== deletedCityId));

        const newData = { ...prev, pages: updatedPages };
        console.log('✅ Cache after delete:', newData);
        return newData;
      });
      showSuccessToast('City deleted successfully.');
    },

    onError: () => {
      showErrorToast('Failed to delete city.');
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
