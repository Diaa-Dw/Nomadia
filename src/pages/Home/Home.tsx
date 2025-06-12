import { SearchBar } from '@/features/search';
import { HeroBanner } from './components';
import { FeaturedDeals } from './components/FeaturedDeals';
import { RecentlyVisitedHotels } from './components/RecentlyVisitedHotels';
import { TrendingDestinations } from './components';
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
