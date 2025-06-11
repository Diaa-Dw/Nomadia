import { SearchBar } from '@/features/search';
import { HeroBanner } from './components';
import { HomeConainer } from './Home.style';

const Home = () => {
  return (
    <HomeConainer maxWidth="xl">
      <HeroBanner />
      <SearchBar />
    </HomeConainer>
  );
};

export default Home;
