import { Link } from "react-router-dom";
import "../css/navbar.css"
function Navbar() {
  return (
    <>
      <div className="default-page-nav">
        <Link to="/">Movie Box</Link>
      </div>
      <div className="navbar-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </>
  );
}

export default Navbar;
