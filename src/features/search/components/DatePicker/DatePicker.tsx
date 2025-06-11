import { SearchFormPayload } from '@/types';
import { formatDisplayDate } from '@/utils';
import { CalendarViewMonthOutlined } from '@mui/icons-material';
import { Menu, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { MouseEvent, useEffect, useState } from 'react';
import { CustomDateRangePicker } from '../DateRangePicker';
import { FieldContainer } from '../FieldContainer';

const DatePicker = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { values } = useFormikContext<SearchFormPayload>();
  const { startDate, endDate } = values.dateRange;
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
      <FieldContainer
        icon={<CalendarViewMonthOutlined />}
        onClick={onOpenMenu}
        pointer={!isMenuOpen}
      >
        <Typography variant="body2">
          {formatDisplayDate(startDate)} - {formatDisplayDate(endDate)}
        </Typography>
      </FieldContainer>

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
        <CustomDateRangePicker name="dateRange" />
      </Menu>
    </>
  );
};

export default DatePicker;
