# Playlist React App

## The Project

Our favourite tracks on a single web page: discover new artists through our inspiring playlists.
🍐 @beyondthefruit

🚀 This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

🧚🏻 Tech stack: 
- ReactJS
- JavaScript
- Styled-components
- HTML
- CSS

### Folder Structure

```
.
├── ...
├── asset                     # Images
├── carousel                  # Playlists folder
│   ├── Badges.js             # Displays music genre through `map`
│   ├── Carousel.js           # Main component with the playlists (front and back)
│   └── carousel.style.js     # Styling with styled-component
├── footer                    # Footer folder
│   ├── Footer.js             # Footer component
│   ├── footer.style.js       # Styling with styled-component
├── header                    # Header folder
│   ├── Header.js             # Header component
│   ├── header.style.js       # Styling with styled-component
├── App.js                    # App component
├── App.test.js               # Unit tests TODO: create unit test files for `header`, `carousel` and `footer`
├── data.js                   # Data (playlist details)
├── devices.js                # Media queries
├── index.css                 # CSS for the `body` TODO: remove this file
├── Themes.js                 # Light mode / Dark mode WORK IN PROGRESS
└── ...

```

## Testing

- [ ] Unit tests with [Testing Library](https://testing-library.com/)
- [X] Tested manually using developer tools - Firefox / Chrome
- [X] Media query tests: Ipad - IphoneSE/Pro/PRO MAX/MINI - Galaxy Note 20/520

## Media Queries

- `@media screen and (min-width: 320px)`
- `@media screen and (min-width: 375px)`
- `@media screen and (min-width: 425px)`
- `@media screen and (min-width: 768px)`
- `@media screen and (min-width: 1024px)`
- `@media screen and (min-width: 1440px)`
- `@media screen and (min-width: 2560px)`


## Available Scripts

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

## Improvement / Next Steps

- [ ] Cleanup: remove `index.css` file and use `createGlobalStyle` (styled component) - replace some `p` with `button`
- [ ] Create test files with [Testing Library](https://testing-library.com/) 
- [ ] Implement light mode 
- [ ] Improve accessibility
- [ ] Spike: use Spotify API instead of Youtube 
- [ ] Filter out playlists by category using dynamic `buttons`