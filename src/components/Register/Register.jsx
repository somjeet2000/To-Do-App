import './Register.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Register(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passWordError, setPassWordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.length === 0) {
      setFirstNameError('Firstname is required!');
    }
    if (lastName.length === 0) {
      setLastNameError('Lastname is required!');
    }
    if (userName.length === 0) {
      setUserNameError('Username is required!');
    }
    if (passWord.length === 0) {
      setPassWordError('Password is required!');
    } else if (passWord.length < 6) {
      setPassWordError('Password must be more than 6 characters!');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    switch (name) {
      case 'firstName':
        setFirstNameError('');
        setFirstName(value);
        break;

      case 'lastName':
        setLastNameError('');
        setLastName(value);
        break;

      case 'userName':
        setUserNameError('');
        setUserName(value);
        break;

      case 'passWord':
        setPassWordError('');
        setPassWord(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="register">
      <div
        className="registerContainer"
        style={{
          backgroundColor: props.mode === 'light' ? '#fff' : '#042743',
          boxShadow:
            props.mode === 'light'
              ? '0 0 1rem rgba(0, 0, 0, 0.1)'
              : '0 0 1rem rgba(255, 255, 255, 0.2)',
        }}
      >
        <div className="registerAvatar">
          <FontAwesomeIcon
            className="registerAvatarImage"
            icon={faUser}
            style={{ color: props.mode === 'light' ? '#042743' : '#f7fff7' }}
          />
        </div>
        <h1 style={{ color: props.mode === 'light' ? '#042743' : '#f7fff7' }}>
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="registerInputContainer">
            <div className="firstLastNameContainer">
              <div className="firstName">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
                <label>{firstNameError}</label>
              </div>
              <div className="lastName">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
                <label>{lastNameError}</label>
              </div>
            </div>
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={userName}
              onChange={handleChange}
            />
            <label>{userNameError}</label>
            <input
              type="password"
              name="passWord"
              placeholder="Password"
              value={passWord}
              onChange={handleChange}
            />
            <label>{passWordError}</label>
            <button className="registerButton">Register</button>
          </div>
        </form>
        <p style={{ color: props.mode === 'light' ? '#042743' : '#f7fff7' }}>
          Existing User? <Link to="/signin">Login</Link>
        </p>
      </div>
    </div>
  );
}
