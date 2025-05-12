const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}`);
  if (!response.ok) throw new Error(`TMDb error ${response.status}`);
  const data = await response.json();
  return data;
};

export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}` +
      `&query=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error(`TMDb error ${res.status}`);
  const data = await res.json();
  return data.results;
};
