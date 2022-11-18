import {
  HeaderWrapper,
  HeaderTitle,
  IconWrapper,
  Icons,
  Tooltip,
  TooltipWrapper,
} from './Header.style';
import {
  FaPlay,
  FaPause,
  FaFastForward,
  FaFastBackward,
  FaStop,
} from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';

const Header = ({
  prevSlide,
  nextSlide,
  setIndex,
  startSlider,
  setStartSlider,
  handleCancelClick,
  toggleTheme,
}) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Music is life</HeaderTitle>
      <IconWrapper>
        <TooltipWrapper>
          <Icons aria-label='play' onClick={() => setStartSlider(!startSlider)}>
            <FaPlay />
          </Icons>
          <Tooltip>Play</Tooltip>
        </TooltipWrapper>
        <TooltipWrapper>
          <Icons aria-label='pause' onClick={() => handleCancelClick()}>
            <FaPause />
          </Icons>
          <Tooltip>Pause</Tooltip>
        </TooltipWrapper>
        <TooltipWrapper>
          <Icons aria-label='previous' onClick={() => prevSlide()}>
            <FaFastBackward />
          </Icons>
          <Tooltip>Previous</Tooltip>
        </TooltipWrapper>
        <TooltipWrapper>
          <Icons aria-label='next' onClick={() => nextSlide()}>
            <FaFastForward />
          </Icons>
          <Tooltip>Next</Tooltip>
        </TooltipWrapper>
        <TooltipWrapper>
          <Icons aria-label='mode' onClick={toggleTheme}>
            <FiRepeat style={{ padding: 0 }} />
          </Icons>
          <Tooltip>Light mode</Tooltip>
        </TooltipWrapper>
        <TooltipWrapper>
          <Icons aria-label='stop' onClick={() => setIndex(0)}>
            <FaStop />
          </Icons>
          <Tooltip>Stop</Tooltip>
        </TooltipWrapper>
      </IconWrapper>
    </HeaderWrapper>
  );
};

export default Header;
