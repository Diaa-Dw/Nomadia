import { TextField } from '@/components';
import { Close, LocationCityRounded } from '@mui/icons-material';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
} from '@mui/material';
import { Form, FormikProvider } from 'formik';
import useCityForm from '../../hooks/useCityForm';
import { CityDialogProps } from './CityDialog.types';
import { CITY_DIALOG_INTIAL_VALUES } from '../../constants';

const CityDialog = ({
  open,
  onClose,
  selectedCity,
  isLoading,
  isEditMode,
  mutateAsync,
}: CityDialogProps) => {
  const initialValues = selectedCity ?? CITY_DIALOG_INTIAL_VALUES;
  const cityFormikporps = useCityForm({ initialValues, mutateAsync, onClose });
  const { isValid, dirty, resetForm } = cityFormikporps;

  const handleClose = () => {
    resetForm({ values: CITY_DIALOG_INTIAL_VALUES });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle display={'flex'}>
        {isEditMode ? 'Edit City' : 'Add City'}

        <IconButton size="small" sx={{ ml: 'auto' }} onClick={handleClose}>
          <Close fontSize="small" />
        </IconButton>
      </DialogTitle>

      <Divider />

      <FormikProvider value={cityFormikporps}>
        <Form>
          <DialogContent>
            <Stack gap={2} py={2}>
              <TextField
                name="name"
                label="Name"
                placeholder="Istanbul"
                startIcon={<LocationCityRounded />}
              />
              <TextField
                name="description"
                label="Description"
                placeholder="The City That Lies On Two Continents, Istanbul"
                multiline
                rows={4}
              />
              <Button type="submit" disabled={!isValid || !dirty || isLoading} variant="contained">
                {isLoading ? <CircularProgress /> : isEditMode ? 'Update City' : 'Add City'}
              </Button>
            </Stack>
          </DialogContent>
        </Form>
      </FormikProvider>
    </Dialog>
  );
};

export default CityDialog;
