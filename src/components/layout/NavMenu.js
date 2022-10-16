import React from 'react'
import { Link } from 'react-router-dom';
import './NavMenu.css';
import hslogo from '../../assets/HS-logo.png';

function NavMenu() {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={hslogo} alt='HS Logo' />
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavMenu;
