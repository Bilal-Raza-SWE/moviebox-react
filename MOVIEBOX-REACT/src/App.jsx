import './App.css'
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import Favorites from "./pages/Favorites"
function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </main>
  )
}

export default App
