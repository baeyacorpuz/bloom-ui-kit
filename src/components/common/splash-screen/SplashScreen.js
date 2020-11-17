import { Backdrop, CircularProgress, Grid } from '@material-ui/core';
import React from 'react';

const SplashScreen = () => {
  return (
    <Backdrop open>
      <Grid container spacing={3} justify="center" alignItems="center" >
        <Grid item>
          <CircularProgress />
        </Grid>
        <Grid item>
          Loading...
        </Grid>
      </Grid>
    </Backdrop>
  );
}

export default SplashScreen;