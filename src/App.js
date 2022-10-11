import { useState } from 'react';
import Header from './header/Header';
import PlaylistCards from './playlist-cards/PlaylistCards';
import Footer from './footer/Footer';
import playlistData from './data';
import './index.css';
import { iconsStyle } from './header/header.style';


function App() {

const [data, setData] = useState(playlistData);

  return (
    <div>
      <Header/>
      <PlaylistCards data={data}/>
      <Footer/>
    </div>
  );
}

export default App;
