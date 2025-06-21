import { showErrorToast, showSuccessToast } from '@/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCityRequest, updateCityRequest } from '../API';
import { CITIES_QUERY_KEY } from '../constants';
import { AddCityRequest, City, UpdateCityRequest, UseCityMutationProps } from '../types';

const useCityMutation = ({ mode }: UseCityMutationProps) => {
  const queryClient = useQueryClient();

  const mutationFn = async (values: AddCityRequest | UpdateCityRequest): Promise<City> => {
    if (mode === 'add') {
      return await addCityRequest(values as AddCityRequest);
    } else {
      return await updateCityRequest(values as UpdateCityRequest);
    }
  };
  const { mutateAsync, isPending } = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CITIES_QUERY_KEY] });
      showSuccessToast(mode === 'add' ? 'City added successfully!' : 'City updated successfully!');
    },
    onError: () => {
      showErrorToast(
        mode === 'add' ? 'Failed to add city. Please try again.' : 'Failed to update city.'
      );
    },
  });

  return {
    mutateAsync,
    isPending,
  };
};

export default useCityMutation;
