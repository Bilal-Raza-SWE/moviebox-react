import { useState } from "react";
import MovieCard from "../components/movie-card";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "The Shawshank Redemption", releaseDate: 1994 },
    { id: 2, title: "The Godfather", releaseDate: 1972 },
    { id: 3, title: "The Dark Knight", releaseDate: 2008 },
    { id: 4, title: "12 Angry Men", releaseDate: 1957 },
    { id: 5, title: "Schindler's List", releaseDate: 1997 },
  ];

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
