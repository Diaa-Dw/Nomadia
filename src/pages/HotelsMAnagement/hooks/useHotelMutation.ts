import { showErrorToast, showSuccessToast } from '@/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addHotel, updateHotel } from '../API';
import { HOTELS_QUERY_KEY } from '../constants';
import { AddHotelRequest, Hotel } from '../types/HotelsMAnagement.types';

const useHotelMutation = (mode: 'add' | 'edit') => {
  const queryClient = useQueryClient();

  const mutationFn = async (values: AddHotelRequest | Hotel): Promise<Hotel | number> => {
    if (mode === 'add') {
      return await addHotel(values as AddHotelRequest);
    } else {
      return await updateHotel(values as Hotel);
    }
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [HOTELS_QUERY_KEY] });
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

export default useHotelMutation;
