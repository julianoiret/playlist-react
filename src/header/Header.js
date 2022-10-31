import {
  HeaderWrapper,
  HeaderTitle,
  IconWrapper,
  Icons,
  Tooltip,
  TooltipWrapper,
} from './header.style';
import {
  FaPlay,
  FaPause,
  FaFastForward,
  FaFastBackward,
  FaStop,
} from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';

const Header = ({ prevSlide, nextSlide, setIndex }) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Music is life</HeaderTitle>
      <IconWrapper>
        <Icons>
          <FaPlay />
        </Icons>
        <Icons>
          <FaPause />
        </Icons>
        <Icons>
          <FaFastBackward onClick={() => prevSlide()} />
        </Icons>
        <Icons>
          <FaFastForward onClick={() => nextSlide()} />
        </Icons>
        <Icons>
          <FiRepeat />
        </Icons>
        <Icons>
          <FaStop onClick={() => setIndex(0)} />
        </Icons>
      </IconWrapper>
      <TooltipWrapper>
        <Tooltip>Play</Tooltip>
        <Tooltip>Pause</Tooltip>
        <Tooltip>Previous</Tooltip>
        <Tooltip>Next</Tooltip>
        <Tooltip>Dark Mode</Tooltip>
        <Tooltip>Reset</Tooltip>
      </TooltipWrapper>
    </HeaderWrapper>
  );
};

export default Header;
