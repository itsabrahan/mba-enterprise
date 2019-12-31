import React from 'react';
import './Header.scss';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="App-header">          
      <div className="Logo-section">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span className="Title">MBA</span>
          <br/>
          <span className="Title-details">Enterprise, LLC.</span>
        </p>
      </div>

      <nav className="Navbar">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
  
      
    </header>
  );
}

export default Header;
