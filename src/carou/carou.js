import {
  PageContainer,
  SliderWrapper,
  Image,
  Nav,
  sharedStyles,
  NextButton,
  BackButton,
} from './carou.style';

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const slides = [
  'https://www.teahub.io/photos/full/17-170547_chicago-city-skyline-at-night.jpg',
  'https://www.sunshinecoastair.com/wp-content/uploads/2018/11/PhaLake4-1000x500.jpg',
  'https://www.teahub.io/photos/full/17-170547_chicago-city-skyline-at-night.jpg',
  'https://www.sunshinecoastair.com/wp-content/uploads/2018/11/PhaLake4-1000x500.jpg',
];

const Caroussel = () => {
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
            {slides.map((slide, index) => (
              <Slide index={index}>
                <Image image={slide} />
              </Slide>
            ))}
          </Slider>
          <Nav>
            <BackButton>{`<`}</BackButton>
            <NextButton>{`>`}</NextButton>
          </Nav>
        </CarouselProvider>
      </SliderWrapper>
    </PageContainer>
  );
};

export default Caroussel;
