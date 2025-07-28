import AdvantagesList from '../../components/advantages-list/Advantages-list';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Sevices from '../../components/services/Services';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AdvantagesList />
        <Sevices />
      </main>
    </>
  );
};

export default Home;
