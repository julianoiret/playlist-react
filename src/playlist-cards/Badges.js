import { GenreBadge, PlaylistGenre } from "./playlistCards.style"

export const Badges = ({genre}) => {
    return (
        <PlaylistGenre>
            {genre.map((genreBadge) => {
                return (
                    <GenreBadge>{genreBadge}</GenreBadge>
                )
            })}
        </PlaylistGenre>
    )
}