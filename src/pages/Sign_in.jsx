import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Sign_in() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      username,
      password
    };

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
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      alert('An error occurred while signing in. Please try again.');
    }
}

  return (
    <>
        <h4>Sign in below:</h4>
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input
              type = "text"
              name = "username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br /><br />

            <label>Password: </label>
            <input
              type = "password"
              name = "password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br />
             <button type="submit">SIGN IN</button>
        </form>
    </>
  );
}