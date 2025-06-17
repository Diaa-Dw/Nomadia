export interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onClose: () => void;
  confirmColor?: 'primary' | 'error';
}

export interface ConfirmButtonProps {
  isError: boolean;
}
