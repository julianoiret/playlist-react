import styled from 'styled-components';
import { device } from '../devices';

export const CarouselContainer = styled.div`
  height: 125vh;
  display: flex;
  justify-content: center;
  @media ${device.mobileM} {
    height: 105vh;
  }
  @media ${device.mobileL} {
    height: 115vh;
  }

  @media ${device.tablet} {
    height: 60vh;
  }
  @media ${device.laptop} {
    height: 100vh;
  }
  @media ${device.laptopL} {
    height: 80vh;
  }
`;
export const PlaylistSection = styled.div`
  // TODO: reset width for responsive design
  width: 90vw;
  max-width: 310px;
  /* must have to have a height for the container */
  height: 800px;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  position: relative;
  overflow: hidden;
  background-color: ${prop => prop.theme.carouselAndFooter};

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
    height: 560px;
  }
  @media ${device.laptop} {
    width: 80vw;
    max-width: 1000px;
    height: 580px;
  }
  @media ${device.laptopL} {
    width: 80vw;
    max-width: 1000px;
  }
`;

export const MainWrapper = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* to hide the slide rolling behind the scene */
  opacity: 0;
  /* TODO set a correct transition  */
  transition: all 0.8s linear;
  &.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  // hide to the left
  &.lastSlide {
    transform: translateX(-150%);
  }
  // hide to the right
  &.nextSlide {
    transform: translateX(150%);
  }
`;

export const FlipCard = styled.div`
 &.hidden {
  display: none;
}
`;

export const ImgVector = styled.img`
  position: absolute;
  bottom: 0;
  right: 5px;
  width: 150px;

  @media ${device.laptop} {
    width: auto;
    bottom: -120px;
    right: 5px;
    transition: 0.5s ease;
    transform: translate(0);
  }
`;

export const PlaylistCardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.laptop} {
    height: 547px;
    ${ImgVector} {
      visibility: hidden;
    }
    &:hover {
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
  margin: 0 auto;

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
  // if we want to align this div vertically
  align-self: center;

  @media ${device.mobileM} {
    width: 320px;
    height: 350px;
  }
  @media ${device.mobileL} {
    width: 350px;
    height: 350px;
  }
  @media ${device.tablet} {
    width: 340px;
    height: 350px;
    padding-right: 5px;
  }
  @media ${device.laptop} {
    width: 400px;
    height: 370px;
    padding-bottom: 50px;
    padding-right: 25px;
  }
`;

export const PlaylistTitle = styled.h1`
  font-family: 'Bungee Shade', cursive;
  font-size: 22px;
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

export const PlaylistLogos = styled.div`
  display: flex;
  align-items: center;
`;

export const YoutubeLink = styled.a`
  color: #b1b1b1;
  padding-left: 5px;
`;

export const SpotifyLink = styled.a`
  color: #b1b1b1;
  padding-left: 15px;
`;

export const PlaylistButton = styled.button`
  font-family: 'Dosis', sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  color: ${prop => prop.theme.detailButton};
  background-color: ${prop => prop.theme.bgDetailButton};
  cursor: pointer;
  border: 3px solid #626262;
  margin: 20px 0 20px 20px;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px #626262, 2px 2px 0px 0px #626262,
    3px 3px 0px 0px #626262, 4px 4px 0px 0px #626262, 5px 5px 0px 0px #626262;
  &:hover {
    font-weight: 500;
    color: ${prop => prop.theme.hoverDetailButton};
    background-color: ${prop => prop.theme.bgHoverDetailButton};
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
  bottom: 15px;
  right: 20px;
  &:hover {
    font-weight: 600;
    color: #000000;
    background-color: #ffffff;
  }
  @media ${device.tablet} {
    position: absolute;
    top: 20px;
    bottom: inherit;
    right: 20px;
  }
`;

export const PlaylistCardBack = styled.div`
  margin-top: 0px;
`;

export const PlaylistCardDetail = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  grid-template-columns: 40px 25px 230px;
  grid-template-rows: 15px 15px;
  column-gap: 10px;
  row-gap: 5px;
  font-size: 13px;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 45px;
  &:hover {
    color: #3f3e3e;
    background-color: #e2dddc;
  }

  @media ${device.tablet} {
    height: 35px;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 16px;
    padding-bottom: 0;
  }
`;

export const PlaylistLink = styled.a`
  color: #b1b1b1;
  font-size: 30px;
  height: 30px;
  padding-right: 20px;
  padding-left: 10px;
  align-self: stretch;
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 2;

  @media ${device.tablet} {
    font-size: 30px;
    padding-right: 20px;
    min-width: 10px;
  }
  @media ${device.laptop} {
    min-width: 10px;
    padding-left: 15px;
    padding-right: 30px;
  }
`;

export const TrackNumber = styled.p`
  grid-column: 2;
  grid-row: 1;

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
  @media ${device.tablet} {
    min-width: 210px;
  }
  @media ${device.laptop} {
    min-width: 300px;
  }
`;

export const TrackTitle = styled.p`
  grid-column: 3;
  grid-row: 2;

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

  @media ${device.tablet} {
    min-width: 35px;
  }
  @media ${device.laptop} {
    min-width: 50px;
  }
`;
