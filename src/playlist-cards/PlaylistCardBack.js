import { Link, PlaylistDetail, PlaylistDetailText, SectionDetail, PlayIcon, SectionWrapper } from "./playlistCards.style";
import { BiCaretRightCircle } from 'react-icons/bi';


export const PlaylistCardBack = ({musics}) => {
    return (
        musics.map((music) => {
            const { track, artist, title, time, link } = music;
            return (
                <PlaylistDetail key={track}>
                        <PlayIcon>
                            <Link href={link} target='_blank' rel="noreferrer"><BiCaretRightCircle /></Link>
                        </PlayIcon>
                        <SectionWrapper>
                            <SectionDetail>
                                <PlaylistDetailText>{track}.</PlaylistDetailText>
                                <PlaylistDetailText>{artist}</PlaylistDetailText>
                        </SectionDetail>
                        <SectionDetail>
                            <PlaylistDetailText>{title}</PlaylistDetailText>
                            <PlaylistDetailText>{time}</PlaylistDetailText>
                        </SectionDetail>
                        </SectionWrapper>
                </PlaylistDetail>
            )
        })
    )
}