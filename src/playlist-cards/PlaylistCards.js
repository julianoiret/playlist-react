import { Badges} from "./Badges";
import { PlaylistCardBack } from "./PlaylistCardBack";

import { Card, PlaylistCard, PlaylistCardImg, PlaylistCardInfo, PlaylistTitle, PlaylistDescription, PlaylistTotalTime } from "./playlistCards.style";
// import { playlistMap } from "../functions";

const PlaylistCards = ({data}) => {

    // function to sum the total time for each playlist
    let sumTime = (array) => {
        const total = array.reduce((acc, curr) => {
        acc += curr.time;
        return acc;  // always return the acc
}, 0);
// round up to 2 decimal
return Math.round(total * 100) / 100;
};

    return (
    <Card>
    {data.map((playlist) => {
        const { id, playlistName, description, genre, photo, musics } = playlist;
        return (
            <PlaylistCard key={id}>
                <PlaylistCardImg src={photo} alt={playlistName}></PlaylistCardImg>
                <PlaylistCardInfo>
                    <PlaylistTitle>{playlistName.toUpperCase()}</PlaylistTitle>
                    <PlaylistDescription>{description}</PlaylistDescription>
                    <PlaylistDescription>
                        <p>{sumTime(musics)}</p>
                        </PlaylistDescription>
                    <Badges genre={genre}></Badges>
                    <PlaylistCardBack musics={musics}></PlaylistCardBack>
                </PlaylistCardInfo>
            </PlaylistCard>
                
            )
        })}
    </Card>
    )
}

export default PlaylistCards;