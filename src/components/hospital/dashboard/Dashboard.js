import React from 'react';
import { Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import MedicalCare from '../../../assets/images/medical_care.svg'
import MedicalResearch from '../../../assets/images/medical-research.svg'
import Medicine from '../../../assets/images/doctor.svg'

const useStyles = makeStyles((theme) => ({
  paperPadding: {
    '& .MuiPaper-rounded': {
      padding: theme.spacing(2)
    }
  },
  redBackground: {
    '& .MuiPaper-rounded': {
      backgroundColor: '#ff6f5e',
      padding: theme.spacing(2),
      color: 'white',
    }
  },
  greenBackground: {
    '& .MuiPaper-rounded': {
      backgroundColor: '#addcca',
      padding: theme.spacing(2),
      color: 'white',
    },
  },
  blueBackground: {
    '& .MuiPaper-rounded': {
      backgroundColor: '#0048B4',
      padding: theme.spacing(2),
      color: 'white',
    }
  },
  image: {
    margin: '0 auto',
    display: 'block',
    height: 150,
    width: 'auto'
  }
}))

const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet><title>Hospital Dashboard</title></Helmet>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={4} className={classes.greenBackground}>
            <NavLink to={'/patient/dashboard'}>
              <Paper variant="outlined" color="primary">
                <Typography  variant="subtitle1">Total Patients</Typography>
                <Typography gutterBottom variant="h3">16423</Typography>
                <img className={classes.image} src={MedicalCare} width="100%" />
              </Paper>
            </NavLink>
          </Grid>
          <Grid item md={4} className={classes.blueBackground}>
            <Paper variant="outlined" color="primary">
              <Typography  variant="subtitle1">Operational Cost</Typography>
              <Typography gutterBottom variant="h3">64210</Typography>
              <img className={classes.image} src={MedicalResearch} width="100%" />
            </Paper>
          </Grid>
          <Grid item md={4} className={classes.redBackground}>
            <Paper variant="outlined" color="primary">
              <Typography  variant="subtitle1">Avg. Patient per Doctor</Typography>
              <Typography gutterBottom variant="h3">15</Typography>
              <img className={classes.image} src={Medicine} width="100%" />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;