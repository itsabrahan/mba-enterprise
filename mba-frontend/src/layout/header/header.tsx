import React from 'react';
import './header.scss';
import logo from './logo.svg';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
          MBA Enterprise, LLC.
      </p>
    </header>
  );
}

export default Header;
