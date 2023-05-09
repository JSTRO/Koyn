import { CSSProperties } from 'react';

const Logo = () => {
  const titleStyle: CSSProperties = {
    color: 'black',
    fontSize: '3rem',
    marginBottom: '20px',
    textAlign: 'center',
  };

  return <h1 style={titleStyle}>Koyn</h1>;
};

export default Logo;
