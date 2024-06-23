import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

export default function Navbar(props) {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <img src="Logo.png" className="navbarLogo" alt="ToDo App" />
        </Link>
        <div className="navbarRight">
          <ul>
            <Link to="/" id="home">
              <li>Home</li>
            </Link>
            <Link to="/signin" id="signin">
              <li>{props.signinTitle}</li>
            </Link>
            <Link to="/register" id="register">
              <li>Register</li>
            </Link>
            <li>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  // onClick={handleClick}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
