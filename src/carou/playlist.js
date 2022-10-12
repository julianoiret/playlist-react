import {
  PageContainer,
  SliderWrapper,
  Image,
  CarouselImg,
  Nav,
  NextButton,
  BackButton,
} from './carou.style';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

const Playlist = ({ data }) => {
  return (
    <>
      {data.map((playlistMap, index) => {
        console.log(playlistMap);
        const { id, playlistName, description, genre, photo, musics } =
          playlistMap;
        <Slide index={index}>
          <Image image={photo}></Image>
          {/* <CarouselImg src={photo} alt={description}></CarouselImg> */}
          <div className='test'>{description}</div>
        </Slide>;
      })}
    </>
  );
};
export default Playlist;
