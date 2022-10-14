import { useState } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import playlistData from './data';
import Carousel from './carousel/Carousel';
import './index.css';

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
      <Header
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        setIndex={setIndex}
      />
      <Carousel data={data} index={index} setIndex={setIndex} />
      <Footer />
    </div>
  );
}

export default App;
