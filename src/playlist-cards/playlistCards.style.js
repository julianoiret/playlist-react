import styled from 'styled-components';





export const PlaylistCard = styled.div`
width: 75%;
margin: 20px auto;

// border: 2px solid red;
// // color: #B1B1B1;
`;


// PLAYLISTCARD FRONT
export const PlaylistCardFronts = styled.div`
width:100%;
height:100%;
border: 2px solid red;
// color: #B1B1B1;
display: flex;
justify-content: space-evenly;
`;

export const PlaylistCardImg = styled.img`
width: 500px;
height: 500px;
border: 1px solid pink;
`;

export const PlaylistCardInfo = styled.div`
width: 500px;
border: 1px solid pink;
`;

export const PlaylistTitle = styled.h1`
// font-family: 'Bungee Shade', cursive;
font-family: 'Libre Barcode 39 Text', cursive;
font-size: 50px;
`;

export const PlaylistDescription = styled.p`
`;

export const PlaylistGenre = styled.div`
`;

export const GenreBadge = styled.p`
border: 1px solid #515151;
margin: 5px;
padding: 5px;
border-radius: 2px;
display: inline-flex;
`

export const PlaylistTotalTime = styled.p`
  display: flex;
  align-items: center;
`;

export const PlaylistButton = styled.button`
  font-family: 'Dosis', sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
  border: 3px solid #626262;
  margin: 20px 0;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px #626262, 2px 2px 0px 0px #626262, 3px 3px 0px 0px #626262, 4px 4px 0px 0px #626262, 5px 5px 0px 0px #626262;


`

// PLAYLISTCARD BACK

export const PlaylistCardBackDetail = styled.div`
width:100%;
height:100%;
border: 1px solid yellow;
display: flex;
align-items: center;
color: #B1B1B1;
// padding: 7px;
`;

export const PlayIcon = styled.div`
`;

export const SectionWrapper = styled.div`
`;

export const SectionDetail = styled.div`
display: flex;
width: 400px;
:nth-child(2) {
    justify-content: space-between;
}
`

export const Link = styled.a`
color: #B1B1B1;
font-size: 30px;
`;

export const PlaylistDetailText = styled.p`
border: 1px solid green;
margin: 0 10px;
`;
