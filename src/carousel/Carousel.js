import React, { useState, useEffect } from 'react';
import {
  CarouselContainer,
  PlaylistSection,
  PlaylistCardsss,
  FlipCard,
  PlaylistCardFront,
  PlaylistCardImg,
  PlaylistCardInfo,
  PlaylistTitle,
  PlaylistDescription,
  PlaylistTotalTime,
  PlaylistButton,
  ArticleCarou,
  BackButton,
  PlaylistCardBack,
  PlaylistCardDetail,
  PlaylistLink,
  PlaylistBackBanner,
  TrackNumber,
  TrackArtist,
  TrackTitle,
  TrackTime,
} from './carousel.style';
import { TbArrowBack } from 'react-icons/tb';
import { Badges } from './Badges';
// import { PlaylistDescriptionCarou, PlaylistGenreCarou, PlaylistTitleCarou } from '../playlist-cards/playlistCards.style';
import { RiTimerLine } from 'react-icons/ri';
import { BiCaretRightCircle } from 'react-icons/bi';

const Carousel = ({ data, index, setIndex }) => {
  // const [index, setIndex] = useState(0);
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

  return (
    <CarouselContainer>
      <PlaylistSection>
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
              <FlipCard className={flipCarou ? 'hidden' : ''}>
                <PlaylistCardFront>
                  <PlaylistCardImg
                    src={photo}
                    alt={playlistName}
                  ></PlaylistCardImg>
                  <PlaylistCardInfo>
                    <PlaylistTitle>{playlistName}</PlaylistTitle>
                    <PlaylistDescription>
                      {description}
                    </PlaylistDescription>
                    <PlaylistTotalTime>
                      <RiTimerLine
                        style={{ fontSize: '1.25rem', paddingRight: '0.6rem' }}
                      />
                      {sumTime(musics)} minutes
                    </PlaylistTotalTime>
                    <Badges genre={genre}></Badges>
                    <PlaylistButton onClick={() => setFlipCarou(true)}>
                      Detail
                    </PlaylistButton>
                  </PlaylistCardInfo>
                </PlaylistCardFront>
              </FlipCard>
              <FlipCard className={!flipCarou ? 'hidden' : ''}>
                <PlaylistBackBanner>
                  <PlaylistTitle>{playlistName}</PlaylistTitle>
                  <BackButton onClick={() => setFlipCarou(false)}>
                    <TbArrowBack /> Back
                  </BackButton>
                </PlaylistBackBanner>
                <PlaylistCardBack>
                  {musics.map((music) => {
                    const { track, artist, title, time, link } = music;
                    return (
                      <PlaylistCardDetail key={track}>
                        <PlaylistLink href={link} target='_blank' rel='noreferrer'>
                          <BiCaretRightCircle />
                        </PlaylistLink>
                        <TrackNumber>{track}</TrackNumber>
                        <TrackArtist>{artist}</TrackArtist>
                        <TrackTitle>{title}</TrackTitle>
                        <TrackTime>{time}</TrackTime>
                      </PlaylistCardDetail>
                    );
                  })}
                </PlaylistCardBack>
              </FlipCard>
            </article>
          );
        })}
      </PlaylistSection>
    </CarouselContainer>
  );
};

export default Carousel;
