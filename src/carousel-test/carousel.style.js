import styled from 'styled-components';

export const CarousselContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CarousselSection = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 80vw;
  /* must have to have a height for the container */
  height: 450px;
  max-width: 800px;
  border: 2px solid red;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
`;
export const CarousselCard = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 80vw;
  /* must have to have a height for the container */
  height: 450px;
  max-width: 800px;
  border: 2px solid red;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
`;

export const PlaylistCardImg = styled.img`
  width: 500px;
  height: 500px;
  border: 1px solid pink;
`;

// export const PlaylistCardImg = styled.img`
//   width: 500px;
//   height: 500px;
//   border: 1px solid pink;
// `;
