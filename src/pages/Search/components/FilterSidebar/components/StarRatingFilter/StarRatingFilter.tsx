import { FilterFormValues } from '@/pages/Search/types';
import { Box, Stack, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { useCallback } from 'react';
import { StarItem } from '../StarItem';
import { StarRatingFilterProps } from './StarRatingFilter.type';

const StarRatingFilter = ({ name }: StarRatingFilterProps) => {
  const { values, setFieldValue } = useFormikContext<FilterFormValues>();
  const stars = [1, 2, 3, 4, 5];

  const toggleStar = useCallback(
    (star: number) => {
      const isSelected = values.stars.includes(star);
      const updated = isSelected ? values.stars.filter(s => s !== star) : [...values.stars, star];
      setFieldValue(name, updated);
    },
    [name, values.stars, setFieldValue]
  );

  return (
    <Box mt={2} border={1} borderColor={'Highlight'} borderRadius={3} p={1}>
      <Typography variant="subtitle1" gutterBottom>
        Star Rating
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {stars.map(star => (
          <StarItem
            key={star}
            star={star}
            selected={values.stars.includes(star)}
            onToggle={toggleStar}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default StarRatingFilter;
