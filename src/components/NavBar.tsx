import { CSSProperties } from 'react';

interface NavBarProps {
  isLoggedIn: boolean;
  currentUser: string;
}

const NavBar: React.FC<NavBarProps> = ({isLoggedIn, currentUser}) => {
  const navbarStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: '0 20px',
    height: '50px'
  };

  const linkStyle: CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
  };

  const navLinksStyle: CSSProperties = {
    display: 'flex',
  };

  return (
    <nav style={navbarStyle}>
      <a href="/" style={linkStyle}>
        Home
      </a>
      <div style={navLinksStyle}>
        <a href="/signup" style={linkStyle}>
          Sign Up
        </a>
        <a href="/login" style={linkStyle}>
          {isLoggedIn ? `Welcome, ${currentUser}` : `Login`}
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
