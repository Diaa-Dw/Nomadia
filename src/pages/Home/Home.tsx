import { SearchBar } from '@/features/search';
import { HeroBanner } from './components';
import { FeaturedDeals } from './components/FeaturedDeals';
import { HomeConainer } from './Home.style';

const Home = () => {
  return (
    <HomeConainer maxWidth="xl">
      <HeroBanner />
      <SearchBar />
      <FeaturedDeals />
    </HomeConainer>
  );
};

export default Home;
