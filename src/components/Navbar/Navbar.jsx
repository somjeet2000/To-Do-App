import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

export default function Navbar(props) {
  return (
    <nav>
      <div
        className="navbar"
        style={{
          backgroundColor: props.mode === 'light' ? '#f7fff7' : '#07020D',
          color: props.mode === 'light' ? '#07020D' : '#f7fff7',
        }}
      >
        <Link to="/">
          <img src="Logo.png" className="navbarLogo" alt="ToDo App" />
        </Link>
        <div className="navbarRight">
          <ul>
            <Link
              to="/"
              id="home"
              style={{ color: props.mode === 'light' ? '#07020D' : '#f7fff7' }}
            >
              <li>Home</li>
            </Link>
            <Link
              to="/signin"
              id="signin"
              style={{ color: props.mode === 'light' ? '#07020D' : '#f7fff7' }}
            >
              <li>{props.signinTitle}</li>
            </Link>
            <Link
              to="/register"
              id="register"
              style={{ color: props.mode === 'light' ? '#07020D' : '#f7fff7' }}
            >
              <li>Register</li>
            </Link>
            <li>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
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
