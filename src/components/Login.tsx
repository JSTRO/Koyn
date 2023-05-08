import React, { useState } from 'react';
import { CSSProperties } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

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
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
