import { addDays } from 'date-fns';
import { useFormikContext } from 'formik';
import { RangeKeyDict } from 'react-date-range';
import { selectionRange, staticRanges } from '../../utils/dateRanges';
import { StyledDateRangePicker } from './DateRangePicker.style'; // Assume ErrorText is a styled span or div
import { DateRangePickerProps } from './DateRangePicker.type';

const CustomDateRangePicker = ({ name, dateRange }: DateRangePickerProps) => {
  const { setFieldValue } = useFormikContext();

  const { startDate, endDate } = dateRange || {
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
  };

  const onSelectRange = (newRanges: RangeKeyDict) => {
    setFieldValue(name, {
      startDate: newRanges.selection.startDate,
      endDate: newRanges.selection.endDate,
    });
  };

  return (
    <div>
      <StyledDateRangePicker
        ranges={[selectionRange(startDate, endDate)]}
        onChange={onSelectRange}
        minDate={new Date()}
        staticRanges={staticRanges}
        inputRanges={[]}
      />
    </div>
  );
};

export default CustomDateRangePicker;
