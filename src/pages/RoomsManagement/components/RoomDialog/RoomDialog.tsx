import { TextField } from '@/components';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
} from '@mui/material';
import { Form, FormikProvider } from 'formik';
import { RoomDialogProps } from './RoomDialog.types';
import { Close } from '@mui/icons-material';

const RoomDialog = <T,>({
  open,
  onClose,
  title,
  isPending,
  formikProps,
  actionText,
  actionIcon,
}: RoomDialogProps<T>) => {
  const { dirty, isValid, resetForm, submitForm } = formikProps;

  const handleSubmit = async () => {
    await submitForm();
    resetForm();
    onClose();
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle display="flex">
        {title}
        <IconButton onClick={handleClose} size="small" sx={{ ml: 'auto' }}>
          <Close fontSize="small" />
        </IconButton>
      </DialogTitle>
      <Divider />

      <FormikProvider value={formikProps}>
        <Form>
          <DialogContent>
            <Stack gap={2}>
              <TextField name="roomNumber" label="Room Number" placeholder="007" />
              <TextField name="cost" label="Cost ($)" placeholder="150" />
            </Stack>
          </DialogContent>

          <DialogActions sx={{ pr: 3, pb: 2 }}>
            <Button
              type="submit"
              loading={isPending}
              disabled={!dirty || !isValid}
              variant="contained"
              disableElevation
              startIcon={actionIcon}
              loadingPosition="start"
              onClick={handleSubmit}
            >
              {actionText}
            </Button>
          </DialogActions>
        </Form>
      </FormikProvider>
    </Dialog>
  );
};

export default RoomDialog;
