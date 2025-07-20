import { Room } from '@/types/room';

export interface UpdateRoomDialogProps {
  roomToUodate: Room | null;
  open: boolean;
  onClose: () => void;
}
