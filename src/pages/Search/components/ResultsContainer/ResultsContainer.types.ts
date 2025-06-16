import { SearchResponse } from '@/types';

export interface ResultsContainerProps {
  searchResults: SearchResponse[];
  isPending: boolean;
  selectedAmenities: string[] | [];
}
