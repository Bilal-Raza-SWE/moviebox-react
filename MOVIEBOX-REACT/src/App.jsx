import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import {MovieProvider} from "./context/MovieContext"
import Favorites from "./pages/Favorites";
import Navbar from "./components/navabar";
import "./css/app.css"

function App() {
  return (
    <MovieProvider>
      <Navbar/>
      <main className="main-routing">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
