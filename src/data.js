const playlistData = [
  {
    id: 1,
    playlistName: 'Ambient Lounge I',
    genre: ['ambient', 'lounge', 'chillout'],
    description: '',
    totalTime: '',
    photo: require('./asset/lounge-1-img.png'),
    musics: [
      {
        track: 1,
        artist: 'Five Seasons',
        title: 'Kiss The Sky',
        time: 4.48,
        link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
      },
      {
        track: 2,
        artist: 'Jens Buchert',
        title: 'Ground Vibrations',
        time: 4.56,
        link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
      },
      {
        track: 3,
        artist: 'Boards Of Canada',
        title: 'Macquarie Ridge',
        time: 4.57,
        link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
      },
      {
        track: 4,
        artist: 'Sweet Tooth',
        title: 'Walk With Me (Hiatus Remix)',
        time: 6.33,
        link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
      },
      {
        track: 5,
        artist: 'Marion',
        title: 'Future Beginning',
        time: 3.54,
        link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
      },
      {
        track: 6,
        artist: 'Kevin Paczesny',
        title: 'Awakening',
        time: 7.44,
        link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
      },
      {
        track: 7,
        artist: 'Oleg Byonic',
        title: 'Unforgettable Sunset (Forgotten)',
        time: 9.18,
        link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
      },
      {
        track: 8,
        artist: 'Parra For Cuva',
        title: 'Cloudline',
        time: 4.57,
        link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
      },
      {
        track: 9,
        artist: 'Tycho',
        title: 'Red Bridge',
        time: 4.01,
        link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
      },
      {
        track: 10,
        artist: 'Pensees',
        title: 'Lunamoth',
        time: 5.25,
        link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
      },
      {
        track: 11,
        artist: 'Nox Vahn feat. Mimi Page',
        title: 'Dream Of Love (Anjunadeep 11 Extended Mix)',
        time: 6.05,
        link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
      },
    ],
  },
  // {
  //   id: 2,
  //   playlistName: 'Ambient Lounge II',
  //   genre: ['ambient', 'lounge', 'chillout'],
  //   description: '',
  //   totalTime: '',
  //   photo: require('./asset/lounge-2-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Bonobo',
  //       title: 'Dinosaurs',
  //       time: 3.57,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 2,
  //       artist: 'Oleg Byonic',
  //       title: 'The Sting (Summer Mix)',
  //       time: 5.45,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 3,
  //       artist: 'Boards Of Canada',
  //       title: 'Tears From The Compound Eye - Remix',
  //       time: 4.03,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 4,
  //       artist: 'All India Radio',
  //       title: 'One Twenty Four AM',
  //       time: 3.04,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 5,
  //       artist: 'Lemongrass',
  //       title: 'Bonne Nuit',
  //       time: 4.10,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 6,
  //       artist: 'LeBuc',
  //       title: 'India',
  //       time: 5.11,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 7,
  //       artist: 'Chris Coco',
  //       title: 'Heavy Mellow (Jon Hopkins Remix)',
  //       time: 7.07,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 8,
  //       artist: 'Yppah',
  //       title: 'Soft Reset',
  //       time: 6.16,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 9,
  //       artist: 'Sobrenadar',
  //       title: 'Unn',
  //       time: 3.43,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 10,
  //       artist: 'Melorman',
  //       title: 'Love In The 90s',
  //       time: 3.28,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 11,
  //       artist: 'Jens Buchert',
  //       title: 'Dawnrider',
  //       time: 5.49,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   playlistName: 'Best Of Boards Of Canada',
  //   genre: ['IDM', 'downtempo', 'ambient', 'psychedelica', 'electronic'],
  //   description: '',
  //   totalTime: '',
  //   photo: require('./asset/boards-of-canada-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Boards Of Canada',
  //       title: 'Music Is Math',
  //       time: 5.22,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 2,
  //       artist: 'Boards Of Canada',
  //       title: 'An Eagle In Your Mind',
  //       time: 6.26,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 3,
  //       artist: 'Boards Of Canada',
  //       title: 'Everything You Do Is A Balloon',
  //       time: 7.00,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 4,
  //       artist: 'Boards Of Canada',
  //       title: 'Roygbiv',
  //       time: 2.32,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 5,
  //       artist: 'Boards Of Canada',
  //       title: 'Aquarius',
  //       time: 5.58,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 6,
  //       artist: 'Boards Of Canada',
  //       title: 'Happy Cycling',
  //       time: 2.47,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 7,
  //       artist: 'Boards Of Canada',
  //       title: 'Buckie High',
  //       time: 5.16,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 8,
  //       artist: 'Boards Of Canada',
  //       title: 'Left Side Drive',
  //       time: 5.21,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 9,
  //       artist: 'Boards Of Canada',
  //       title: 'Oscar See Through Red Eye',
  //       time: 5.09,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 10,
  //       artist: 'Boards Of Canada',
  //       title: 'Julie And Candy',
  //       time: 5.30,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 11,
  //       artist: 'Boards Of Canada',
  //       title: 'Oirectine',
  //       time: 5.11,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //     {
  //       track: 12,
  //       artist: 'Boards Of Canada',
  //       title: 'In A Beautiful Place Out In The Country',
  //       time: 5.30,
  //       link: 'https://www.youtube.com/watch?v=jcTejHJl2F0',
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   playlistName: 'Good Night',
  //   genre: ['ambient'],
  //   description: '',
  //   totalTime: '',
  //   photo: require('./asset/good-night-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Moby',
  //       title: 'The Lonely Night',
  //       time: 4.53,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Boards Of Canada',
  //       title: 'Peacock Tail',
  //       time: 5.25,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Aphex Twin',
  //       title: 'Stone In Focus',
  //       time: 10.06,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Moby',
  //       title: 'A Seated Night',
  //       time: 3.56,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Jon Hopkins',
  //       title: 'Fairytale',
  //       time: 4.53,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Christ',
  //       title: 'Stained Century',
  //       time: 5.35,
  //     },
  //     {
  //       track: 7,
  //       artist: 'Autechre',
  //       title: 'VLetrmx21',
  //       time: 8.24,
  //     },
  //     {
  //       track: 8,
  //       artist: 'Man Of No Ego',
  //       title: 'Harmony Of The Universe',
  //       time: 8.46,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Lauge',
  //       title: 'Himalaya',
  //       time: 7.00,
  //     },
  //     {
  //       track: 10,
  //       artist: 'Carbon Based Lifeform',
  //       title: 'Flytta Dig',
  //       time: 8.26,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Carbon Based Lifeform',
  //       title: 'Lost',
  //       time: 5.21,
  //     },
  //     {
  //       track: 12,
  //       artist: 'Leven Canyon',
  //       title: 'The Good Night Chorale',
  //       time: 7.23,
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   playlistName: 'Best Of Moby',
  //   genre: ["electronic", "downtempo", "ambient", "techno"],
  //   description: '',
  //   totalTime: '',
  //   photo: require('./asset/moby-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Moby',
  //       title: 'Porcelain',
  //       time: 4.01,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Moby',
  //       title: 'Mistake',
  //       time: 4.01,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Moby',
  //       title: 'The Last Day',
  //       time: 4.01,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Moby',
  //       title: 'In This World',
  //       time: 4.03,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Moby',
  //       title: 'Sevastopol',
  //       time: 4.23,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Moby',
  //       title: 'Signs Of Love',
  //       time: 4.28,
  //     },
  //     {
  //       track: 7,
  //       artist: 'Moby',
  //       title: 'One Of These Mornings',
  //       time: 3.15,
  //     },
  //     {
  //       track: 8,
  //       artist: 'Moby',
  //       title: 'In My Heart',
  //       time: 4.34,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Moby',
  //       title: 'Sunday (The Day Before My Birthday)',
  //       time: 5.10,
  //     },
  //     {
  //       track: 10,
  //       artist: 'Moby',
  //       title: 'Morningside',
  //       time: 5.31,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Moby',
  //       title: 'Why Does My Heart Feel So Bad',
  //       time: 3.51,
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   playlistName: 'IDM',
  //   genre: ['IDM'],
  //   description: 'One of the best idm tracks',
  //   totalTime: '',
  //   photo: require('./asset/idm-1-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Rone feat. Gaspar Claus',
  //       title: 'Freaks',
  //       time: 4.53,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Squarepusher',
  //       title: 'Planetarium',
  //       time: 6.10,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Tycho',
  //       title: 'Dictaphones Lament',
  //       time: 5.11,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Aphex Twin',
  //       title: 'Fork Rave',
  //       time: 4.08,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Ed Chamberlain',
  //       title: 'Styge',
  //       time: 6.13,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Rykard',
  //       title: 'Out Of The Orchid Way',
  //       time: 5.40,
  //     },
  //     {
  //       track: 7,
  //       artist: 'Solar Fields',
  //       title: 'Inherit Velocity',
  //       time: 2.40,
  //     },
  //     {
  //       track: 8,
  //       artist: 'Ochre',
  //       title: '111',
  //       time: 7.49,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Lone',
  //       title: 'Memory Pool',
  //       time: 3.24,
  //     },
  //     {
  //       track: 10,
  //       artist: 'Boards Of Canada',
  //       title: 'Telephasic Workshop',
  //       time: 6.35,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Plaid',
  //       title: 'Hawkmoth',
  //       time: 4.49,
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   playlistName: 'Best of Aphex Twin',
  //   genre: ['IDM', 'experimental', 'electronic', 'acid techno'],
  //   description: '',
  //   totalTime: '',
  //   photo: require('./asset/aphex-twin-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Aphex twin',
  //       title: 'Heliosphan',
  //       time: 4.54,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Aphex twin',
  //       title: 'Rhubarb',
  //       time: 7.44,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Aphex twin',
  //       title: 'Make A Baby',
  //       time: 2.32,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Aphex twin',
  //       title: 'Didgeridoo',
  //       time: 7.12,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Aphex twin',
  //       title: 'IZ-US',
  //       time: 2.58,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Aphex twin',
  //       title: 'Crying In Your Face',
  //       time: 4.30,
  //     },
  //     {
  //       track: 7,
  //       artist: 'Aphex twin',
  //       title: 'Pulsewidth',
  //       time: 3.48,
  //     },
  //     {
  //       track: 8,
  //       artist: 'Aphex twin',
  //       title: 'Hedphelym',
  //       time: 6.04,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Aphex twin',
  //       title: 'Ptolemy',
  //       time: 7.14,
  //     },
  //     {
  //       track: 10,
  //       artist: 'Aphex twin',
  //       title: 'Xtal',
  //       time: 4.55,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Aphex twin',
  //       title: '34.5 P.e',
  //       time: 7.20,
  //     },
  //     {
  //       track: 12,
  //       artist: 'Aphex twin',
  //       title: 'Larcheard',
  //       time: 2.17,
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   playlistName: 'Best Of Massive Attack',
  //   genre: ['trip hop', 'downtempo', 'electronic'],
  //   description: '',
  //   totalTime: '',
  //   photo: require('./asset/massive-attack-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Massive Attack',
  //       title: 'Teardrop',
  //       time: 5.31,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Massive Attack feat. Hope Sandoval',
  //       title: 'The Spoils',
  //       time: 6.19,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Massive Attack',
  //       title: 'Sly',
  //       time: 5.25,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Massive Attack',
  //       title: 'Silent Spring',
  //       time: 3.05,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Massive Attack',
  //       title: 'Joy Luck Club',
  //       time: 4.59,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Massive Attack',
  //       title: 'Atlas Air',
  //       time: 7.49,
  //     },
  //     {
  //       track: 7,
  //       artist: 'Massive Attack',
  //       title: 'Paradise Circus',
  //       time: 5.15,
  //     },
  //     {
  //       track: 8,
  //       artist: 'Massive Attack',
  //       title: 'Black Milk',
  //       time: 6.22,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Massive Attack',
  //       title: 'Exchange',
  //       time: 4.13,
  //     },
  //     {
  //       track: 10,
  //       artist: 'Massive Attack',
  //       title: 'Protection',
  //       time: 7.53,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Massive Attack',
  //       title: 'Unfinished Sympathy',
  //       time: 5.16,
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   playlistName: 'Ambient Chillout',
  //   genre: ['ambient', 'psybient', 'etchno-chillout'],
  //   description: '',
  //   totalTime: '',
  //   photo: require('./asset/chillout-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Argus',
  //       title: 'We Are One (Suduaya Remix)',
  //       time: 5.40,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Carbon Based Lifeforms',
  //       title: 'Vision (Revisited)',
  //       time: 3.28,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Aeon Waves',
  //       title: 'Voices',
  //       time: 5.54,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Solar Fields',
  //       title: 'A New Window',
  //       time: 9.36,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Carbon Based Lifeform',
  //       title: 'Derelicts',
  //       time: 6.17,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Lauge & Baba Gnohm',
  //       title: 'Hypnose',
  //       time: 8.01,
  //     },
  //     {
  //       track: 7,
  //       artist: 'Asura',
  //       title: 'Eternal Sunshine (Ambient Mix)',
  //       time: 6.54,
  //     },
  //     {
  //       track: 8,
  //       artist: 'Reasonandu & Adrian Enescu',
  //       title: 'Peaceful Heart (Dakini Version)',
  //       time: 6.25,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Solar Fields',
  //       title: 'Our Blue Stones',
  //       time: 6.43,
  //     },
  //     {
  //       track: 10,
  //       artist: 'Lauge & Baba Gnohm feat. Vonoom',
  //       title: 'Through Endless Ice Waters',
  //       time: 6.48,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Carbon Based Lifeform',
  //       title: 'Endospore (Remastered)',
  //       time: 5.04,
  //     },
  //     {
  //       track: 12,
  //       artist: 'Logical Element',
  //       title: 'Falling',
  //       time: 11.13,
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   playlistName: 'Lounge Cafe',
  //   genre: ['lounge', 'ambient', 'chillout'],
  //   description: '',
  //   totalTime: '',
  //   photo: require('./asset/lounge-cafe-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Five Seasons',
  //       title: 'Something In The Air',
  //       time: 4.50,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Eric Hilton',
  //       title: 'Continuum',
  //       time: 3.40,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Thievery Corporation feat. Herb Alpert',
  //       title: 'Lemon Tree',
  //       time: 3.36,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Chris Coco',
  //       title: 'Summer Sun',
  //       time: 3.52,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Air',
  //       title: 'Modular Mix',
  //       time: 5.45,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Mindseye',
  //       title: 'Summer Breeze',
  //       time: 3.26,
  //     },
  //     {
  //       track: 7,
  //       artist: 'Jens Buchert',
  //       title: 'Lichtwesen',
  //       time: 4.48,
  //     },
  //     {
  //       track: 8,
  //       artist: 'AIM',
  //       title: 'Cold Water Music',
  //       time: 5.45,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Der Waldlaufer',
  //       title: 'Water Moon',
  //       time: 5.28,
  //     },
  //     {
  //       track: 10,
  //       artist: 'Five Seasons',
  //       title: 'Love Apple (Lemongrass Wet Dreams Remix)',
  //       time: 3.51,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Shapeshifter',
  //       title: 'Summer Haze',
  //       time: 6.43,
  //     },
  //     {
  //       track: 12,
  //       artist: 'Nightmares On Wax',
  //       title: 'Les Nuits',
  //       time: 6.14,
  //     },
  //   ],
  // },
  // {
  //   id: 11,
  //   playlistName: 'Best Of Eitan Reiter',
  //   genre: ['electronic', 'psybient', 'progressive house', 'deep house', 'techno'],
  //   description: 'Israeli musician and producer',
  //   totalTime: '',
  //   photo: require('./asset/test-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Eitan Reiter & A Balter',
  //       title: 'Happy Fat Kids',
  //       time: 7.06,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Eitan Reiter',
  //       title: 'Pyramid',
  //       time: 8.20,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Eitan Reiter',
  //       title: 'Choices',
  //       time: 8.11,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Perfect Stranger',
  //       title: 'Stardust (Eitan Reiter Remix)',
  //       time: 9.31,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Eitan Reiter',
  //       title: 'The 1st (X Dream Remix)',
  //       time: 10.12,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Eitan Reiter',
  //       title: 'Ups And Downs (Perfect Stranger Re Edit',
  //       time: 11.15,
  //     },
  //     {
  //       track: 7,
  //       artist: 'Eitan Reiter',
  //       title: 'Eat You',
  //       time: 10.25,
  //     },
  //     {
  //       track: 8,
  //       artist: 'Eitan Reiter',
  //       title: 'First Steps Outdoor Sessions #3 / Give If Life',
  //       time: 8.06,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Eitan Reiter',
  //       title: 'Just Another Night Part 2',
  //       time: 4.09,
  //     },
  //     {
  //       track: 10,
  //       artist: 'A Batler',
  //       title: 'You re A Fish - Boom Festival 2016 (Eitan Reiter Remix)',
  //       time: 10.00,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Eitan Reiter',
  //       title: 'Midnight Glide',
  //       time: 7.36,
  //     },
  //     {
  //       track: 12,
  //       artist: 'Eitan Reiter & Audio Junkies',
  //       title: 'How Low - Boom Festival Edition',
  //       time: 6.00,
  //     },
  //   ],
  // },
  // {
  //   id: 12,
  //   playlistName: 'Relax',
  //   genre: ['ambient'],
  //   description: '',
  //   totalTime: '',
  //   photo: require('./asset/relax-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Feel',
  //       title: 'Der Waldlaufer',
  //       time: 5.08,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Moby',
  //       title: 'Memory Gospel',
  //       time: 6.42,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Boards Of Canada',
  //       title: 'Amo Bishop Roden',
  //       time: 6.19,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Hiatus',
  //       title: 'Becoming',
  //       time: 3.16,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Stellardrone',
  //       title: 'Eternity',
  //       time: 6.21,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Global Communication',
  //       title: 'Epsilon Phase',
  //       time: 11.00,
  //     },
  //     {
  //       track: 7,
  //       artist: 'EL LCD',
  //       title: 'Snö på Hisingen (Carbon Based Lifeform Remix)',
  //       time: 6.24,
  //     },
  //     {
  //       track: 8,
  //       artist: 'Der Waldlaufer & Lauge',
  //       title: 'Morgenfrisk',
  //       time: 3.11,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Der Waldlaufer',
  //       title: 'En Route',
  //       time: 5.22,
  //     },
  //     {
  //       track: 10,
  //       artist: 'Moby',
  //       title: 'JLTF',
  //       time: 4.40,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Roger Neill',
  //       title: 'Santa Barbara, 1979',
  //       time: 2.36,
  //     },
  //   ],
  // },
  // {
  //   id: 13,
  //   playlistName: 'Best Of Solar Fields',
  //   genre: ['electronic', 'ambient', 'psybient', 'progressive trance'],
  //   description: '',
  //   totalTime: '',
  //   photo: require('./asset/solar-fields-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Solar Fields',
  //       title: 'Sol',
  //       time: 8.31,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Solar Fields',
  //       title: 'Times Are Good (Sometimes Remix)',
  //       time: 8.10,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Solar Fields',
  //       title: 'Unite',
  //       time: 9.26,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Solar Fields',
  //       title: 'Insum',
  //       time: 8.59,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Solar Fields',
  //       title: 'The Stones Are Not Too Busy (Remastered)',
  //       time: 10.31,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Solar Fields',
  //       title: 'Kick Back',
  //       time: 8.52,
  //     },
  //     {
  //       track: 7,
  //       artist: 'Solar Fields',
  //       title: 'Swoosh',
  //       time: 8.35,
  //     },
  //     {
  //       track: 8,
  //       artist: 'Solar Fields',
  //       title: 'Video 2007',
  //       time: 8.22,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Solar Fields',
  //       title: 'We Are The Dream',
  //       time: 8.11,
  //     },
  //     {
  //       track: 10,
  //       artist: 'Solar Fields',
  //       title: 'Confusion Illusion (Remix)',
  //       time: 7.20,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Solar Fields',
  //       title: 'Cocoon moon (Glastonbury Festival 2005 Mix)',
  //       time: 5.15,
  //     },
  //   ],
  // },
  // {
  //   id: 14,
  //   playlistName: 'Best Of Ott',
  //   genre: ['dub', 'electronic', 'trip hop', 'ethnic electronic', 'ambient'],
  //   description: '',
  //   totalTime: '',
  //   photo: require('./asset/ott-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'OTT',
  //       title: 'Signals From Bob',
  //       time: 7.48,
  //     },
  //     {
  //       track: 2,
  //       artist: 'OTT',
  //       title: 'Joyful Wonder',
  //       time: 6.39,
  //     },
  //     {
  //       track: 3,
  //       artist: 'OTT',
  //       title: 'The Queen Of All Everything',
  //       time: 7.52,
  //     },
  //     {
  //       track: 4,
  //       artist: 'OTT',
  //       title: 'A Happening In Your Head',
  //       time: 7.09,
  //     },
  //     {
  //       track: 5,
  //       artist: 'OTT',
  //       title: 'Squirrel And Biscuits',
  //       time: 6.02,
  //     },
  //     {
  //       track: 6,
  //       artist: 'OTT',
  //       title: 'Unit Delta Plus',
  //       time: 8.10,
  //     },
  //     {
  //       track: 7,
  //       artist: 'OTT',
  //       title: 'Splitting An Atom',
  //       time: 7.22,
  //     },
  //     {
  //       track: 8,
  //       artist: 'OTT',
  //       title: 'Owl Stretching Time',
  //       time: 7.41,
  //     },
  //     {
  //       track: 9,
  //       artist: 'OTT',
  //       title: 'Harwell Dekatron',
  //       time: 6.54,
  //     },
  //     {
  //       track: 10,
  //       artist: 'OTT',
  //       title: 'Mouse Eating Cheese',
  //       time: 7.38,
  //     },
  //     {
  //       track: 11,
  //       artist: 'OTT',
  //       title: 'Rogue Bagel',
  //       time: 8.29,
  //     },
  //   ],
  // },
  // {
  //   id: 15,
  //   playlistName: 'Best of Rone',
  //   genre: ['electronic', 'EDM', 'IDM', 'minimal techno'],
  //   description: 'Rone (born Erwan Castex) is a French electronic music producer and artist',
  //   totalTime: '',
  //   photo: require('./asset/rone-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Rone',
  //       title: '(OO)',
  //       time: 3.08,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Rone',
  //       title: 'Spanish Breakfast',
  //       time: 3.37,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Rone',
  //       title: 'Parade',
  //       time: 3.28,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Rone',
  //       title: 'Beast',
  //       time: 7.14,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Rone',
  //       title: 'Fugu Kiss',
  //       time: 4.47,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Rone',
  //       title: 'Gravity',
  //       time: 3.50,
  //     },
  //     {
  //       track: 7,
  //       artist: 'Rone',
  //       title: 'Memory',
  //       time: 5.19,
  //     },
  //     {
  //       track: 8,
  //       artist: 'Rone',
  //       title: 'Sing Song',
  //       time: 4.00,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Rone',
  //       title: 'Spank',
  //       time: 4.05,
  //     },
  //     {
  //       track: 10,
  //       artist: 'Rone',
  //       title: 'Bora Vocal',
  //       time: 5.37,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Rone',
  //       title: 'Beast Part 2',
  //       time: 6.26,
  //     },
  //   ],
  // },
  // {
  //   id: 16,
  //   playlistName: 'Best Of Koan',
  //   genre: ['minimal techno', 'breakbeat', 'progressive house', 'etchno-chillout', 'downtempo', 'electro house'],
  //   description: 'A Russian duo consisting of Danial Roeth and William Grey',
  //   totalTime: '',
  //   photo: require('./asset/koan-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Koan',
  //       title: 'Conscious Delusion',
  //       time: 7.37,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Koan',
  //       title: 'Uncloak',
  //       time: 10.37,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Koan',
  //       title: 'Titania (Crying Heavens Mix)',
  //       time: 8.18,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Koan',
  //       title: 'Penance (Condemned Mix)',
  //       time: 5.47,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Koan',
  //       title: 'She Doesnt Know To Be Asleep',
  //       time: 8.26,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Koan',
  //       title: 'Agartha',
  //       time: 8.52,
  //     },
  //     {
  //       track: 7,
  //       artist: 'Koan',
  //       title: 'The Light Of Sleeping Star (Serenity Mix)',
  //       time: 8.24,
  //     },
  //     {
  //       track: 8,
  //       artist: 'Koan',
  //       title: 'Immersion',
  //       time: 8.52,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Koan',
  //       title: 'Cold Paints',
  //       time: 7.27,
  //     },
  //     {
  //       track: 10,
  //       artist: 'Koan',
  //       title: 'Fairyland (Eddur Mix)',
  //       time: 8.56,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Koan',
  //       title: 'Awakening (Remix)',
  //       time: 9.20,
  //     },
  //   ],
  // },
  // {
  //   id: 17,
  //   playlistName: 'Best Of Eric Hilton',
  //   genre: ['ambient', 'lounge', 'chillout'],
  //   description: '',
  //   totalTime: '',
  //   photo: require('./asset/eric-hilton-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Eric Hilton',
  //       title: 'Forming Star',
  //       time: 4.54,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Eric Hilton',
  //       title: 'Expert Dreaming',
  //       time: 3.41,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Eric Hilton',
  //       title: 'The Grand Beauty',
  //       time: 3.45,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Eric Hilton',
  //       title: 'More Beautiful Things',
  //       time: 3.52,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Eric Hilton',
  //       title: 'Fade Into Forever',
  //       time: 5.24,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Eric Hilton',
  //       title: 'Artifact22',
  //       time: 4.30,
  //     },
  //     {
  //       track: 7,
  //       artist: 'Eric Hilton',
  //       title: 'Ceremony',
  //       time: 5.21,
  //     },
  //     {
  //       track: 8,
  //       artist: 'Eric Hilton',
  //       title: 'Particles',
  //       time: 4.20,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Eric Hilton',
  //       title: 'Tomorrows Shadow',
  //       time: 3.41,
  //     },
  //     {
  //       track: 10,
  //       artist: 'Eric Hilton',
  //       title: 'Strata 1',
  //       time: 3.53,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Eric Hilton',
  //       title: 'Infinite Everywhere',
  //       time: 3.23,
  //     },
  //   ],
  // },
//   {
//     id: 18,
//     playlistName: 'Soundtrack',
//     genre: [],
//     description: '',
//     totalTime: '',
//     photo: require('./asset/soundtrack-img.png'),
//     musics: [
//       {
    //     track: 1,
    //     artist: 'Trent Reznor & Atticus Ross',
    //     title: 'Life On Mars? (David Bowie reprise) (Watchmen Soundtrack)',
    //     time: 2.54,
    //   },
//       {
//         track: 2,
//         artist: 'Ramin Djawadi',
//         title: 'Dr. Ford (Westworld Soundtrack)',
//         time: 5.30,
//       },
//       {
//         track: 3,
//         artist: 'Air',
//         title: 'Highschool Lover (Virgin Suicide Soundtrack)',
//         time: 2.42,
//       },
//       {
//         track: 4,
//         artist: '',
//         title: '',
//         time: '',
//       },
//       {
//         track: 5,
//         artist: 'Brian Eno',
//         title: 'Deep Blue Day (Trainspotting Soundtrack)',
//         time: 3.59,
//       },
//       {
//         track: 6,
//         artist: 'Nathan Barr',
//         title: 'Tripping (True Blood Soundtrack)',
//         time: '',
//       },
//       {
//         track: 7,
//         artist: 'Vangelis',
//         title: 'La Petite Fille De La Mer (Remastered) (Million Soundtrack)',
//         time: 5.55,
//       },
//       {
//         track: 8,
//         artist: 'Squarepusher',
//         title: 'Tommib (Lost In Translation Soundtrack)',
//         time: 1.20,
//       },
//       {
//         track: 9,
//         artist: 'Moby',
//         title: 'Extreme Ways (Jason Bourne Soundtrack)',
//         time: '4.57',
//       },
//       {
//         track: 10,
//         artist: 'Norah Jones',
//         title: 'Black (Breaking Bad Soundtrack)',
//         time: 3.32,
//       },
//       {
//         track: 11,
//         artist: 'Trent Reznor & Atticus Ross',
//         title: 'Like Home (Gone Girl Soundtrack)',
//         time: 3.40,
//       },
//     ],
//   },
  // {
  //   id: 19,
  //   playlistName: 'IDM 2',
  //   genre: ['IDM'],
  //   description: '',
  //   totalTime: '',
  //   photo: require('./asset/idm-2-img.png'),
  //   musics: [
  //     {
  //       track: 1,
  //       artist: 'Squarepusher',
  //       title: 'Midi Sans Frontières',
  //       time: 6.01,
  //     },
  //     {
  //       track: 2,
  //       artist: 'Am-Boy',
  //       title: 'A Place Of No Eyes',
  //       time: 3.35,
  //     },
  //     {
  //       track: 3,
  //       artist: 'Koan',
  //       title: 'Introus',
  //       time: 2.11,
  //     },
  //     {
  //       track: 4,
  //       artist: 'Luke Abbot',
  //       title: 'Trans Forest Alignment',
  //       time: 5.57,
  //     },
  //     {
  //       track: 5,
  //       artist: 'Jon Hopkins',
  //       title: 'Collider',
  //       time: 5.24,
  //     },
  //     {
  //       track: 6,
  //       artist: 'Tor',
  //       title: 'Cymbol',
  //       time: 5.38,
  //     },
  //     {
  //       track: 7,
  //       artist: 'Rykard',
  //       title: 'The Transmission Fields',
  //       time: 3.03,
  //     },
  //     {
  //       track: 8,
  //       artist: 'Ed Chamberlain',
  //       title: 'Landmine',
  //       time: 7.20,
  //     },
  //     {
  //       track: 9,
  //       artist: 'Mindseye',
  //       title: 'Hang Ten (The Ocean)',
  //       time: 3.19,
  //     },
  //     {
  //       track: 10,
  //       artist: 'Krusseldorf',
  //       title: 'A Place Long Gone',
  //       time: 5.24,
  //     },
  //     {
  //       track: 11,
  //       artist: 'Lone',
  //       title: 'Sea Of Tranquility',
  //       time: 5.00,
  //     },
  //   ],
  // },
];

export default playlistData;
