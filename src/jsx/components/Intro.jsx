import React from 'react';
import { Grid, Paper } from 'material-ui';

export default function Intro() {
  return (
    <div>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <h1>Introduction</h1>
        </Grid>
      </Grid>
    </div>
  );
}

