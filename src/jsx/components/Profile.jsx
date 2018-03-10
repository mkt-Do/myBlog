import React from 'react';
import { Grid, Avatar } from 'material-ui';
import pic from '../../images/Pikachu.jpg';

export default function Intro() {
  return (
    <div>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <h1>Profile</h1>
          <Avatar alt='mkt-Do' src={pic} />
        </Grid>
      </Grid>
    </div>
  );
}
