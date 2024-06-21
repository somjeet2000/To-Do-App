import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="navbarLogo">Logo</div>
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
