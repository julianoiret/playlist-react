import React, { useState } from 'react';
import {
  CarouselContainer,
  PlaylistSection,
  MainWrapper,
  FlipCard,
  PlaylistCardFront,
  ImgVector,
  PlaylistCardImg,
  PlaylistCardInfo,
  PlaylistTitle,
  PlaylistDescription,
  PlaylistTotalTime,
  YoutubeLink,
  PlaylistButton,
  PlaylistBackBanner,
  BackButton,
  PlaylistCardBack,
  PlaylistCardDetail,
  PlaylistLink,
  TrackNumber,
  TrackArtist,
  TrackTitle,
  TrackTime,
} from './Carousel.style';
import { TbArrowBack } from 'react-icons/tb';
import { Badges } from './Badges';
import { RiTimerLine } from 'react-icons/ri';
import { BiCaretRightCircle } from 'react-icons/bi';
import { ImYoutube2 } from 'react-icons/im';

const Carousel = ({ data, index }) => {
  const [flip, setFlip] = useState(false);

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
          const {
            id,
            playlistName,
            description,
            genre,
            photo,
            youtube,
            musics,
          } = ind;

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
            <MainWrapper className={position} key={id}>
              <FlipCard className={flip ? 'hidden' : ''}>
                <PlaylistCardFront>
                  <ImgVector
                    src={require('../asset/white-design.png')}
                  ></ImgVector>
                  <PlaylistCardImg
                    src={photo}
                    alt={playlistName}
                  ></PlaylistCardImg>
                  <PlaylistCardInfo>
                    <PlaylistTitle>{playlistName}</PlaylistTitle>
                    <PlaylistDescription>{description}</PlaylistDescription>
                    <PlaylistTotalTime>
                      <RiTimerLine
                        style={{ fontSize: '1.25rem', paddingRight: '0.6rem' }}
                      />
                      {sumTime(musics)} minutes
                    </PlaylistTotalTime>
                    <YoutubeLink
                      href={youtube}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <ImYoutube2 style={{ fontSize: '50px' }} />
                    </YoutubeLink>
                    <Badges genre={genre}></Badges>
                    <PlaylistButton onClick={() => setFlip(true)}>
                      Detail
                    </PlaylistButton>
                  </PlaylistCardInfo>
                </PlaylistCardFront>
              </FlipCard>
              <FlipCard className={!flip ? 'hidden' : ''}>
                <PlaylistBackBanner>
                  <PlaylistTitle>{playlistName}</PlaylistTitle>
                  <BackButton onClick={() => setFlip(false)}>
                    <TbArrowBack /> Back
                  </BackButton>
                </PlaylistBackBanner>
                <PlaylistCardBack>
                  {musics.map((music) => {
                    const { track, artist, title, time, link } = music;
                    return (
                      <PlaylistCardDetail key={track}>
                        <PlaylistLink
                          href={link}
                          target='_blank'
                          rel='noreferrer'
                        >
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
            </MainWrapper>
          );
        })}
      </PlaylistSection>
    </CarouselContainer>
  );
};

export default Carousel;
