import { NavLink } from "react-router-dom";
import logo from "../img/logo.jpg";

const Navbar = () => {
  return (
    <header className="shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <NavLink className="navbar-brand" href="#">
              <img src={logo} alt="" />
              Timly
            </NavLink>
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-5" id="navbarNav">
              <nav className="navbar-nav">
                <div className="navbar-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </div>
                <div className="navbar-item">
                  <NavLink className="nav-link" to="individuals">
                    Individuals
                  </NavLink>
                </div>
                <div className="navbar-item">
                  <NavLink className="nav-link" to="teams">
                    Teams
                  </NavLink>
                </div>
                <div className="navbar-item">
                  <NavLink className="nav-link" to="enterprice">
                    Enterprise
                  </NavLink>
                </div>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
