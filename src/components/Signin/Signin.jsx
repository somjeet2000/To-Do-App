import './Signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <div className="signin">
      <div className="signinContainer">
        <div className="signinAvatar">
          <FontAwesomeIcon className="avatarImage" icon={faUser} />
        </div>
        <h1>Login</h1>
        <form action="">
          <div className="signinInputContainer">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button className="loginButton">Login</button>
          </div>
        </form>
        <p>
          New User? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
