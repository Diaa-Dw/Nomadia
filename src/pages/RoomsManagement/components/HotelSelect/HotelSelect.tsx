import { Autocomplete } from '@mui/material';
import { useField } from 'formik';
import { useState } from 'react';
import { TextField } from '@/components';
import { HotelSelectProps } from './HotelSelect.types';
import { useFetchHotels } from '../../hooks';

const HotelSelect = ({ name, label = 'hotel', disabled }: HotelSelectProps) => {
  const [field, meta, helpers] = useField<number | null>(name);
  const { setValue } = helpers;

  const [inputValue, setInputValue] = useState('');
  const { hotels = [], isFetching } = useFetchHotels(inputValue);

  const selectedCity = hotels.find(hotel => hotel.id === field.value) || null;

  return (
    <Autocomplete
      options={hotels}
      getOptionLabel={option => option.name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      loading={isFetching}
      disabled={disabled}
      value={selectedCity}
      inputValue={inputValue}
      onChange={(_event, newValue) => {
        setValue(newValue ? newValue.id : null);
      }}
      onInputChange={(_event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      freeSolo={false}
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
