import React, { useState } from 'react';
import '../assetes/css/login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    //e.preventDefault();

    if (username === 'your_username' && password === 'your_password') {
      window.location.href = '/dashboard';
    } else {
      setError('Invalid . Please try again.');
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <p>Don't have an account?<Link to = '/Signup'><a href=' '>signup</a></Link></p>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}
export default Login;