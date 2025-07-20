import { SearchFormPayload } from '@/types';
import { SwapVert } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import { useState } from 'react';
import { SORT_OPTIONS } from '../../constants';
import { FieldContainer } from '../FieldContainer';
import { SortMenuItem } from '../GuestRoomDropdown/GuestRoomDropdown.style';
import { SortSummaryStack, SortSummaryText, StyledMenu } from './SortDropdown.style';

const SortDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const {
    values: { sort },
    setFieldValue,
  } = useFormikContext<SearchFormPayload>();

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSortSelect = (value: string) => {
    setFieldValue('sort', value);
    handleCloseMenu();
  };

  return (
    <>
      <FieldContainer icon={<SwapVert />} onClick={handleOpenMenu} pointer={!isMenuOpen}>
        <SortSummaryStack>
          <SortSummaryText variant="body2">Sort by:</SortSummaryText>
          {sort}
          <ExpandMoreIcon fontSize="small" sx={{ ml: 'auto' }} />
        </SortSummaryStack>
      </FieldContainer>

      <StyledMenu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleCloseMenu}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        aria-hidden={!isMenuOpen}
      >
        <Grid container direction="column" maxWidth="210px" gap={1}>
          {SORT_OPTIONS.map(option => (
            <SortMenuItem key={option} onClick={() => handleSortSelect(option)}>
              {option}
            </SortMenuItem>
          ))}
        </Grid>
      </StyledMenu>
    </>
  );
};

export default SortDropdown;
