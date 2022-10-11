import { HeaderWrapper, HeaderTitle, IconWrapper, iconsStyle } from './header.style';
import { GrPlayFill, GrPauseFill, GrStopFill } from 'react-icons/gr';
import { FaFastForward, FaFastBackward } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';

const Header = () => {
    return (
        <HeaderWrapper>
        <HeaderTitle>Music is life</HeaderTitle>
        <IconWrapper>
        <GrPlayFill style={iconsStyle} />
        <GrPauseFill style={iconsStyle} />
        <FaFastBackward style={iconsStyle} />
        <FaFastForward style={iconsStyle} />
        <FiRepeat style={iconsStyle} />
        <GrStopFill style={iconsStyle} />
        </IconWrapper>
        </HeaderWrapper>
    )
}

export default Header;