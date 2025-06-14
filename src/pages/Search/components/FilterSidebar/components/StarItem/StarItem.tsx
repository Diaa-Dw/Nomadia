import { Typography } from '@mui/material';
import { StarRow } from './StarItem.style';
import { Star } from '@mui/icons-material';

const StarItem = ({
  star,
  selected,
  onToggle,
}: {
  star: number;
  selected: boolean;
  onToggle: (star: number) => void;
}) => {
  return (
    <StarRow
      onClick={() => onToggle(star)}
      selected={selected}
      role="checkbox"
      aria-checked={selected}
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle(star);
        }
      }}
    >
      <Typography variant="body2">{star}</Typography>
      <Star fontSize="small" color={selected ? 'primary' : 'disabled'} />
    </StarRow>
  );
};

export default StarItem;
