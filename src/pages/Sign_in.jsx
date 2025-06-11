import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Sign_in() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = { username, password };

    try {
      const resp = await fetch('http://localhost:8081/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      const msg = await resp.text();

      if (msg === "admin") {
        navigate('/admin-home');
      } else if (msg === "customer") {
        navigate('/customer-home');
      } else {
        alert(msg);
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      alert('An error occurred while signing in. Please try again.');
    }
}

  return (
    <div className="auth-wrap center-block card mt-6">
      <h4 className="text-center mb-4">Sign in</h4>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">Sign In</button>
      </form>
      <p className="mt-3 text-center">
        Don't have an account? <a href="/sign-up">Sign Up</a>
      </p>
    </div>

  );
}