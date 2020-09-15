import React from 'react';
import logo from './logo.svg';
import './App.css';
import profileImage from './img/profile-image.jpg';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Jordan VanSickle</h2>
      <div className="center">
      <img src={profileImage} alt=""/>
      </div>
    </div>
  );
}

export default App;
