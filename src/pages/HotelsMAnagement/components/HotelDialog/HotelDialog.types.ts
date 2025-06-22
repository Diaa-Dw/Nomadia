import { Hotel } from '../../types/HotelsMAnagement.types';

export interface HotelDialogProps {
  open: boolean;
  onClose: () => void;
  isEditMode: boolean;
  selectedHotel: Hotel | null;
}
