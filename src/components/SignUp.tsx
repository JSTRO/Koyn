import { useState, ChangeEvent, FormEvent, CSSProperties } from 'react';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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