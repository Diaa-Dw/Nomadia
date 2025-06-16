import { addDays } from 'date-fns';
import { useFormikContext } from 'formik';
import { RangeKeyDict } from 'react-date-range';
import { selectionRange, staticRanges } from '../../utils/dateRanges';
import { StyledDateRangePicker } from './DateRangePicker.style'; // Assume ErrorText is a styled span or div
import { DateRangePickerProps } from './DateRangePicker.type';

const CustomDateRangePicker = ({ name, dateRange }: DateRangePickerProps) => {
  const { setFieldValue } = useFormikContext();

  const { checkInDate, checkOutDate } = dateRange || {
    checkInDate: new Date(),
    checkOutDate: addDays(new Date(), 1),
  };

  const onSelectRange = (newRanges: RangeKeyDict) => {
    setFieldValue(name, {
      checkInDate: newRanges.selection.startDate,
      checkOutDate: newRanges.selection.endDate,
    });
  };

  return (
    <div>
      <StyledDateRangePicker
        ranges={[selectionRange(checkInDate, checkOutDate)]}
        onChange={onSelectRange}
        minDate={new Date()}
        staticRanges={staticRanges}
        inputRanges={[]}
      />
    </div>
  );
};

export default CustomDateRangePicker;
