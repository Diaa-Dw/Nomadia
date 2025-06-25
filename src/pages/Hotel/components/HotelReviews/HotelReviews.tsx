import { Star } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useFetchHotelReviews } from '../../hooks';
import { INITIAL_REVIEW_COUNT } from '../../constants/Hotel.constants';
import { HotelReviewsProps, Order } from './HotelReviews.types';

const HotelReviews = ({ id }: HotelReviewsProps) => {
  const { hotelReviews, isPending } = useFetchHotelReviews(id);
  const [visibleCount, setVisibleCount] = useState(INITIAL_REVIEW_COUNT);
  const [sortOrder, setSortOrder] = useState<Order>('desc');

  if (isPending) {
    return <Skeleton height={350} width="100%" />;
  }

  if (!hotelReviews || hotelReviews.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" mt={2}>
        No reviews available for this hotel.
      </Typography>
    );
  }

  const sortedReviews = [...hotelReviews].sort((a, b) =>
    sortOrder === 'desc' ? b.rating - a.rating : a.rating - b.rating
  );

  const visibleReviews = sortedReviews.slice(0, visibleCount);
  const hasMore = visibleCount < hotelReviews.length;

  return (
    <Box mt={4} flex={1}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Customer Reviews</Typography>
        <Select
          size="small"
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value as 'asc' | 'desc')}
        >
          <MenuItem value="desc">Highest Rated</MenuItem>
          <MenuItem value="asc">Lowest Rated</MenuItem>
        </Select>
      </Stack>

      <Stack spacing={3}>
        {visibleReviews.map(review => (
          <Box key={review.reviewId}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ bgcolor: 'primary.main' }}>{review.customerName.charAt(0)}</Avatar>
              <Box>
                <Typography fontWeight={600}>{review.customerName}</Typography>
                <Stack direction={'row'} gap={0.5}>
                  <Typography variant="body2" fontWeight={500}>
                    {review.rating}
                  </Typography>
                  <Star sx={{ color: 'gold', fontSize: 16 }} />
                </Stack>
              </Box>
            </Stack>

            <Typography variant="body2" mt={1}>
              {review.description}
            </Typography>
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </Stack>

      {hasMore && (
        <Button
          variant="outlined"
          size="small"
          onClick={() =>
            setVisibleCount(prev => Math.min(prev + INITIAL_REVIEW_COUNT, hotelReviews.length))
          }
          sx={{ mt: 2 }}
        >
          Show More Reviews
        </Button>
      )}
    </Box>
  );
};

export default HotelReviews;
