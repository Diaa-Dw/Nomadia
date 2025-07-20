import { Autocomplete } from '@mui/material';
import { useField } from 'formik';
import { useMemo, useState } from 'react';
import { TextField } from '@/components';
import { HotelSelectProps } from './HotelSelect.types';
import { useFetchHotels } from '../../hooks';
import { useDebounce } from '@/hooks';

const HotelSelect = ({ name, label = 'hotel', disabled }: HotelSelectProps) => {
  const [field, meta, helpers] = useField<number | null>(name);
  const { setValue } = helpers;

  const [inputValue, setInputValue] = useState('');
  const debouncedInput = useDebounce(inputValue, 300);
  const { hotels = [], isFetching } = useFetchHotels(debouncedInput);

  const selectedHotel = useMemo(() => {
    return hotels.find(h => h.id === field.value) || null;
  }, [field.value, hotels]);

  return (
    <Autocomplete
      options={hotels}
      getOptionLabel={option => option?.name ?? ''}
      isOptionEqualToValue={(option, value) => option?.id === value?.id}
      loading={isFetching}
      disabled={disabled}
      value={selectedHotel}
      inputValue={inputValue}
      onChange={(_event, newValue) => {
        setValue(newValue ? newValue.id : null);
      }}
      onInputChange={(_event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderOption={(props, option) => (
        <li {...props} key={option.id}>
          {option.name}
        </li>
      )}
      renderInput={params => (
        <TextField
          {...params}
          name={name}
          label={label}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    />
  );
};

export default HotelSelect;
