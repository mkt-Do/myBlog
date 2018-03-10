import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'material-ui';
import icon from '../../images/Pikachu.jpg';
import { Home, PersonPin } from 'material-ui-icons';

const Header = ({title, changeTitle}) => {
  return (
    <div className='header'>
      <h1 className='title'>{title}</h1>
      <nav　role='navigation' className='nav'>
        <ul className='nav-items'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              <Home />
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/profile'>
              <PersonPin />
            </Link>
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
