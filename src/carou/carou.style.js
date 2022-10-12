import styled, { css } from 'styled-components';
import { ButtonNext, ButtonBack } from 'pure-react-carousel';
import { rgba } from 'polished';

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 800px;
  height: 500px;
  background: white;
  /* background-color: blue; */
`;

export const Image = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid pink;
  background: url(${(p) => p.image});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const CarouselImg = styled.img`
  width: 500px;
  height: 500px;
  border: 1px solid pink;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const sharedStyles = css`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${rgba('#1a132b', 0.5)};
  color: white;
  border: 0;
  font-size: 40px;
  outline: none;
  transition: opacity 0.35s;
  &:disabled {
    opacity: 0;
  }
`;

export const NextButton = styled(ButtonNext)`
  ${sharedStyles};
`;
export const BackButton = styled(ButtonBack)`
  ${sharedStyles};
`;
