// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to our website</h1>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/login">
        <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
      </Link>
    </div>
  );
};

export default Home;
