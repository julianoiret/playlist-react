// import { render, screen } from '@testing-library/react';
// import Carousel from './carousel';

// describe("Playlist card", () => {
//     const mockPlaylistData = {
//         id: "0",
//         playlistName: 'Best Of Moby',
//         genre: ['electro', 'downtempo', 'ambient', 'techno'],
//         description: 'One of the most important electronic dance music figures of the 90s. With more than 20 albums released, it wasn t easy to choose. This playlist deserves much more tracks!',
//         totalTime: '49.77 minutes',
//         youtube: 'https://www.youtube.com/watch?v=QhZnEagfjTQ&list=PLGcMNmVTewK-SxM3q1HtZFyJm29In7Xjq',
//         musics: [
//             {
//                 track: 1,
//                 artist: 'Moby',
//                 title: 'Porcelain',
//                 time: 4.06,
//                 link: 'https://www.youtube.com/watch?v=QhZnEagfjTQ', 
//             },
//         ],
//     }
   
//     it("should render playlist title", () => {
//         const { getByText } = render(<Carousel data={mockPlaylistData} />); 
//         expect(screen.getByText('Best Of Moby')).toBeInTheDocument();
//     })
// });

