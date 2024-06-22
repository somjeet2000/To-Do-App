import './Register.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Register() {
  return (
    <div className="register">
      <div className="registerContainer">
        <div className="registerAvatar">
          <FontAwesomeIcon className="registerAvatarImage" icon={faUser} />
        </div>
        <h1>Register</h1>
        <form action="">
          <div className="registerInputContainer">
            <div className="registerFirstLastName">
              <input
                type="text"
                placeholder="First Name"
                id="firstname"
                name="firstname"
              />
              <input
                type="text"
                placeholder="Last Name"
                id="lastname"
                name="lastname"
              />
            </div>
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
            <button className="registerButton">Register</button>
          </div>
        </form>
        <p>
          Existing User? <Link to="/signin">Login</Link>
        </p>
      </div>
    </div>
  );
}
