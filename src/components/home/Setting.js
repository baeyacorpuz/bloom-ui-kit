import { Container, Divider, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  paperPadding: {
    '& .MuiPaper-rounded': {
      padding: theme.spacing(2)
    }
  },
  toolbar: {
    [theme.breakpoints.up('sm')]: {
      height: 70
    },
    [theme.breakpoints.down('sm')]: {
      height: 70
    },
  }
}))

const Settings = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet><title>About</title></Helmet>

      <Container maxWidth="lg" className={classes.paperPadding}>
        <Paper variant="outlined">
          <Grid container spacing={1}>
            <Grid item md={12}>
              <Typography variant="overline">What's new? </Typography>
              <Typography variant="caption" gutterBottom>1.1.0.1</Typography>
            </Grid>
            <Divider />
            <Grid item md={12}>
              <Typography variant="overline" gutterBottom>Additional Information</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography variant="overline"><b>Updated</b></Typography>
              <Typography variant="body2" gutterBottom>Today</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography variant="overline"><b>Current Version</b></Typography>
              <Typography variant="body2" gutterBottom>1.1.0.1</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography variant="overline"><b>Offered by</b></Typography>
              <a href="http://beacorpuzco.web.app/">
                <Typography variant="body2" gutterBottom>Baedevelops</Typography>
              </a>
            </Grid>
            <Grid item md={3}>
              <Typography variant="overline"><b>Developer</b></Typography>
              <a href="http://beacorpuzco.web.app/">
                <Typography variant="body2" gutterBottom>Visit website</Typography>
              </a>
            </Grid>
          </Grid>
        </Paper>
        <div className={classes.toolbar} />
        <Grid container spacing={1}>
          <Grid item md={12}>
            <Typography variant="overline">Credits </Typography>
            <Typography variant="overline" gutterBottom>This project is made posibble by the following:</Typography>
          </Grid>
          <Grid item md={3}>
            <a href="https://www.goodreads.com/api/">
              <Typography variant="overline"><b>Goodreads</b></Typography>
            </a>
          </Grid>
          <Grid item md={3}>
            <a href="https://pokeapi.co/docs/v2">
              <Typography variant="overline"><b>PokeApi</b></Typography>
            </a>
          </Grid>
          <Grid item md={3}>
            <a href="https://github.com/lukePeavey/quotable">
              <Typography variant="overline"><b>Quotable</b></Typography>
            </a>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Settings;