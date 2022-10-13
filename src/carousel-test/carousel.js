import React, { useState, useEffect } from 'react';
import {
  PlaylistCardImgCarou,
  PlaylistCardCarousel,
  CarousselContainer,
  CarousselSection,
  PlaylistDescriptionCarou,
  PlaylistGenreCarou,
  PlaylistTitleCarou,
  PlaylistCardInfoCarou,
  GenreBadgeCarou,
  ArticleCarou,
  Front,
  Back,
  PlaylistCardBackDetailCarou,
} from './carousel.style';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { Badges } from '../playlist-cards/Badges';
import { PlaylistButton } from '../playlist-cards/playlistCards.style';
// import { PlaylistDescriptionCarou, PlaylistGenreCarou, PlaylistTitleCarou } from '../playlist-cards/playlistCards.style';

const Caroussel = ({ data }) => {
  const [index, setIndex] = useState(0);

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

  return (
    <CarousselContainer>
      <CarousselSection>
        {data.map((ind, playIndex) => {
          const { id, musics, playlistName, description, genre, photo } = ind;
          let position = 'nextSlide';
          if (playIndex === index) {
            position = 'activeSlide';
          }
          if (
            playIndex === index - 1 ||
            (index === 0 && playIndex === data.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={position} key={id}>
              <Front>
              <PlaylistCardImgCarou src={photo} alt={playlistName}></PlaylistCardImgCarou>
              <PlaylistCardInfoCarou>
                <PlaylistTitleCarou>{playlistName}</PlaylistTitleCarou>
                <PlaylistDescriptionCarou>{description}</PlaylistDescriptionCarou>
                <Badges genre={genre}></Badges>
                <PlaylistButton>Detail</PlaylistButton>
              </PlaylistCardInfoCarou>
              </Front>
              <Back>
                <PlaylistCardBackDetailCarou>
                  <p>play</p>
                  <p>artist</p>
                  <p>title</p>
                  <p>minutes</p>
                  </PlaylistCardBackDetailCarou>
              </Back>
            </article>
          );
        })}

        <button className='prev' onClick={prevSlide}>
          {/* means that we use the usestate set index to update our reviews */}
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </CarousselSection>
    </CarousselContainer>
  );
};

export default Caroussel;


{/* <img className='article-photo' src={photo} alt={playlistName} /> */}