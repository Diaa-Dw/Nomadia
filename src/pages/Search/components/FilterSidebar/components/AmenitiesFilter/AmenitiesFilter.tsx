import { FilterFormValues } from '@/pages/Search/types';
import { Checkbox, FormGroup, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { AmenitiesBox, AmenitiesContainer, CheckboxLabel } from './AmenitiesFilter.style';
import { AmenitiesFilterProps } from './AmenitiesFilter.type';

const AmenitiesFilter = ({ name, amenities }: AmenitiesFilterProps) => {
  const { values, setFieldValue } = useFormikContext<FilterFormValues>();

  const handleToggle = (id: string) => {
    const isSelected = values.amenities.includes(id);
    const updated = isSelected
      ? values.amenities.filter(aid => aid !== id)
      : [...values.amenities, id];

    setFieldValue(name, updated);
  };

  if (!amenities || amenities.length === 0) {
    return (
      <AmenitiesContainer>
        <Typography variant="subtitle1" gutterBottom>
          Amenities
        </Typography>
        <Typography variant="body2" color="text.secondary">
          There are no amenities to show.
        </Typography>
      </AmenitiesContainer>
    );
  }

  return (
    <AmenitiesContainer>
      <Typography variant="subtitle1" gutterBottom>
        Amenities
      </Typography>
      <AmenitiesBox border={1} borderRadius={3} borderColor={'Highlight'}>
        <FormGroup>
          {amenities.map(amenity => (
            <CheckboxLabel
              key={amenity.id}
              control={
                <Checkbox
                  checked={values.amenities.includes(amenity.name)}
                  onChange={() => handleToggle(amenity.name)}
                  color="primary"
                  slotProps={{
                    input: {
                      'aria-label': amenity.name,
                    },
                  }}
                />
              }
              label={amenity.name}
            />
          ))}
        </FormGroup>
      </AmenitiesBox>
    </AmenitiesContainer>
  );
};

export default AmenitiesFilter;
