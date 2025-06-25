import { TextField } from '@/components';
import { HotelMap } from '@/pages/Hotel/components';
import AddIcon from '@mui/icons-material/Add';
import CrossIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { Form, FormikProvider } from 'formik';
import { HOTEL_INITIAL_VALUES, hotelTypeOptions } from '../../constants';
import { useHotelMutation, useHotelsForm } from '../../hooks';
import { CitySelect } from '../CitySelect';
import { HotelDialogProps } from './HotelDialog.types';

const HotelDrawer = ({ open, onClose, isEditMode, selectedHotel }: HotelDialogProps) => {
  const initialValues = selectedHotel ?? { ...HOTEL_INITIAL_VALUES };
  const { mutateAsync, isPending } = useHotelMutation(isEditMode ? 'edit' : 'add');
  const formikProps = useHotelsForm({ initialValues, mutateAsync, onClose });

  const { dirty, isValid, resetForm, values, setValues } = formikProps;
  const { name, starRating, latitude, longitude } = values;

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      anchor="right"
      PaperProps={{ sx: { width: { xs: '100%', sm: 500 } } }}
    >
      <FormikProvider value={formikProps}>
        <Form style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box display="flex" alignItems="center" p={2}>
            <Typography variant="h6">{isEditMode ? 'Edit Hotel' : 'Add Hotel'}</Typography>
            <IconButton sx={{ ml: 'auto' }} onClick={handleClose}>
              <CrossIcon />
            </IconButton>
          </Box>
          <Divider />

          <Box flex={1} overflow="auto" p={2}>
            {!isEditMode && <CitySelect name="cityId" />}
            <TextField name="name" label="Name" placeholder="Plaza Hotel" />

            <TextField
              name="description"
              label="Description"
              placeholder="Plaza hotel is a 4-star hotel"
            />

            <TextField name="hotelType" label="Hotel Type" select fullWidth>
              {hotelTypeOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <Stack gap={0.25} pb={1.5}>
              <Typography variant="caption" color="GrayText" pl={0.5}>
                Star Rating
              </Typography>
              <Rating
                size="large"
                name="starRating"
                value={starRating}
                onChange={(_event, newValue) => {
                  setValues({ ...values, starRating: newValue ?? 0 });
                }}
              />
            </Stack>

            <Stack flexDirection="row" gap={2} py={2}>
              <TextField
                name="latitude"
                label="Latitude"
                placeholder="e.g., 31.9"
                type="number"
                fullWidth
              />
              <TextField
                name="longitude"
                label="Longitude"
                placeholder="e.g., 35.2"
                type="number"
                fullWidth
              />
            </Stack>

            <HotelMap lat={latitude} lng={longitude} name={name} height={300} />
          </Box>

          <Divider />
          <Box p={2} display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              loading={isPending}
              disabled={!dirty || !isValid}
              variant="contained"
              disableElevation
              startIcon={<AddIcon />}
              loadingPosition="start"
            >
              {isPending ? (
                <CircularProgress size={20} />
              ) : isEditMode ? (
                'Update Hotel'
              ) : (
                'Add Hotel'
              )}
            </Button>
          </Box>
        </Form>
      </FormikProvider>
    </Drawer>
  );
};

export default HotelDrawer;
