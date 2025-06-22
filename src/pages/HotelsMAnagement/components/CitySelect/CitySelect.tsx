import { Autocomplete } from '@mui/material';
import { useField } from 'formik';
import { useState } from 'react';
import { useFetchCities } from '../../hooks/useFetchCities';
import { CitySelectProps } from './CitySelect.types';
import { TextField } from '@/components';

const CitySelect = ({ name, label = 'City', disabled }: CitySelectProps) => {
  const [field, meta, helpers] = useField<number | null>(name);
  const { setValue } = helpers;

  const [inputValue, setInputValue] = useState('');
  const { cities = [], isFetching } = useFetchCities(inputValue);

  const selectedCity = cities.find(city => city.id === field.value) || null;

  return (
    <Autocomplete
      options={cities}
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

export default CitySelect;
