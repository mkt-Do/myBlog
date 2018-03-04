import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, Button } from 'material-ui';

export default function Header() {
  return (
    <div>
      <AppBar position='static' color='inherit' id='appbar'>
        <Toolbar>
          <Typography variant='title' color='inherit' id='headerTitle'>
            Title
          </Typography>
          <Button color='inherit' component={Link} to='/'>Home</Button>
          <Button color='inherit' component={Link} to='/intro'>Intro</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

