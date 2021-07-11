import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../images/logo.png";
const Header = () => {
    const [main,setMain] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 200) {
            setMain(true);
        }
        else{
            setMain(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

  return (
    <>
    {/* navbar navbar-expand-lg fixed-top */}
    <div className={main ? 'main scrolled' : 'main'}>
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand ml-5 pl-4" to="/">
          <img src={logo} alt={logo} width="255" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <MenuIcon className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link active" to="/">
                Ground-Truth Data
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                How It Works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Fee Structure
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Example Deliverables
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Submission Portal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link for_nav_btn" to="/">
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Header;
