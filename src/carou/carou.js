import {
  PageContainer,
  SliderWrapper,
  Image,
  Nav,
  NextButton,
  BackButton,
  CarouselImg,
} from './carou.style';
import Playlist from './playlist';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { PlaylistButton } from '../playlist-cards/playlistCards.style';

const slides = [
  'https://www.teahub.io/photos/full/17-170547_chicago-city-skyline-at-night.jpg',
  'https://www.sunshinecoastair.com/wp-content/uploads/2018/11/PhaLake4-1000x500.jpg',
  'https://www.teahub.io/photos/full/17-170547_chicago-city-skyline-at-night.jpg',
  'https://www.sunshinecoastair.com/wp-content/uploads/2018/11/PhaLake4-1000x500.jpg',
];

const Carousel = ({ data }) => {
  return (
    <PageContainer>
      <SliderWrapper>
        <CarouselProvider
          naturalSlideWidth={1000}
          naturalSlideHeight={500}
          totalSlides={slides.length}
          visibleSlides={1}
        >
          <Slider>
            {/* <Playlist data={data} /> */}
            {data.map((playlistMap, index) => {
              console.log(playlistMap);
              const { id, playlistName, description, genre, photo, musics } =
                playlistMap;
              <Slide index={index}>
                {/* <Image Image={photo}></Image> */}
                <CarouselImg src={photo} alt={description}></CarouselImg>
              </Slide>;
            })}
          </Slider>
          <Nav>
            <BackButton>{`b`}</BackButton>
            <NextButton>{`>`}</NextButton>
          </Nav>
        </CarouselProvider>
      </SliderWrapper>
    </PageContainer>
  );
};

export default Carousel;
