import { CSSProperties } from 'react';
import logo from '../assets/logo.png';

const Logo = () => {
  const titleStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '20px',
    textAlign: 'center',
  };

  return (
    <div style={titleStyle}>
      <img className="logo" src={logo} alt=''/>
      <h1>Koyn</h1>
    </div>
  )
};

export default Logo;
