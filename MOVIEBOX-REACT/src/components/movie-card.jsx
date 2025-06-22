import { useMovieContext } from "../context/MovieContext"
import "../css/movie-card.css"

function MovieCard({ movie }) {
  const { isFvrt, addToFvrts, removeFromFvrts } = useMovieContext(); 
  const favorite = isFvrt(movie.id);

  function fvrtBtnClick() {
    if (favorite) {
      // alert(`Movie: ${movie.title} removed from the favorites list`);
      removeFromFvrts(movie.id);
    } else {
      // alert(`Movie: ${movie.title} added to the favorites list`);
      addToFvrts(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <button 
          className="fvrt-btn" 
          data-favorited={favorite}
          onClick={fvrtBtnClick} 
          title={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          {favorite ? "♥" : "♡"}
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
