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

const Header = ({
  prevSlide,
  nextSlide,
  setIndex,
  startTimer,
  setStartTimer,
  handleCancelClick,
}) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Music is life</HeaderTitle>
      <IconWrapper>
        <TooltipWrapper>
          <Icons>
            <FaPlay onClick={() => setStartTimer(!startTimer)} />
          </Icons>
          <Tooltip>Play</Tooltip>
        </TooltipWrapper>
        <TooltipWrapper>
          <Icons>
            <FaPause onClick={() => handleCancelClick()} />
          </Icons>
          <Tooltip>Pause</Tooltip>
        </TooltipWrapper>
        <TooltipWrapper>
          <Icons>
            <FaFastBackward onClick={() => prevSlide()} />
          </Icons>
          <Tooltip>Previous</Tooltip>
        </TooltipWrapper>
        <TooltipWrapper>
          <Icons>
            <FaFastForward onClick={() => nextSlide()} />
          </Icons>
          <Tooltip>Next</Tooltip>
        </TooltipWrapper>
        <TooltipWrapper>
          <Icons>
            <FiRepeat />
          </Icons>
          <Tooltip>Light mode</Tooltip>
        </TooltipWrapper>
        <TooltipWrapper>
          <Icons>
            <FaStop onClick={() => setIndex(0)} />
          </Icons>
          <Tooltip>Stop</Tooltip>
        </TooltipWrapper>
      </IconWrapper>
      {/* <TooltipWrapper> */}
      {/* </TooltipWrapper> */}
    </HeaderWrapper>
  );
};

export default Header;
