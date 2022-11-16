import GlobalStyle from './globalStyles';
import { useState, useEffect, useRef } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import playlistData from './data';
import Carousel from './carousel/Carousel';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(playlistData);
  const [index, setIndex] = useState(0);
  const [startSlider, setStartSlider] = useState(false);
  // const [mode, setMode] = useState('dark');
  const sliderRef = useRef(null);

  const prevSlide = () => {
    setIndex((oldIndex) => {
      // we use a fct to set the index, oldIndex = parameter
      let index = oldIndex - 1;
      if (index < 0) {
        index = data.length - 1;
      }
      return index;
    });
  };

  const nextSlide = () => {
    setIndex((oldIndex) => {
      // we use a fct to set the index, oldIndex = parameter
      let index = oldIndex + 1;
      if (index > data.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  // autoslide/caroussel function
  // we check startSlider is true, if yes we change the index every 6s
  useEffect(() => {
    if (startSlider) {
      if (index === 0) {
        clearInterval(sliderRef.current);
      }
      sliderRef.current = setInterval(() => {
        setIndex((oldIndex) => {
          let index = oldIndex + 1;
          if (index > data.length - 1) {
            index = 0;
          }
          return index;
        });
      }, 6000);
      return () => clearInterval(sliderRef.current);
    } else {
      clearInterval(sliderRef.current);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startSlider]);

  // function to pause/stop the autoslide/caroussel
  function handleCancelClick() {
    clearInterval(sliderRef.current);
  }

  return (
    <>
      <GlobalStyle />
      <Header
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        setIndex={setIndex}
        startSlider={startSlider}
        setStartSlider={setStartSlider}
        handleCancelClick={handleCancelClick}
      />
      <Carousel data={data} index={index} setIndex={setIndex} />
      <Footer />
    </>
  );
}

export default App;
