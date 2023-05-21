import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My Store
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className=".nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/products-list" ? "active" : ""}`}
                to="/products-list">Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;