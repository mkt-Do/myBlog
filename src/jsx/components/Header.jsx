import React from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar } from 'material-ui';
import icon from '../../images/Pikachu.jpg';
import { Home, PersonPin, Link } from 'material-ui-icons';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='title'>ほーむ</h1>
      <nav　role='navigation' className='nav'>
        <ul className='nav-items'>
          <li className='nav-item'>
            <NavLink activeStyle={{ color: '#DB4625' }} className='nav-link' exact to='/'>
              <Home />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink activeStyle={{ color: '#DB4625' }} className='nav-link' to='/profile'>
              <PersonPin />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink activeStyle={{ color: '#DB4625' }} className='nav-link' to='/link'>
              <Link />
            </NavLink>
          </li>
          <li className='nav-item'>
            <Avatar src={icon} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
