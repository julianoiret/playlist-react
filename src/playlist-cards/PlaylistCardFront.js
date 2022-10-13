import { Badges } from './Badges';
import {
  PlaylistCardImg,
  PlaylistCardInfo,
  PlaylistTitle,
  PlaylistDescription,
  PlaylistTotalTime,
  PlaylistButton,
  PlaylistCardFrontDetail,
  PlaylistCardFrontFlip,
} from './playlistCards.style';
import { RiTimerLine } from 'react-icons/ri';
import { useState } from 'react';

export const PlaylistCardFront = ({
  playlistName,
  description,
  genre,
  photo,
  musics,
  flip,
  setFlip,
}) => {
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
    <PlaylistCardFrontFlip className={flip ? 'hidden' : ''}>
      <PlaylistCardFrontDetail>
        <PlaylistCardImg src={photo} alt={playlistName}></PlaylistCardImg>
        <PlaylistCardInfo>
          <PlaylistTitle>{playlistName.toUpperCase()}</PlaylistTitle>
          <PlaylistDescription>{description}</PlaylistDescription>
          <PlaylistTotalTime>
            <RiTimerLine
              style={{ fontSize: '1.25rem', paddingRight: '0.6rem' }}
            />
            {sumTime(musics)} minutes
          </PlaylistTotalTime>
          <Badges genre={genre}></Badges>
          <PlaylistButton onClick={() => setFlip(!flip)}>Detail</PlaylistButton>
        </PlaylistCardInfo>
      </PlaylistCardFrontDetail>
    </PlaylistCardFrontFlip>
  );
};
