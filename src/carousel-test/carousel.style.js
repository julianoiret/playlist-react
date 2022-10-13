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
  height: 500px;
  // height: 100%;
  max-width: 800px;
  border: 2px solid green;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
`;
export const CarousselCard = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  // width: 80vw;
  width: 100%;
  /* must have to have a height for the container */
  height: 500px;
  // height: 100%;
  max-width: 800px;
  border: 2px solid red;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
`;

export const PlaylistCardImgCarou = styled.img`
  width: 500px;
  height: 500px;
  border: 1px solid pink;
`;

export const PlaylistCardInfoCarou = styled.div`
  // width: 500px;
  width: 412px;
  height: 400px;
  border: 1px solid pink;
`;

export const PlaylistTitleCarou = styled.h1`
  font-family: 'Bungee Shade', cursive;
  // font-family: 'Libre Barcode 39 Text', cursive;
  font-size: 30px;
`;

export const PlaylistDescriptionCarou = styled.p``;

export const PlaylistGenreCarou = styled.div``;

export const GenreBadgeCarou = styled.p`
  border: 1px solid #515151;
  margin: 5px;
  padding: 5px;
  border-radius: 2px;
  display: inline-flex;
`;

export const PlaylistTotalTimeCarou = styled.p`
  display: flex;
  align-items: center;
`;

export const PlaylistButtonCarou = styled.button`
  font-family: 'Dosis', sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
  border: 3px solid #626262;
  margin: 20px 0;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px #626262, 2px 2px 0px 0px #626262,
    3px 3px 0px 0px #626262, 4px 4px 0px 0px #626262, 5px 5px 0px 0px #626262;
`;
