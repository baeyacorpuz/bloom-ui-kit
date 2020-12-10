import { Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import Divider from '../../assets/images/medicine.svg'

const useStyles = makeStyles((theme) => ({
  paperPadding: {
    '& .MuiPaper-rounded': {
      padding: theme.spacing(3, 6),
      backgroundColor: '#addcca',
    }
  },
  flex: {
    '& .MuiGrid-item': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }
}))

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="UI Kit created by Beacorpuzco powered by Material UI React and GOogle Firebase"
        />
      </Helmet>

      <Container maxWidth="lg" className={classes.paperPadding}>
        <Paper variant="outlined" color="secondary" >
          <Grid container className={classes.flex}>
            <Grid item md={8}>
              <Typography variant="h4">Saint -- Hospital</Typography>
              <Typography variant="subtitle2">Rizal Drive cor. 32nd St.</Typography>
              <Typography variant="subtitle2" gutterBottom>5th Ave, Taguig, 1634 Metro Manila</Typography>
            </Grid>
            <Grid item md={4}>
              <img alt="dashboard" src={Divider} width="80%" />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default Home;