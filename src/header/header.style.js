import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  // background-color: red;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 500;
  color: #F7F7F7;
  letter-spacing: 4px;
  // border: 1px solid black;
  margin-top: 40px;
`;

export const IconWrapper = styled.div`
  color: #000000;
  font-size: 35px;
  display: flex;

`;

export const Icons = styled.p`
background-color: #FFFFFF;
  padding: 5px 17px 0 17px;
  border-radius: 5px;
  margin-right: 9px;
  cursor: pointer;
&:hover {
  color: #F7F7F7 !important;
  background-color: #242526;
  border: 1px solid #F7F7F7;
}
`;