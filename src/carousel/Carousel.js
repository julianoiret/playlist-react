import { CarouselContainer, PlaylistSection } from './Carousel.style';

import Playlist from './Playlist';

const Carousel = ({ data, index, imgVectorTheme }) => {
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
          return (
            <Playlist
              key={ind.id}
              {...ind}
              playIndex={playIndex}
              data={data}
              index={index}
              imgVectorTheme={imgVectorTheme}
              sumTime={sumTime}
            />
          );
        })}
      </PlaylistSection>
    </CarouselContainer>
  );
};

export default Carousel;
