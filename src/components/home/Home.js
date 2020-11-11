import { Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({

}))

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

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
        <Grid container spacing={1}>
          <Grid item md={9}>
            <Paper variant="elevation">
              {/* <Typography variant="h3">Hello, user!</Typography> */}
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper variant="elevation">
              {/* <Typography variant="h3">Hello, user!</Typography> */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;