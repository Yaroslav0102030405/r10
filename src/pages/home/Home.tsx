import AdvantagesList from '../../components/advantages-list/Advantages-list';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import InputFile from '../../components/inputFile/input-file';
import Sevices from '../../components/services/Services';
import Social from '../../components/social/Social';
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
        {/* <Video /> */}
        <Video
          title='Трейлер фільму'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/LmDsOGdm06Y?si=b8ShvMmWC0pKz0vK'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy={'strict-origin-when-cross-origin'}
        />
        <Video
          title='Трейлер фільму'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/3zj7_LM6hKY?si=mePGdkXp4sFpNOd_'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy={'strict-origin-when-cross-origin'}
        />
        <Social />
        <InputFile />
      </main>
    </>
  );
};

export default Home;
