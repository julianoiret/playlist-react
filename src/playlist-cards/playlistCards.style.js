import styled from 'styled-components';

export const Card = styled.div`
`;

// PLAYLISTCARD FRONT

export const PlaylistCard = styled.div`
border: 2px solid red;
// color: #B1B1B1;
display: flex;
justify-content: space-between;
width: 75%;
margin: 20px auto;
`;

export const PlaylistCardImg = styled.img`
width: 500px;
height: 500px;
`;

export const PlaylistCardInfo = styled.div`
width: 500px;
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

export const PlaylistDetail = styled.div`
border: 1px solid yellow;
display: flex;
align-items: center;
color: #B1B1B1;
padding: 7px;
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
