// import logo from "./logo.svg";
import './App.css';
import * as React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Link, Switch, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
