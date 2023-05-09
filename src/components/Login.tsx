import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSProperties } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();
      if (data.loggedIn) navigate('/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  // inline css. could not get css importing to work ://
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1c1c1c',
  };

  const titleStyle: CSSProperties = {
    color: 'white',
    fontSize: '3rem',
    marginBottom: '20px',
  };

  const formStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: 'white',
  };

  const inputStyle: CSSProperties = {
    display: 'block',
    width: '300px',
    marginBottom: '10px',
    padding: '5px',
    backgroundColor: '#3c3c3c',
    borderColor: 'transparent',
    color: 'white',
    borderRadius: '5px',
  };

  const buttonStyle: CSSProperties = {
    backgroundColor: '#4c4c4c',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Koyn</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="username">Username:</label>
        <input
          type="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
