import React, { useState } from 'react';
import {
  MainWrapper,
  FlipCard,
  PlaylistCardFront,
  ImgVector,
  PlaylistCardImg,
  PlaylistCardInfo,
  PlaylistTitle,
  PlaylistDescription,
  PlaylistTotalTime,
  PlaylistLogos,
  YoutubeLink,
  SpotifyLink,
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
import { RiTimerLine, RiSpotifyFill } from 'react-icons/ri';
import { BiCaretRightCircle } from 'react-icons/bi';
import { ImYoutube2 } from 'react-icons/im';

const Playlist = ({
  id,
  playlistName,
  description,
  genre,
  photo,
  youtube,
  spotify,
  musics,
  data,
  index,
  imgVectorTheme,
  playIndex,
  sumTime,
}) => {
  const [flip, setFlip] = useState(false);
  let position = 'nextSlide';
  if (playIndex === index) {
    position = 'activeSlide';
  }
  if (
    playIndex === index - 1 ||
    // to go back to the last playlist of the array
    (index === 0 && playIndex === data.length - 1)
  ) {
    position = 'lastSlide';
  }

  return (
    <MainWrapper className={position} key={id}>
      <FlipCard className={flip ? 'hidden' : ''}>
        <PlaylistCardFront>
          <ImgVector
            src={require(`../asset/${imgVectorTheme}-design.png`)}
          ></ImgVector>
          <PlaylistCardImg src={photo} alt={playlistName}></PlaylistCardImg>
          <PlaylistCardInfo>
            <PlaylistTitle>{playlistName}</PlaylistTitle>
            <PlaylistDescription>{description}</PlaylistDescription>
            <PlaylistTotalTime>
              <RiTimerLine
                style={{ fontSize: '1.25rem', paddingRight: '0.6rem' }}
              />
              {sumTime(musics)} minutes
            </PlaylistTotalTime>
            <PlaylistLogos>
              <YoutubeLink href={youtube} target='_blank' rel='noreferrer'>
                <ImYoutube2 style={{ fontSize: '50px' }} />
              </YoutubeLink>
              <SpotifyLink href={spotify} target='_blank' rel='noreferrer'>
                <RiSpotifyFill style={{ fontSize: '25px' }} />
              </SpotifyLink>
            </PlaylistLogos>
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
    </MainWrapper>
  );
};

export default Playlist;
