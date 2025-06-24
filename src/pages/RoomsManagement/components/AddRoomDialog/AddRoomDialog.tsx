import AddIcon from '@mui/icons-material/Add';
import CrossIcon from '@mui/icons-material/Close';
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
import { AddRoomDialogProps } from './AddRoomDialog.types';
import useAddRoomForm from '../../hooks/useAddRoomForm';
import { TextField } from '@/components';

const AddRoomDialog = ({ open, onClose, hotelId }: AddRoomDialogProps) => {
  const { formikProps, isAdding } = useAddRoomForm(hotelId);

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
        Add Room
        <IconButton onClick={handleClose} size="small" sx={{ ml: 'auto' }}>
          <CrossIcon fontSize="small" />
        </IconButton>
      </DialogTitle>
      <Divider />

      <FormikProvider value={formikProps}>
        <Form>
          <DialogContent>
            <Stack gap={2}>
              <TextField name="roomNumber" label="Room Number" placeholder="e.g., 328" />
              <TextField name="cost" label="Cost ($)" placeholder="e.g., 150" />
            </Stack>
          </DialogContent>

          <DialogActions sx={{ pr: 3, pb: 2 }}>
            <Button
              type="submit"
              loading={isAdding}
              disabled={!dirty || !isValid}
              variant="contained"
              disableElevation
              startIcon={<AddIcon />}
              loadingPosition="start"
              onClick={handleSubmit}
            >
              Add
            </Button>
          </DialogActions>
        </Form>
      </FormikProvider>
    </Dialog>
  );
};

export default AddRoomDialog;
