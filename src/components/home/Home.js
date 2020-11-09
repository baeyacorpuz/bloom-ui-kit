import { Button, Container, Grid, Typography } from '@material-ui/core';
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
            <Typography variant="h1">Bloom UI Kit</Typography>
            <Typography variant="h1">React</Typography>
            <Button onClick={() => history.push('/installation')} variant="outlined">Demo</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;