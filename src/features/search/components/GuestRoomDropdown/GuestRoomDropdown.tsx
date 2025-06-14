// src/components/form/fields/RoomGuestSelector.tsx

import { SearchFormPayload } from '@/types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PeopleIcon from '@mui/icons-material/PeopleAltOutlined';
import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import { useState } from 'react';
import { Counter } from '../Counter';
import { FieldContainer } from '../FieldContainer';
import { GuestSummaryStack, GuestSummaryText, StyledMenu } from './GuestRoomDropdown.style';

const GuestRoomDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const {
    values: { adults, children, numberOfRooms },
  } = useFormikContext<SearchFormPayload>();

  const handleCloseMenu = () => setAnchorEl(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

  const pluralize = (value: number, word: string) => {
    return value > 1 ? `${word}s` : word;
  };

  return (
    <>
      <FieldContainer icon={<PeopleIcon />} onClick={handleOpenMenu} pointer={!isMenuOpen}>
        <GuestSummaryStack>
          <GuestSummaryText variant="body2">
            <span>
              {adults} {pluralize(adults, 'adult')} •&nbsp;
            </span>
            <span>
              {children} {children === 1 ? 'child' : 'children'} •&nbsp;
            </span>
            <span>
              {numberOfRooms} {pluralize(numberOfRooms, 'room')}
            </span>
          </GuestSummaryText>

          <ExpandMoreIcon fontSize="small" sx={{ ml: 'auto' }} />
        </GuestSummaryStack>
      </FieldContainer>

      <StyledMenu
        anchorEl={anchorEl}
        id="room-guest-selector-menu"
        open={isMenuOpen}
        onClose={handleCloseMenu}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        aria-hidden={!isMenuOpen}
      >
        <Grid container rowGap={1} maxWidth="210px">
          <Counter name="adults" preventDecrementOn={1} preventIncrementOn={5} />
          <Counter name="children" />
          <Counter name="numberOfRooms" preventDecrementOn={1} displayName="rooms" />
        </Grid>
      </StyledMenu>
    </>
  );
};

export default GuestRoomDropdown;
