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
  color: #f7f7f7;
  letter-spacing: 4px;

  @media ${device.mobileL} {
    font-size: 35px;
  }
  @media ${device.tablet} {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  @media ${device.laptopL} {
    font-size: 42px;
    font-weight: 400;
    margin-top: 30px;
  }
`;

export const Tooltip = styled.p`
  font-size: 11px;
  text-transform: uppercase;
  color: #f7f7f7;
  margin: 0;
  text-align: center;

  @media ${device.tablet} {
    font-size: 15px;
  }
`;

export const IconWrapper = styled.div`
  color: #000000;
  /* font-size: 14px; */
  margin-top: 16px;
  display: flex;
  ${Tooltip} {
    visibility: hidden;
  }
`;

export const TooltipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;
  width: 40px;

  @media ${device.mobileM} {
    width: 45px;
  }
  @media ${device.mobileL} {
    width: 50px;
  }

  @media ${device.tablet} {
    min-width: 55px;
    width: auto;
    &:hover {
      ${Tooltip} {
        visibility: visible;
      }
    }
  }
`;

export const Icons = styled.button`
  background-color: #ffffff;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 7px;
  border: none;
  outline: none;
  color: #242526;
  cursor: pointer;
  /* box-shadow: 0px 1px 0px 0px; */
  &:hover {
    color: #f7f7f7 !important;
    background-color: #242526;
    border: 1px solid #f7f7f7;
  }

  @media ${device.mobileM} {
    font-size: 18px;
  }

  @media ${device.mobileL} {
    padding: 5px 17px 0 17px;
  }
  @media ${device.tablet} {
    font-size: 34px;
    margin: 10px 0 5px 0;
  }
  @media ${device.laptop} {
    margin: 15px 0 5px 0;
  }
  @media ${device.laptopL} {
    font-size: 40px;
  }
`;
