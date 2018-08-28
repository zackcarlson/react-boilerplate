import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className='navbar'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/instructions'>Instructions</NavLink>
  </nav>
)

export default Header;