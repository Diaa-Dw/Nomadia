import { SearchBar } from '@/features/search';
import { Box } from '@mui/material';
import { FilterSidebar } from './components';
import { FilterContainer, SearchContainer } from './Search.style';
import useFetchHotels from './hooks/useFetchHotels';
import { HotelCard } from '@/components';

const Search = () => {
  const { searchResults, isPending } = useFetchHotels();

  if (isPending) {
    return <h4>Loading</h4>;
  }

  return (
    <SearchContainer maxWidth="xl">
      <FilterContainer>
        <FilterSidebar />
      </FilterContainer>
      <Box sx={{ height: '100%', overflowY: 'auto' }}>
        <SearchBar />
        {searchResults &&
          searchResults.length > 0 &&
          searchResults.map(result => <HotelCard variant={'horizontal'} hotelData={result} />)}
      </Box>
    </SearchContainer>
  );
};

export default Search;
