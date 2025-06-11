import { addDays } from 'date-fns';
import { useField, useFormikContext } from 'formik';
import { RangeKeyDict } from 'react-date-range';
import { selectionRange, staticRanges } from '../../utils/dateRanges';
import { StyledDateRangePicker } from './DateRangePicker.style';
import { DateRangePickerProps } from './DateRangePicker.type';

const CustomDateRangePicker = ({ name }: DateRangePickerProps) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const { startDate, endDate } = field.value || {
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
    <StyledDateRangePicker
      ranges={[selectionRange(startDate, endDate)]}
      onChange={onSelectRange}
      minDate={new Date()}
      staticRanges={staticRanges}
      inputRanges={[]}
    />
  );
};

export default CustomDateRangePicker;
