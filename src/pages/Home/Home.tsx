import { HeroBanner } from './components';
import { HomeConainer } from './Home.style';

const Home = () => {
  return (
    <HomeConainer maxWidth="xl">
      <HeroBanner />
    </HomeConainer>
  );
};

export default Home;
