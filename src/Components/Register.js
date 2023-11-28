import React, { useState } from 'react';
import Axios from 'axios';
import Navbar from './Navbar';

const Register = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://your-api-endpoint/register', {
        studentId,
        password,
        token,
      });

      if (response.status === 200) {
        // Registration successful
        console.log('User registered successfully!');
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>Student ID:</label>
        <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label>Token:</label>
        <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

