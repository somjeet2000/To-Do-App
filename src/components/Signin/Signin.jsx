import './Signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Signin(props) {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Implement the handleSubmit method
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.length === 0) {
      setUsernameError('Username is required!');
    }

    if (password.length === 0) {
      setPasswordError('Password is required!');
    } else if (password.length <= 6) {
      setPasswordError('Password must be more than 6 characters!');
    }
  };

  // Implement the HandleChange method
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    switch (name) {
      case 'username':
        setUsernameError('');
        setUsername(value);
        break;

      case 'password':
        setPasswordError('');
        setPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="signin">
      <div
        className="signinContainer"
        style={{
          backgroundColor: props.mode === 'light' ? '#fff' : '#042743',
          boxShadow:
            props.mode === 'light'
              ? '0 0 1rem rgba(0, 0, 0, 0.1)'
              : '0 0 1rem rgba(255, 255, 255, 0.2)',
        }}
      >
        <div className="signinAvatar">
          <FontAwesomeIcon
            className="avatarImage"
            icon={faUser}
            style={{ color: props.mode === 'light' ? '#042743' : '#f7fff7' }}
          />
        </div>
        <h1 style={{ color: props.mode === 'light' ? '#042743' : '#f7fff7' }}>
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="signinInputContainer">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
            <label className="labelError">{usernameError}</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <label className="labelError">{passwordError}</label>
            <button className="loginButton">Login</button>
          </div>
        </form>
        <p style={{ color: props.mode === 'light' ? '#042743' : '#f7fff7' }}>
          New User? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
