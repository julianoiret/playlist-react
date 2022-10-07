import { PlaylistTitle } from "./playlistCards.style";

const PlaylistCards = ({data}) => {
//    const music = data.map((playlist) => {
//     const { playlistName } = playlist;
//     console.log(playlist)}
//     )






    return (
    <>
    {data.map((playlist) => {
        const { id, playlistName, description, genre } = playlist;
        return (
        <div>
        <PlaylistTitle>{id}</PlaylistTitle>
        <div>{playlistName}</div>
        <div>{description}</div>
        <div>{genre}</div>
        </div>
        )
    })}

    </>
    )
}

export default PlaylistCards;