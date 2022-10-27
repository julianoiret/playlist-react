import {
  HeaderWrapper,
  HeaderTitle,
  IconWrapper,
  Icons,
} from './header.style';
import { FaPlay, FaPause, FaFastForward, FaFastBackward, FaStop } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';

const Header = ({ prevSlide, nextSlide, setIndex }) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Music is life</HeaderTitle>
      <IconWrapper>
      <Icons><FaPlay /></Icons>
      <Icons><FaPause /></Icons>
       <Icons><FaFastBackward onClick={() => prevSlide()} /></Icons>
       <Icons><FaFastForward onClick={() => nextSlide()} /></Icons>
       <Icons><FiRepeat onClick={() => setIndex(0)} /></Icons>
       <Icons><FaStop /></Icons>
      </IconWrapper>
    </HeaderWrapper>
  );
};

export default Header;
