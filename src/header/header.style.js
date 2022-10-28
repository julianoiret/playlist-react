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
    margin-top: 40px;
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
  @media ${device.laptopL} {
    font-size: 40px;
  }
`;

export const Icons = styled.p`
  background-color: #ffffff;
  padding: 4px 15px 0 15px;
  border-radius: 5px;
  margin-right: 7px;
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
  @media ${device.laptopL} {
    margin-right: 20px;
  }
`;
