import { SearchBar } from '@/features/search';
import { HeroBanner } from './components';
import { FeaturedDeals } from './components/FeaturedDeals';
import { HomeConainer } from './Home.style';
import { RecentlyVisitedHotels } from './components/RecentlyVisitedHotels';

const Home = () => {
  return (
    <HomeConainer maxWidth="xl">
      <HeroBanner />
      <SearchBar />
      <FeaturedDeals />
      <RecentlyVisitedHotels />
    </HomeConainer>
  );
};

export default Home;
