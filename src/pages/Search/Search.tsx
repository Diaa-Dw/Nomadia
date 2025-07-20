import { SearchBar } from '@/features/search';
import { FilterSidebar, ResultsContainer } from './components';
import { ContentContainer, FilterContainer, ResultWrapper, SearchContainer } from './Search.style';
import { useFetchSearchResults, useFilterForm } from './hooks';

const Search = () => {
  const { searchResults = [], isPending } = useFetchSearchResults();
  const { appliedAmenities, formikProps } = useFilterForm();

  return (
    <SearchContainer maxWidth="xl">
      <FilterContainer>
        <FilterSidebar formikProps={formikProps} />
      </FilterContainer>

      <ContentContainer>
        <SearchBar isPending={isPending} />

        <ResultWrapper>
          <ResultsContainer
            searchResults={searchResults}
            isPending={isPending}
            selectedAmenities={appliedAmenities}
          />
        </ResultWrapper>
      </ContentContainer>
    </SearchContainer>
  );
};

export default Search;
