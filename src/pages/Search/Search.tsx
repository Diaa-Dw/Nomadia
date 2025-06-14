import { SearchBar } from '@/features/search';
import { Box } from '@mui/material';
import { FilterSidebar } from './components';
import { FilterContainer, SearchContainer } from './Search.style';

const Search = () => {
  return (
    <SearchContainer maxWidth="xl">
      <FilterContainer>
        <FilterSidebar />
      </FilterContainer>
      <Box sx={{ height: '100%', overflowY: 'auto' }}>
        <SearchBar />
      </Box>
    </SearchContainer>
  );
};

export default Search;
