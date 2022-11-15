/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import Carousel from './carousel';

describe("Playlist card", () => {
    const mockPlaylistData = [
        {
        id: 1,
        playlistName: 'Best Of Moby',
        genre: ['electro', 'downtempo', 'ambient', 'techno'],
        description: 'playlist description',
        totalTime: '49.77 minutes',
        youtube: 'https://www.youtube.com/watch?v=QhZnEagfjTQ&list=PLGcMNmVTewK-SxM3q1HtZFyJm29In7Xjq',
        spotify: 'https://open.spotify.com/playlist/7CNzWXkrPDzB7ectrVywog',
        musics: [
            {
                track: 1,
                artist: 'Moby',
                title: 'Porcelain',
                time: 4.06,
                link: 'https://www.youtube.com/watch?v=QhZnEagfjTQ', 
            },
        ],
    }
    ];
   
    it("should render playlist title", () => {
        const { getAllByText } = render(<Carousel data={mockPlaylistData} />);
        expect(getAllByText("Best Of Moby")).toBeTruthy();
    });

    it("should render playlist description", () => {
        const { getAllByText } = render(<Carousel data={mockPlaylistData} />);
        expect(getAllByText("playlist description")).toBeTruthy();
    });

    it("should display detail button", () => {
        const { getByRole } = render(<Carousel data={mockPlaylistData} />);
        expect(getByRole("button", { name: /detail/i })).toBeInTheDocument();
    });
});

