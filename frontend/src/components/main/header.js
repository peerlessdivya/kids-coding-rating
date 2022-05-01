
import { Switch } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          Icon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/main/home"
                className="nav-link"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/main/login"
                className="nav-link"
              >
                Login
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                to="/main/signup"
                className="nav-link"
              >
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/main/browsePlatform"
                className="nav-link"
              >
                Browse Platforms
              </NavLink>
            </li>
            
            
            <li className="nav-item">
              <Switch
                checked={props.darkTheme}
                onChange={(e, v) => {
                  props.setDarkTheme(v);
                }}
              />
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;