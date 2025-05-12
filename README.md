# My Movie List

A React web application to search, browse, and favorite movies using [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api).

## Features

- Search for movies by title
- Browse popular movies
- Add/remove movies to your favorites list (stored in localStorage)
- View your favorite movies on a dedicated page

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### TMDb API Key

1. Create a free account at [TMDb](https://www.themoviedb.org/).
2. Go to your account settings and generate an API key.
3. Create a `.env` file in the project root and add:

   ```
   VITE_API_KEY=your_tmdb_api_key_here
   ```

### Installation

```bash
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `lint` - Run ESLint

## Tech Stack

- React 19
- Vite
- React Router DOM
- TMDb API

## License

This project is for educational/demo purposes.
