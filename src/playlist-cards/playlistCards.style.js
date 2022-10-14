import styled, { css } from 'styled-components';

export const PlaylistCard = styled.div`
  display: inline-flex;
  /* background-color: transparent; */
  /* perspective: 1000px; */
`;

//div to add the flip element
// export const PlaylistCardFrontFlip = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// export const PlaylistCardFrontDetail = styled.div`
//   position: relative;
//   width: 700px;
//   height: 400px;
//   padding: 7px;
//   border: 2px solid red;
//   display: flex;
//   justify-content: space-evenly;
// `;

// export const PlaylistCardImg = styled.img`
//   width: 412px;
//   height: 400px;
//   display: block;
//   border: 1px solid pink;
// `;

// export const PlaylistCardImgCarou = styled.img`
//   width: 412px;
//   height: 400px;
//   display: block;
//   border: 1px solid pink;
// `;

// export const PlaylistCardInfo = styled.div`
//   // width: 500px;
//   width: 412px;
//   height: 400px;
//   border: 1px solid pink;
// `;

// export const PlaylistTitle = styled.h1`
//   font-family: 'Bungee Shade', cursive;
//   // font-family: 'Libre Barcode 39 Text', cursive;
//   font-size: 30px;
// `;

// export const PlaylistDescription = styled.p``;

export const PlaylistGenre = styled.div``;

export const GenreBadge = styled.p`
  border: 1px solid #515151;
  margin: 5px;
  padding: 5px;
  border-radius: 2px;
  display: inline-flex;
`;

// export const PlaylistTotalTime = styled.p`
//   display: flex;
//   align-items: center;
// `;

// export const PlaylistButton = styled.button`
//   font-family: 'Dosis', sans-serif;
//   text-transform: uppercase;
//   font-size: 16px;
//   letter-spacing: 2px;
//   cursor: pointer;
//   border: 3px solid #626262;
//   margin: 20px 0;
//   padding: 0.25em 0.5em;
//   box-shadow: 1px 1px 0px 0px #626262, 2px 2px 0px 0px #626262,
//     3px 3px 0px 0px #626262, 4px 4px 0px 0px #626262, 5px 5px 0px 0px #626262;
// `;

// PLAYLISTCARD BACK

export const PlaylistCardBackDetailFlip = styled.div`
  width: 100%;
  height: 100%;
`;

export const PlaylistCardBackDetail = styled.div`
  // width: 100%;
  // height: 100%;
  // position: relative;
  width: 700px;
  height: 400px;
  border: 1px solid yellow;
//  display: flex;
  // align-items: center;
  color: #b1b1b1;
  // padding: 7px;
`;

export const PlayIcon = styled.div``;

export const SectionWrapper = styled.div``;

export const SectionDetail = styled.div`
  // display: flex;
  // width: 400px;
  // :nth-child(2) {
  //   justify-content: space-between;
  // }
`;

export const Link = styled.a`
  color: #b1b1b1;
  font-size: 30px;
`;

export const PlaylistDetailText = styled.p`
  border: 1px solid green;
  // margin: 0 10px;
`;

export const TestBack = styled.div`
width: 100%;
border: 1px solid orange;
display: inline-flex;
`;

// created it to test flip card animation, have to fix it.

// export const PlaylistCardInner = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   transition: transform 1s;
//   transform-style: preserve-3d;
// `;

// PLAYLISTCARD FRONT
//test flip
// export const PlaylistCardFrontsFlip = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   transform-style: preserve-3d;
//   -webkit-backface-visibility: hidden;
//   backface-visibility: hidden;
// `;

//test flip
// export const PlaylistCardBackDetailFlip = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   transform-style: preserve-3d;
//   -webkit-backface-visibility: hidden;
//   backface-visibility: hidden;
//   transform: rotateY(180deg);
// `;
