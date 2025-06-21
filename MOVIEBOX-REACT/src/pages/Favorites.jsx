import { useState } from "react";
import "../css/favorite.css";

function Favorites() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  return (
    <div className="favorites-container">
      <h1 className="favorites-title">My Favorite Movies</h1>

      {favoriteMovies.length === 0 ? (
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
        <div></div>
      )}
    </div>
  );
}

export default Favorites;
