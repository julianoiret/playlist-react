import { GenreBadge, PlaylistGenre } from "./Carousell.style"


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