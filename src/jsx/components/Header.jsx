import React from 'react';
import { Link } from 'react-router-dom';
import { widthStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, Button } from 'material-ui';
import { Home, PersonPin } from 'material-ui-icons';

export default function Header({path}) {
  return (
    <div>
      <AppBar position='static' color='inherit' id='appbar'>
        <Toolbar>
          <Typography variant='title' color='inherit' id='headerTitle'>
            Title
          </Typography>
          <Button color='inherit' component={Link} to='/'><Home /></Button>
          <Button color='inherit' component={Link} to='/intro'><PersonPin /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

