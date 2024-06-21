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
            <li>Home</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
