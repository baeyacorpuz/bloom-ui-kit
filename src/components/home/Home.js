import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory()

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="UI Kit created by Beacorpuzco powered by Material UI React and GOogle Firebase"
        />
      </Helmet>

      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Paper variant="outlined">
              
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;