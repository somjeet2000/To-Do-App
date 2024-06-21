import './Home.css';

export default function Home() {
  return (
    <main>
      <div className="homeContainer">
        <div className="homeSection">
          <h1>Schedule Your Daily Tasks With ToDo!</h1>
          <div className="homeSectionButtons">
            <button className="buttonRegister">Register</button>
            <button className="buttonLogin">Login</button>
          </div>
        </div>
        <div className="homeAsideImage"></div>
      </div>
    </main>
  );
}
