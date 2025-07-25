import { Close, FilterList } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Form, FormikProvider } from 'formik';
import { useState } from 'react';
import { useFetchSearchPageAmenities } from '../../hooks';
import { AmenitiesFilter } from './components';
import StarRatingFilter from './components/StarRatingFilter/StarRatingFilter';
import { CloseButton, Drawer } from './FilterSidebar.style';
import { FilterSidebarProps } from './FilterSidebar.types';

export default function FilterSidebar({ formikProps }: FilterSidebarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { amenities, isFetching } = useFetchSearchPageAmenities();

  const onCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const isTablet = useMediaQuery('(max-width:900px)');

  const renderFilterContent = () => (
    <Box p={2} minWidth={250}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <FormikProvider value={formikProps}>
        <Form>
          {isFetching && <Skeleton height={'60vh'} width={'100%'} />}
          <AmenitiesFilter name="amenities" amenities={amenities} />
          <StarRatingFilter name="starRate" />

          <Stack
            mt={2}
            direction={'row'}
            gap={2}
            justifyContent={isTablet ? 'space-between' : 'flex-end'}
            alignItems={'center'}
          >
            {isTablet && (
              <Button variant={'outlined'} color={'inherit'} onClick={onCloseDrawer}>
                Cancel
              </Button>
            )}
            <Button type="submit" variant="contained" color="info" disableElevation>
              Apply Filter
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
    </Box>
  );

  return (
    <Box position={'relative'}>
      {isTablet ? (
        <>
          <IconButton onClick={() => setDrawerOpen(true)}>
            <FilterList />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={onCloseDrawer}>
            {renderFilterContent()}
            <CloseButton onClick={onCloseDrawer}>
              <Close />
            </CloseButton>
          </Drawer>
        </>
      ) : (
        <Grid container spacing={2} alignItems="flex-start">
          <Grid>{renderFilterContent()}</Grid>
        </Grid>
      )}
    </Box>
  );
}
