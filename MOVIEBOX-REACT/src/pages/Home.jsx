import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api.js";
import MovieCard from "../components/movie-card";
import Loader from "../components/loader.jsx";
import Error from "../components/error.jsx";
import "../css/home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const mapMovieData = (movie) => ({
    id: movie.id,
    title: movie.title,
    releaseDate: movie.release_date,
    url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    description: movie.overview,
  });

  useEffect(() => {
    const laodPopularMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getPopularMovies();
        const mappedMovies = response.map(mapMovieData);
        setMovies(mappedMovies);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    laodPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);

    try {
      const response = await searchMovies(searchQuery);
      const mappedMovies = response.map(mapMovieData);
      setMovies(mappedMovies);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>

      {error && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "30vh",
          }}
        >
          <Error />
        </div>
      )}

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      )}
    </>
  );
}

export default Home;
