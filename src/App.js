import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from './header/Header';
import Footer from './footer/Footer';
import playlistData from './data';
import Carousel from './carousel/Carousel';
import './index.css';

function App() {
  const [data, setData] = useState(playlistData);
  const [index, setIndex] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const sliderRef = useRef(null);

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

  useEffect(() => {
    if (startTimer) {
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
      }, 3000);
      return () => clearInterval(sliderRef.current);
    } else {
      clearInterval(sliderRef.current);
    }
  }, [startTimer]);

  function handleCancelClick() {
    clearInterval(sliderRef.current);
  }

  return (
    <div>
      <Header
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        setIndex={setIndex}
        startTimer={startTimer}
        setStartTimer={setStartTimer}
        handleCancelClick={handleCancelClick}
      />
      <Carousel data={data} index={index} setIndex={setIndex} />
      <Footer />
    </div>
  );
}

export default App;
