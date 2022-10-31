import styled from 'styled-components';
import { device } from '../devices';

export const HeaderWrapper = styled.div`
  // background-color: red;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  @media ${device.tablet} {
    height: 200px;
    margin-bottom: 0;
  }
  @media ${device.laptop} {
    height: 240px;
    margin-bottom: 20px;
  }
  @media ${device.laptopL} {
    height: 200px;
    margin-bottom: 0;
  }
`;

export const HeaderTitle = styled.div`
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 500;
  color: #f7f7f7;
  letter-spacing: 4px;
  // border: 1px solid black;
  margin-top: 10px;

  @media ${device.mobileL} {
    font-size: 35px;
  }
  @media ${device.tablet} {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  @media ${device.laptopL} {
    font-size: 40px;
    font-weight: 600;
  }
`;

export const IconWrapper = styled.div`
  color: #000000;
  font-size: 14px;
  display: flex;

  @media ${device.mobileM} {
    font-size: 18px;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
  @media ${device.tablet} {
    font-size: 35px;
  }
  @media ${device.laptop} {
    /* height: 110px; */
  }
  @media ${device.laptopL} {
    font-size: 40px;
  }
`;

export const Icons = styled.p`
  background-color: #ffffff;

  padding: 4px 15px 0 15px;
  border-radius: 5px;
  margin-right: 7px;
  width: 35px;
  cursor: pointer;
  &:hover {
    color: #f7f7f7 !important;
    background-color: #242526;
    border: 1px solid #f7f7f7;
  }

  @media ${device.mobileL} {
    padding: 5px 17px 0 17px;
    margin-right: 9px;
  }
  @media ${device.laptop} {
    margin: 15px 9px 15px 0;
  }
  @media ${device.laptopL} {
    margin-right: 20px;
    width: 40px;
  }
`;

export const TooltipWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-top: 0;
`;

export const Tooltip = styled.div`
  visibility: hidden;
  /* display: none; */
  /* top: 0;
  left: 0; */
  background-color: #ffffff;
  width: 68px;
  height: 20px;
  color: #000000;
  padding: 2px 1px;
  font-weight: 600;
  z-index: 15;
  /* padding: 5px 17px 0 17px; */
  border-radius: 5px;
  margin-right: 8px;
  /* position: absolute; */
  text-align: center;
  transition: all 3s;

  ${Icons}:hover & {
    visibility: visible;
    /* display: block; */
    /* position: absolute; */
    background-color: blue;
  }

  @media ${device.laptopL} {
    /* margin: 15px 9px 15px 0; */
    width: 72px;
    margin-right: 20px;
  }
`;
