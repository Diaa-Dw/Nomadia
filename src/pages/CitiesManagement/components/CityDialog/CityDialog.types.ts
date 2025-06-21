import { City, UseCityFormProps } from '../../types';

export interface CityDialogProps extends Omit<UseCityFormProps, 'initialValues'> {
  open: boolean;
  onClose: () => void;
  isLoading: boolean;
  selectedCity: City | null;
  isEditMode: boolean;
}
