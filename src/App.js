import { useState } from 'react';
import Header from './header/Header';
import PlaylistCards from './playlist-cards/PlaylistCards';
import Carousel from './carou/carou';
import Footer from './footer/Footer';
import playlistData from './data';
import Caroussel from './carousel-test/carousel';
import './index.css';
import { iconsStyle } from './header/header.style';

function App() {
  const [data, setData] = useState(playlistData);

  return (
    <div>
      <Header />
      {/* <PlaylistCards data={data} /> */}
      <Caroussel data={data} />
      {/* <Carousel data={data} /> */}

      <Footer />
    </div>
  );
}

export default App;
