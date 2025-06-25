import { Hotel } from '../../types/HotelsManagement.types';

export interface HotelDialogProps {
  open: boolean;
  onClose: () => void;
  isEditMode: boolean;
  selectedHotel: Hotel | null;
}
