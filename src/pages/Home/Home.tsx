import { SearchBar } from '@/features/search';
import { HeroBanner, RecentlyVisitedHotels, TrendingDestinations } from './components';
import { FeaturedDeals } from './components/FeaturedDeals';
import { HomeConainer } from './Home.style';

const Home = () => {
  return (
    <HomeConainer maxWidth="xl">
      <HeroBanner />
      <SearchBar />
      <FeaturedDeals />
      <TrendingDestinations />
      <RecentlyVisitedHotels />
    </HomeConainer>
  );
};

export default Home;
