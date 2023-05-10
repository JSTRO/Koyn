import { useState, ChangeEvent, FormEvent, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface FormData {
  username: string;
  email: string;
  password: string;
}

interface Props {
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
}

const SignUp = ({setCurrentUser}: Props) => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  try {
    const response = await fetch('http://localhost:3333/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }),
    });
    const data = await response.json();
    if (data.loggedIn) {
      setCurrentUser(data.user.id)
      navigate('/dashboard')
    };
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1c1c1c',
    color: 'gold'
  };

  

  const formInputStyle: CSSProperties = {
    display: 'block',
    width: '300px',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#3c3c3c',
    borderColor: 'transparent',
    color: 'white',
    borderRadius: '5px',
  };

  const submitButtonStyle: CSSProperties = {
    backgroundColor: '#4c4c4c',
    color: 'gold',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={formInputStyle}
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          style={formInputStyle}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          style={formInputStyle}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className="submit-button"> <button style={submitButtonStyle} type="submit">
          Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;