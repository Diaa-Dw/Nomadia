import { PhotoResponse } from '../../types';

export interface BackdropViewerProps {
  open: boolean;
  onClose: () => void;
  currentImage: PhotoResponse;
  onNavigate: (direction: 'next' | 'prev') => void;
}
