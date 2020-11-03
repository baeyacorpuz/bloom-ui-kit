import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';

const Installation = () => {
  return (
    <>
      <Helmet><title>Installation</title></Helmet>

      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2">Getting Started</Typography>
            <Typography variant="subtitle1">Installation</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
 
export default Installation;