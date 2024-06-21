import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <div className="navbarLogo">Logo</div>
        </Link>
        <div className="navbarRight">
          <ul>
            <Link to="/" id="home">
              <li>Home</li>
            </Link>
            <Link to="/signin" id="signin">
              <li>Signin</li>
            </Link>
            <Link to="/register" id="register">
              <li>Register</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
