import MovieCard from "./components/movie-card";
import './App.css'

function App() {

  return (
    <div>
      <MovieCard movie={{title: "GOT", releaseDate: 2019, url: "https://netlflix.com"}} />
    </div>
  )
}

export default App
