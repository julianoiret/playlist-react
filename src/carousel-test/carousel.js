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
  PlaylistTotalTimeCarou,
  ArticleCarou,
  FlipCarou,
  BackButton,
  Front,
  Back,
  LinkCarou,
  PlaylistCardBackDetailCarou,
  PlaylistBackBanner,
} from './carousel.style';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { TbArrowBack } from 'react-icons/tb';
import { Badges } from '../playlist-cards/Badges';
import { PlaylistButton } from '../playlist-cards/playlistCards.style';
// import { PlaylistDescriptionCarou, PlaylistGenreCarou, PlaylistTitleCarou } from '../playlist-cards/playlistCards.style';
import { RiTimerLine } from 'react-icons/ri';
import { BiCaretRightCircle } from 'react-icons/bi';

const Caroussel = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [flipCarou, setFlipCarou] = useState(false);

  // function to sum the total time for each playlist
  let sumTime = (array) => {
    const total = array.reduce((acc, curr) => {
      acc += curr.time;
      return acc; // always return the acc
    }, 0);
    // round up to 2 decimal
    return Math.round(total * 100) / 100;
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
          const { id, playlistName, description, genre, photo, musics } = ind;
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
              <FlipCarou className={flipCarou ? 'hidden' : ''}>
                <Front>
                  <PlaylistCardImgCarou
                    src={photo}
                    alt={playlistName}
                  ></PlaylistCardImgCarou>
                  <PlaylistCardInfoCarou>
                    <PlaylistTitleCarou>{playlistName}</PlaylistTitleCarou>
                    <PlaylistDescriptionCarou>
                      {description}
                    </PlaylistDescriptionCarou>
                    <PlaylistTotalTimeCarou>
                      <RiTimerLine
                        style={{ fontSize: '1.25rem', paddingRight: '0.6rem' }}
                      />
                      {sumTime(musics)} minutes
                    </PlaylistTotalTimeCarou>
                    <Badges genre={genre}></Badges>
                    <PlaylistButton onClick={() => setFlipCarou(true)}>
                      Detail
                    </PlaylistButton>
                  </PlaylistCardInfoCarou>
                </Front>
              </FlipCarou>
              <FlipCarou className={!flipCarou ? 'hidden' : ''}>
                <PlaylistBackBanner>
                  <PlaylistTitleCarou>{playlistName}</PlaylistTitleCarou>
                  <BackButton onClick={() => setFlipCarou(false)}>
                    <TbArrowBack /> Back
                  </BackButton>
                </PlaylistBackBanner>
                <Back>
                  {musics.map((music) => {
                    const { track, artist, title, time, link } = music;
                    return (
                      <PlaylistCardBackDetailCarou key={track}>
                        <LinkCarou href={link} target='_blank' rel='noreferrer'>
                          <BiCaretRightCircle />
                        </LinkCarou>
                        <p
                          style={{ minWidth: '50px', border: '1px solid grey' }}
                        >
                          {track}
                        </p>
                        <p
                          style={{
                            minWidth: '300px',
                            border: '1px solid grey',
                          }}
                        >
                          {artist}
                        </p>
                        <p
                          style={{
                            minWidth: '400px',
                            border: '1px solid grey',
                          }}
                        >
                          {title}
                        </p>
                        <p
                          style={{ minWidth: '50px', border: '1px solid grey' }}
                        >
                          {time}
                        </p>
                      </PlaylistCardBackDetailCarou>
                    );
                  })}
                </Back>
              </FlipCarou>
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
