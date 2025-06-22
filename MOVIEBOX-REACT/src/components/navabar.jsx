import { Link, useLocation } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="brand">
          <Link to="/" className="brand-link">
            <span className="brand-icon">🎬</span>
            Movie Box
          </Link>
        </div>
        <nav className="navbar-links">
          <Link 
            to="/home" 
            className={`nav-link ${location.pathname === '/home' || location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/favorites" 
            className={`nav-link ${location.pathname === '/favorites' ? 'active' : ''}`}
          >
            Favorites
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
