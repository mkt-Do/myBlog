import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tooltip, IconButton, Avatar } from 'material-ui';
import { Home } from 'material-ui-icons';
import icon from '../../images/Pikachu.jpg';

const Header = ({title, changeTitle}) => {
  return (
    <div>
      <AppBar position='static' color='inherit' id='appbar'>
        <Toolbar>
          <Typography variant='title' color='inherit' id='headerTitle'>
            {title}
          </Typography>
          <Tooltip title='Home'>
            <IconButton aria-label='Home' component={Link} to='/' onClick={() => changeTitle('Home')}>
              <Home />
            </IconButton>
          </Tooltip>
          <Tooltip title='Profile'>
            <Avatar alt='mkt-Do' src={icon} id='headerAvatar' component={Link} to='/profile' onClick={() => changeTitle('Profile')} />
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
