import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { ConfirmDialogProps } from './ConfirmDialog.types';
import { ConfirmButton } from './ConfirmDialog.styles';

const ConfirmDialog = ({
  open,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onClose,
  confirmColor = 'primary',
}: ConfirmDialogProps) => {
  const isError = confirmColor === 'error';
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="confirm-dialog-title">
      <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" color="inherit">
          {cancelText}
        </Button>
        <ConfirmButton isError={isError} onClick={onConfirm} color={confirmColor} autoFocus>
          {confirmText}
        </ConfirmButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
