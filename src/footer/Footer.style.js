import styled from 'styled-components';

export const FooterSection = styled.div`
  background-color: #2B2B2B;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`;

export const IconsHanard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.p`
  font-size: 20px;
  padding: 0 5px;
  margin: 2px;
  &:nth-child(2) {
    padding-bottom: 3px;
  }
`;
