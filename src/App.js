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

  const PlaylistPage = styled.div``;

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
  useEffect(
    () => {
      let slider = setInterval(() => {
        setIndex((oldIndex) => {
          let index = oldIndex + 1;
          if (index > data.length - 1) {
            index = 0;
          }
          return index;
        });
      }, 12000);
      return () => clearInterval(slider);
    },
    { index }
  );
  // function SliderTimer() {
  //   const sliderRef = useRef(null);
  //   useEffect(
  //     () => {
  //       let slider = setInterval(() => {
  //         setIndex((oldIndex) => {
  //           let index = oldIndex + 1;
  //           if (index > data.length - 1) {
  //             index = 0;
  //           }
  //           return index;
  //         });
  //       }, 7000);
  //       sliderRef.current = index;
  //       return () => clearInterval(slider);
  //     },
  //     { index }
  //   );
  // }

  return (
    <PlaylistPage>
      <Header prevSlide={prevSlide} nextSlide={nextSlide} setIndex={setIndex} />
      <Carousel data={data} index={index} setIndex={setIndex} />
      <Footer />
    </PlaylistPage>
  );
}

export default App;
