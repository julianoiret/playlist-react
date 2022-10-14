// import {
//   Link,
//   PlaylistCardBackDetail,
//   PlaylistDetailText,
//   SectionDetail,
//   PlayIcon,
//   SectionWrapper,
//   TestBack,
//   PlaylistCardBackDetailFlip,
// } from './playlistCards.style';
// import { BiCaretRightCircle } from 'react-icons/bi';

// export const PlaylistCardBack = ({ musics, flip, setFlip }) => {
//   return musics.map((music) => {
//     const { track, artist, title, time, link } = music;
//     return (
//       <PlaylistCardBackDetailFlip className={!flip ? 'hidden' : ''}>
//         <PlaylistCardBackDetail key={track}>
//             <TestBack>
//           <PlayIcon>
//             <Link href={link} target='_blank' rel='noreferrer'>
//               <BiCaretRightCircle />
//             </Link>
//           </PlayIcon>
//           {/* <SectionWrapper> */}
//             {/* <SectionDetail> */}
//               <PlaylistDetailText>{track}.</PlaylistDetailText>
//               <PlaylistDetailText>{artist}</PlaylistDetailText>
//             {/* </SectionDetail>
//             <SectionDetail> */}
//               <PlaylistDetailText>{title}</PlaylistDetailText>
//               <PlaylistDetailText>{time}</PlaylistDetailText>
//             {/* </SectionDetail> */}
//           {/* </SectionWrapper> */}
//           </TestBack>
//         </PlaylistCardBackDetail>
//       </PlaylistCardBackDetailFlip>
//     );
//   });
// };
