import { GenreBadge, PlaylistGenre } from "./playlistCards.style"

export const Badges = ({genre}) => {
    return (
        <PlaylistGenre>
            {genre.map((genreBadge, index) => {
                return (
                    <GenreBadge key={index}>{genreBadge}</GenreBadge>
                )
            })}
        </PlaylistGenre>
    )
}