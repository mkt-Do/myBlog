import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tooltip, IconButton, Avatar } from 'material-ui';
import { Home, PersonPin } from 'material-ui-icons';
import icon from '../../images/Pikachu.jpg';

export default function Header() {
  return (
    <div>
      <AppBar position='static' color='inherit' id='appbar'>
        <Toolbar>
          <Typography variant='title' color='inherit' id='headerTitle'>
            Title
          </Typography>
          <Tooltip title='Home'>
            <IconButton aria-label='Home' component={Link} to='/'>
              <Home />
            </IconButton>
          </Tooltip>
          <Tooltip title='Intro'>
            <IconButton aria-label='Intro' component={Link} to='/intro'>
              <PersonPin />
            </IconButton>
          </Tooltip>
          <Avatar alt='mkt-Do' src={icon} id='headerAvatar' />
        </Toolbar>
      </AppBar>
    </div>
  );
}

