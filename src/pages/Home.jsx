import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const popularMoviesData = await getPopularMovies();
        if (popularMoviesData && popularMoviesData.results) {
          setMovies(popularMoviesData.results);
        } else {
          setMovies([]);
          setError("Could not fetch popular movies.");
        }
      } catch (err) {
        setError("Error fetching popular movies");
        setMovies([]);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchQuery.trim()) {
      const searchForMovies = async () => {
        setLoading(true);
        setError(null);
        try {
          const results = await searchMovies(searchQuery);
          if (results && results.length > 0) {
            setMovies(results);
          } else {
            setMovies([]);
            setError("No movies found matching your search.");
          }
        } catch (err) {
          setError(
            "Failed to fetch search results. Please check your connection."
          );
          setMovies([]);
          console.error("Search fetch error:", err);
        } finally {
          setLoading(false);
        }
      };
      searchForMovies();
    } else {
      setError("Please enter a movie title to search.");
      setMovies([]);
    }
  }

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="home">
      <form onSubmit={handleSearchSubmit} className="submit-form">
        <input
          type="text"
          placeholder="Search for movie..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && !loading && <p className="error-message">{error}</p>}

      {!loading && !error && movies.length > 0 && (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}

      {!loading && !error && movies.length === 0 && searchQuery.trim() && (
        <p>No movies found matching your search criteria.</p>
      )}
      {!loading && !error && movies.length === 0 && !searchQuery.trim() && (
        <p>Popular movies could not be loaded or none are available.</p>
      )}
    </div>
  );
}

export default Home;
