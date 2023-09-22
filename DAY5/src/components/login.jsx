import React, { useState } from 'react';
import '../assetes/css/login.css'; // Corrected the path to the CSS file
import { login } from './redux/UserSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both email and password are required.');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError(''); // Clear any previous error messages
      console.log('Email:', email);
      console.log('Password:', password);
      dispatch(login(email));
      navigate('/Main');
    }
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  return (
    <div className="LoginApp">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
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
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link to="/Signup">Sign up</Link>
          </p>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
