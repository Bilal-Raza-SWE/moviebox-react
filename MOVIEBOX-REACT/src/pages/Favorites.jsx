import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/movie-card";
import "../css/favorite.css";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites-container">
      <h1 className="favorites-title">My Favorite Movies</h1>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <div className="no-favorites-icon">🎬</div>
          <h2>There are no favorite movies</h2>
          <p>Start adding movies to your favorites to see them here!</p>
          <div className="empty-action">
            <a href="/home" className="browse-movies-btn">
              Browse Movies
            </a>
          </div>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
