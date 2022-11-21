# Playlist React App

## 🎶 The Project

➡️ ➡️ [GO TO WEBSITE PROJECT](https://react-playlist.netlify.app/) ⬅️ ⬅️

Our favourite tracks on a single web page: discover new artists through our inspiring playlists.

🍐 [@beyondthefruit (Kevin Hanard)](https://github.com/beyondthefruit) && [@julianoiret (Julia Hanard)](https://github.com/julianoiret)

### 🎥 Overview

![mockup-react-playlist](https://user-images.githubusercontent.com/78125712/199882333-6f60b384-52be-4c7e-9331-a080e19d04cb.png)

**Demo:**

https://user-images.githubusercontent.com/78125712/199859863-1a62792a-370a-4d47-af4c-a33ce267f6bb.mov

🚀 This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

🧚🏻 Tech stack:

- ReactJS
- JavaScript
- Styled-components
- HTML
- CSS

### 📁 Folder Structure

```
.
├── ...
├── asset                     # Images folder
├── carousel                  # Playlists folder
│   ├── Badges.js             # Displays music genre through `map`
│   ├── Carousel.js           # Main component with the playlists (front and back)
│   └── Carousel.style.js     # Styling with styled-component
│   ├── Carousel.test.js      # Unit test **WIP**
├── footer                    # Footer folder
│   ├── Footer.js             # Footer component
│   ├── Footer.style.js       # Styling with styled-component
│   ├── Footer.test.js        # Unit test 
├── header                    # Header folder
│   ├── Header.js             # Header component
│   ├── Header.style.js       # Styling with styled-component
│   ├── Header.test.js        # Unit test 
├── App.js                    # App component
├── data.js                   # Data (playlist details)
├── devices.js                # Media queries
├── globalStyles.js           # Apply style globally
├── Themes.js                 # Light mode / Dark mode
└── ...

```

## 🪄 Testing

- [x] Unit tests with [Testing Library](https://testing-library.com/)
- [x] Tested manually using developer tools - Firefox / Chrome
- [x] Media query tests: Ipad - IphoneSE/Pro/PRO MAX/MINI - Galaxy Note 20/520

## 📱 Media Queries

- `@media screen and (min-width: 320px)`
- `@media screen and (min-width: 375px)`
- `@media screen and (min-width: 425px)`
- `@media screen and (min-width: 768px)`
- `@media screen and (min-width: 1024px)`
- `@media screen and (min-width: 1440px)`
- `@media screen and (min-width: 2560px)`

## 🖋️ Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 🛸 Improvement / Next Steps

- [x] Create test files with [Testing Library](https://testing-library.com/)
- [x] Add Spotify logo (next to Youtube logo) to open playlist on Spotify
- [x] Implement light mode
- [ ] Improve accessibility
- [ ] Spike: use Spotify API instead of Youtube
- [ ] Filter out playlists by category using dynamic `buttons`
