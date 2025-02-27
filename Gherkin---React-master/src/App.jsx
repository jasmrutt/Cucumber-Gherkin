import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic
    if (username === 'validusername' && password === 'validpassword') {
      // Authentication successful - perform necessary actions (e.g., redirect to dashboard)
      alert('Login successful! Redirecting...');
      // Implement actual navigation logic (e.g., using React Router)
      // Example: history.push('/dashboard');
    } else {
      // Authentication failed - handle error (e.g., show error message)
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Username:
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" id="login-button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
