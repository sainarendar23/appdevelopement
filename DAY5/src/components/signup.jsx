// Signup.js

import React, { useState } from 'react';
import '../assetes/css/signup.css';
import { Link } from 'react-router-dom';


function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Implement signup logic here (e.g., sending data to the server)
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      <div className='noo'>already have an account?<Link to = '/'><a href=' '>signin</a></Link></div>
        <Link to='/'><button type="submit">Sign Up</button></Link>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
export default Signup;