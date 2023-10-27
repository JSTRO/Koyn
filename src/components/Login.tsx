import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import logo from '../assets/logo.png';

interface LoginProps {
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
  setIsLoggedIn: (value: boolean) => void;
}

const Login = ({setCurrentUser, setIsLoggedIn}: LoginProps) => {
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
      if (data.loggedIn) {
        setCurrentUser(data.user.id)
        setIsLoggedIn(true)
        navigate('/dashboard')
      };
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
    color: 'gold',
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
      <img className="logo" src={logo} alt=''/>
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
        <p>Don't have an account? Sign up <Link style={{color: 'gold'}} to="/signup" >here</Link>!</p>
        <p>Don't want to sign in? Proceed as a <Link style={{color: 'gold'}} to="/dashboard" >guest</Link></p>
      </form>
    </div>
  );
};

export default Login;
