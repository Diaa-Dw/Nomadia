import { SearchBar } from '@/features/search';
import { FilterSidebar, ResultsContainer } from './components';
import { ContentContainer, FilterContainer, ResultWrapper, SearchContainer } from './Search.style';

const Search = () => {
  return (
    <SearchContainer maxWidth="xl">
      <FilterContainer>
        <FilterSidebar />
      </FilterContainer>

      <ContentContainer>
        <SearchBar />

        <ResultWrapper>
          <ResultsContainer />
        </ResultWrapper>
      </ContentContainer>
    </SearchContainer>
  );
};

export default Search;
