import { Badges } from "./Badges";
import { PlaylistCard, PlaylistTitle, PlaylistDescription, PlaylistTotalTime, PlaylistCardBack } from "./playlistCards.style";
// import { playlistMap } from "../functions";

const PlaylistCards = ({data}) => {

    return (
    <>
    {data.map((playlist) => {
        const { id, playlistName, description, genre, totalTime, photo, musics } = playlist;
        return (
            <PlaylistCard key={id}>
                <PlaylistTitle>{playlistName}</PlaylistTitle>
                <Badges genre={genre}></Badges>
                <PlaylistDescription>{description}</PlaylistDescription>
                <PlaylistTotalTime>{description}</PlaylistTotalTime>
                </PlaylistCard>
                
            )
        })}
        {data.map((detail) => {
            console.log(detail.musics);
            return (
                <PlaylistCardBack>
                <div></div>
                <div></div>
                </PlaylistCardBack>
            )
        })}
    </>
    )
}

export default PlaylistCards;