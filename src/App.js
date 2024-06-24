// import logo from "./logo.svg";
import './App.css';
import * as React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Link, Switch, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import ToDo from './components/ToDo/Todo';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  console.log(mode);
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar signinTitle="Login" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/signin" element={<Signin mode={mode} />} />
          <Route path="/register" element={<Register mode={mode} />} />
          <Route path="/todo" element={<ToDo mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
