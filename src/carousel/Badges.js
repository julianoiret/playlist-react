import { GenreBadge, PlaylistGenre } from "./carousel.style"


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