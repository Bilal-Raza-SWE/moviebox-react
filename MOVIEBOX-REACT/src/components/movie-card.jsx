import { useState } from "react";
function MovieCard({ movie }) {
  const [isFavorite, setFavorite] = useState(false);

  function fvrtBtnClick() {
    if (isFavorite) {
      alert(`Movie: ${movie.title} removed from the favorites list`);
      setFavorite(false);
    } else {
      alert(`Movie: ${movie.title} added to the favorites list`);
      setFavorite(true);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <button className="fvrt-btn" onClick={fvrtBtnClick}>
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
