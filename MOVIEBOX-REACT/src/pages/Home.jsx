import { useState, useEffect } from "react";
import MovieCard from "../components/movie-card";
import "../css/home.css";
import { getPopularMovies, searchMovies } from "../services/api.js";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const laodPopularMovies = async () => {
      try {
        setLoader(true);
        setError(null);
        const response = await getPopularMovies();
        const mappedMovies = response.map((movie) =>({
          id: movie.id,
          title: movie.title,
          releaseDate: movie.release_date,
          url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          description: movie.overview
        }))
        setMovies(mappedMovies);
      } catch (error) {
        console.log(error);
        setError("Failed to laod Movies...");
      } finally {
        setLoader(false);
      }
    };

    laodPopularMovies();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    alert(searchQuery);
  }

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
          className="error-message"
          style={{ color: "red", textAlign: "center", margin: "1em 0" }}
        >
          {error}
        </div>
      )}
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </>
  );
}

export default Home;
