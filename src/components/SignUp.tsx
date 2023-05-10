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
    textAlign: 'center',
    maxWidth: '500px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f7f7f7',
  };

  const formInputStyle: CSSProperties = {
    display: 'block',
    width: '100%',
    margin: '10px 0',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const submitButtonStyle: CSSProperties = {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: '10px 20px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
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
        <button style={submitButtonStyle} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;