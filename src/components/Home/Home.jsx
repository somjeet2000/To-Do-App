import { Link } from 'react-router-dom';
import './Home.css';

export default function Home(props) {
  return (
    <main>
      <div className="homeContainer">
        <div className="homeSection">
          <h1 style={{ color: props.mode === 'light' ? '#042743' : '#f7fff7' }}>
            Schedule Your Daily Tasks With ToDo!
          </h1>
          <div className="homeSectionButtons">
            <Link to="/register">
              <button className="buttonRegister">Register</button>
            </Link>
            <Link to="/signin">
              <button className="buttonLogin">Login</button>
            </Link>
          </div>
        </div>
        <div className="homeAsideImage"></div>
      </div>
    </main>
  );
}
