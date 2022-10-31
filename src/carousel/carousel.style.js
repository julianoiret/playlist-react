import styled from 'styled-components';
import { device } from '../devices';

export const CarouselContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    height: 90vh;
  }
`;
export const PlaylistSection = styled.div`
  // TODO: reset width for responsive design
  width: 90vw;
  max-width: 310px;
  /* must have to have a height for the container */
  height: 700px;
  // border: 2px solid green;
  border-radius: 20px;
  // box-shadow: 0 0 20px 8px #5E5C5C;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  position: relative;
  /* delete overflow and add more translate to move our arrow next prev button */
  overflow: hidden;

  @media ${device.mobileM} {
    width: 90vw;
    max-width: 370px;
  }
  @media ${device.mobileL} {
    width: 85vw;
    max-width: 420px;
  }
  @media ${device.tablet} {
    width: 90vw;
    max-width: 750px;
    height: 450px;
  }
  @media ${device.laptop} {
    width: 80vw;
    max-width: 1000px;
    height: 550px;
  }
  @media ${device.laptopL} {
    width: 80vw;
    max-width: 1000px;
  }
`;

export const FlipCard = styled.div``;

export const ImgVector = styled.img`
position: absolute;
bottom: 0;
right: 5px;
width: 150px;

@media ${device.laptop} {
  width: auto;
  bottom: -120px;
  right: 5px;
  transition: .5s ease;
  transform: translate(0);
`;

export const PlaylistCardFront = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
// border: 1px solid pink;
}

@media ${device.tablet} {
  flex-direction: row;
}

@media ${device.laptop} {
  height: 547px;
  ${ImgVector} {
    visibility: hidden;
  }
  &:hover  {
    ${ImgVector} {
      visibility: visible;
      transform: translate(-10%, -120px);
    }
  }
}
`;

export const PlaylistCardImg = styled.img`
  width: 290px;
  height: 295px;
  // border: 1px solid pink;

  @media ${device.mobileM} {
    width: 350px;
    height: 355px;
  }
  @media ${device.mobileL} {
    width: 370px;
    height: 375px;
  }
  @media ${device.tablet} {
    width: 390px;
    height: 395px;
  }
  @media ${device.laptop} {
    width: 515px;
    height: 520px;
  }
`;

export const PlaylistCardInfo = styled.div`
  width: 280px;
  height: 300px;
  // border: 1px solid orange;
  // if we want to align this div vertically
  align-self: center;

  @media ${device.mobileM} {
    width: 340px;
    height: 350px;
  }
  @media ${device.mobileL} {
    width: 360px;
    height: 350px;
  }
  @media ${device.tablet} {
    width: 340px;
    height: 350px;
  }
  @media ${device.laptop} {
    width: 400px;
    height: 350px;
  }
`;

export const PlaylistTitle = styled.h1`
  font-family: 'Bungee Shade', cursive;
  // font-family: 'Libre Barcode 39 Text', cursive;
  font-size: 22px;
  // if trouble with title set display inline
  // display: inline;
  @media ${device.mobileL} {
    font-size: 25px;
  }
  @media ${device.laptop} {
    font-size: 30px;
  }
`;

export const PlaylistDescription = styled.p``;

export const PlaylistGenre = styled.div``;

export const GenreBadge = styled.p`
  border: 1px solid #515151;
  margin: 4px;
  padding: 4px;
  border-radius: 2px;
  display: inline-flex;

  @media ${device.mobileL} {
    margin: 4px;
    padding: 5px;
  }
  @media ${device.laptop} {
    margin: 5px;
    padding: 5px;
  }
`;

export const PlaylistTotalTime = styled.p`
  display: flex;
  align-items: center;
`;

export const PlaylistButton = styled.button`
  font-family: 'Dosis', sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  border: 3px solid #626262;
  margin: 20px 0 20px 20px;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px #626262, 2px 2px 0px 0px #626262,
    3px 3px 0px 0px #626262, 4px 4px 0px 0px #626262, 5px 5px 0px 0px #626262;
    &:hover {
      font-weight: 500;
      color: #FFFFFF;
      background-color: #000000;
    }

  @media ${device.mobileL} {
    font-size: 15px;
    margin: 20px 0;
  }
  @media ${device.mobileL} {
    font-size: 15px;
    margin: 20px 0 20px 20px;
  }
  @media ${device.laptop} {
    font-size: 16px;
    margin: 20px 0;
  }
`;

export const PlaylistBackBanner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;

  /* @media ${device.tablet} {
    justify-content: space-between;
  } */
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
  top: 20px;
  right: 20px;
  &:hover {
    font-weight: 600;
    color: #000000;
    background-color: #FFFFFF;
  }
`;

export const PlaylistCardBack = styled.div`
  // border: solid 1px orange;
  margin-top: 15px;
`;

export const PlaylistCardDetail = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 30px 25px 250px;
  grid-template-rows: 15px 15px;
  column-gap: 10px;
  row-gap: 5px;
  font-size: 13px;
  /* flex-wrap: wrap; */
  /* justify-content: start;
  align-items: center; */
  // border: 1px solid purple;
  height: 45px;
  &:hover {
    color: #3F3E3E;
    background-color: #E2DDDC;
  }

  @media ${device.tablet} {
    height: 35px;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 16px;
  }
  /* @media ${device.laptop} {
  } */
`;

export const PlaylistLink = styled.a`
  color: #B1B1B1;
  font-size: 30px;
  height: 30px;
  padding-left: 10px;
  // border: 1px solid grey;
  align-self: stretch;
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 2;

  @media ${device.tablet} {
    font-size: 30px;
    padding-right: 30px;
    min-width: 10px;
  }
  @media ${device.laptop} {
    min-width: 10px;
    padding-left: 15px;
  } 
`;

export const TrackNumber = styled.p`
  grid-column: 2;
  grid-row: 1;
  // border: 1px solid grey;

  @media ${device.tablet} {
    min-width: 30px;
    font-size: 16px;
  }
  @media ${device.laptop} {
    min-width: 50px;
  }
`;

export const TrackArtist = styled.p`
  grid-column: 3;
  grid-row: 1;
  /* min-width: 100px; */
  // border: 1px solid grey;
  @media ${device.tablet} {
    min-width: 250px;
  }
  @media ${device.laptop} {
    min-width: 300px;
  }
`;

export const TrackTitle = styled.p`
  grid-column: 3;
  grid-row: 2;
  /* min-width: 100px; */
  // border: 1px solid grey;

  @media ${device.tablet} {
    min-width: 300px;
  }
  @media ${device.laptop} {
    min-width: 400px;
  }
`;

export const TrackTime = styled.p`
  grid-column: 2;
  grid-row: 2;
  /* min-width: 30px; */
  // border: 1px solid grey;

  @media ${device.tablet} {
    min-width: 35px;
  }
  @media ${device.laptop} {
    min-width: 50px;
  }
`;
