import { SearchFormPayload } from '@/types';
import { useFormikContext } from 'formik';
import { MouseEvent, useState } from 'react';
import { FieldContainer } from '../FieldContainer';
import { CalendarViewMonthOutlined } from '@mui/icons-material';
import { Menu, Typography } from '@mui/material';
import { formatDisplayDate } from '@/utils';
import { CustomDateRangePicker } from '../DateRangePicker';

const DatePicker = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { values } = useFormikContext<SearchFormPayload>();
  const { startDate, endDate } = values.dateRange;

  const onCloseMenu = () => setAnchorEl(null);
  const onOpenMenu = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

  return (
    <>
      <FieldContainer icon={<CalendarViewMonthOutlined />} onClick={onOpenMenu}>
        <Typography variant="body2">
          {formatDisplayDate(startDate)} - {formatDisplayDate(endDate)}
        </Typography>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={onCloseMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <CustomDateRangePicker name="dateRange" />
        </Menu>
      </FieldContainer>
    </>
  );
};

export default DatePicker;
