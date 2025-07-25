import { SearchFormPayload } from '@/types';
import { formatDisplayDate } from '@/utils';
import { CalendarViewMonthOutlined } from '@mui/icons-material';
import { Menu, Stack, Typography } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { MouseEvent, useEffect, useState } from 'react';
import { CustomDateRangePicker } from '../DateRangePicker';
import { FieldContainer } from '../FieldContainer';

const DatePicker = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [field, meta] = useField('dateRange');

  const hasError = Boolean(meta.error);
  const { values } = useFormikContext<SearchFormPayload>();
  const { checkInDate, checkOutDate } = values.dateRange;
  const isMenuOpen = Boolean(anchorEl);

  const onCloseMenu = () => {
    console.log('onCloseMenu');
    setAnchorEl(() => null);
  };
  const onOpenMenu = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

  useEffect(() => {
    console.log('anchorEl changed:', anchorEl);
  }, [anchorEl]);

  return (
    <>
      <Stack direction={'column'}>
        <FieldContainer
          icon={<CalendarViewMonthOutlined />}
          onClick={onOpenMenu}
          pointer={!isMenuOpen}
        >
          <Typography variant="body2">
            {formatDisplayDate(checkInDate)} - {formatDisplayDate(checkOutDate)}
          </Typography>
        </FieldContainer>
        {hasError && typeof meta.error === 'object' && (
          <>
            {'checkInDate' in meta.error && (
              <Typography variant="body2" color="error" px={1}>
                {(meta.error as { checkInDate?: string }).checkInDate}
              </Typography>
            )}
            {'checkOutDate' in meta.error && (
              <Typography variant="body2" color="error" px={1}>
                {(meta.error as { checkOutDate?: string }).checkOutDate}
              </Typography>
            )}
          </>
        )}
      </Stack>

      <Menu
        open={isMenuOpen}
        anchorEl={anchorEl}
        onClose={onCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        aria-hidden={!isMenuOpen}
      >
        <CustomDateRangePicker name="dateRange" dateRange={field.value} />
      </Menu>
    </>
  );
};

export default DatePicker;
