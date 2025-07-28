import AdvantagesList from '../../components/advantages-list/Advantages-list';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Sevices from '../../components/services/Services';
import Video from '../../components/video/Video';

const Home = () => {
  return (
    <>
      <p>Перший</p>
      <Header />
      <main>
        <Hero />
        <AdvantagesList />
        <Sevices />
        <Video />
      </main>
    </>
  );
};

export default Home;
