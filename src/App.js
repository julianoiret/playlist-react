import { useState } from 'react';
import Header from './header/Header';
import PlaylistCards from './playlist-cards/PlaylistCards';
import Carousel from './carou/carou';
import Footer from './footer/Footer';
import playlistData from './data';
import Caroussel from './carousel-test/carousel';
import './index.css';
import { iconsStyle } from './header/header.style';

function App() {
  const [data, setData] = useState(playlistData);
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((oldIndex) => {
      //we use a fct to set the index, oldIndex = parameter
      let index = oldIndex - 1;
      if (index < 0) {
        index = data.length - 1;
      }
      return index;
    });
  };

  const nextSlide = () => {
    setIndex((oldIndex) => {
      //we use a fct to set the index, oldIndex = parameter
      let index = oldIndex + 1;
      if (index > data.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  return (
    <div>
      <Header prevSlide={prevSlide} nextSlide={nextSlide} />
      {/* <PlaylistCards data={data} /> */}
      <Caroussel data={data} index={index} setIndex={setIndex} />
      {/* <Carousel data={data} /> */}

      <Footer />
    </div>
  );
}

export default App;
