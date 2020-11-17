import { Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  paperPadding: {
    '& .MuiPaper-rounded': {
      padding: theme.spacing(2)
    }
  }
}))

const Settings = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet><title>Settings</title></Helmet>

      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item md={8} className={classes.paperPadding}>
            <Paper variant="outlined">
              <Typography variant="subtitle1" gutterBottom>Settings</Typography>
            </Paper>
          </Grid>
          <Grid item md={4} className={classes.paperPadding}>
            <Paper variant="outlined">
              <Typography variant="subtitle1" gutterBottom>Github</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Settings;