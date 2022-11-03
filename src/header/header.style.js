import styled from 'styled-components';
import { device } from '../devices';

export const HeaderWrapper = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  @media ${device.mobileL} {
    height: 200px;
    margin-bottom: 20px;
  }
  @media ${device.tablet} {
    height: 220px;
  }
  @media ${device.laptop} {
    height: 250px;
    margin-bottom: 50px;
  }
  @media ${device.laptopL} {
    height: 220px;
  }
`;

export const HeaderTitle = styled.div`
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 300;
  color: #F7F7F7;
  letter-spacing: 4px;
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
    font-weight: 400;
    margin-top: 30px;
  }
`;

export const Tooltip = styled.p`
  font-size: 11px;
  text-transform: uppercase;
  color: #F7F7F7;
  margin: 0;
  text-align: center;

  @media ${device.tablet} {
    font-size: 15px;
  }
`;

export const IconWrapper = styled.div`
  color: #000000;
  font-size: 14px;
  display: flex;
  ${Tooltip} {
    visibility: hidden;
  }

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

export const TooltipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;

  @media ${device.tablet} {
    &:hover {
      ${Tooltip} {
        visibility: visible;
      }
    }
  }
`;

// TODO: change p for button
export const Icons = styled.p`
  background-color: #FFFFFF;
  padding: 5px 12px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: #F7F7F7 !important;
    background-color: #242526;
    border: 1px solid #F7F7F7;
  }

  @media ${device.mobileL} {
    padding: 5px 17px 0 17px;
  }
  @media ${device.tablet} {
    margin: 15px 0 5px 0;
  }
  @media ${device.laptop} {
    margin: 15px 0 5px 0;
    width: 35px;
  }
  @media ${device.laptopL} {
    width: 40px;
  }
`;
