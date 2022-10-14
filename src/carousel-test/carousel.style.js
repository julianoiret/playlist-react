import styled from 'styled-components';

export const CarousselContainer = styled.div`
  // width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CarousselSection = styled.div`
  // margin: 0 auto;
  // TODO: reset width for responsive design
  width: 80vw;
  max-width: 1000px;
  /* must have to have a height for the container */
  height: 550px;
  border: 2px solid green;
  position: relative;
  /* delete overflow and add more translate to move our arrow next prev button */
  overflow: hidden;
`;

export const PlaylistCardCarousel = styled.div``;

export const FlipCarou = styled.div``;

export const Front = styled.div`
  display: flex;
  justify-content: space-evenly;
  // display: none;
`;

export const PlaylistCardImgCarou = styled.img`
  width: 500px;
  height: 550px;
  border: 1px solid pink;
  object-fit: cover;
`;

export const PlaylistCardInfoCarou = styled.div`
  width: 400px;
  height: 350px;
  border: 1px solid pink;
  // if we want to align this div vertically
  align-self: center;
`;

export const PlaylistTitleCarou = styled.h1`
  font-family: 'Bungee Shade', cursive;
  // font-family: 'Libre Barcode 39 Text', cursive;
  font-size: 30px;
  // if trouble with title set display inline
  // display: inline;
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

export const PlaylistBackBanner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BackButton = styled.div`
  font-family: 'Dosis', sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
  border: 3px solid #626262;
  margin: 0;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px #626262, 2px 2px 0px 0px #626262,
    3px 3px 0px 0px #626262, 4px 4px 0px 0px #626262, 5px 5px 0px 0px #626262;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Back = styled.div`
  border: solid 1px orange;
  margin-top: 30px;
`;

export const PlaylistCardBackDetailCarou = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid purple;
  height: 35px;
`;

export const LinkCarou = styled.a`
  color: #b1b1b1;
  font-size: 30px;
  padding-right: 30px;
  min-width: 10px;
  border: 1px solid grey;
`;
