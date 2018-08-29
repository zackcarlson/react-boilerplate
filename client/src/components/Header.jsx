import React from 'react';
import { NavLink } from 'react-router-dom';

const log = () => {
  console.log('clicked');
};

const Header = () => (
  <nav className='navbar'>
    <NavLink to='/' onClick={log}>HOME</NavLink>
    <NavLink to='/instructions'>INSTRUCTIONS</NavLink>
  </nav>
)

export default Header;