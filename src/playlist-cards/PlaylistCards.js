import { PlaylistCardBack } from './PlaylistCardBack';
import { PlaylistCardFront } from './PlaylistCardFront';
import { PlaylistCard, PlaylistButton } from './playlistCards.style';
import { useState } from 'react';

// import { playlistMap } from "../functions";

const PlaylistCards = ({ data }) => {
  const [flip, setFlip] = useState(false);
  console.log(flip);

  return (
    <>
      {data.map((playlist) => {
        const { id, musics } = playlist;
        return (
          <PlaylistCard key={id}>
            <PlaylistCardFront
              id=''
              {...playlist}
              flip={flip}
              setFlip={setFlip}
            />

            <PlaylistCardBack
              musics={musics}
              flip={flip}
              setFlip={setFlip}
            ></PlaylistCardBack>
            <PlaylistButton onClick={() => setFlip(!flip)}>
              BAck to front
            </PlaylistButton>
          </PlaylistCard>
        );
      })}
    </>
  );
};

export default PlaylistCards;
