import React from 'react';
import { Container, Grid, Hidden, makeStyles, Paper, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { Apartment, LocalHospital } from '@material-ui/icons';

import '../style.css';
import Table from './Table';
import TableMui from '../../common/table-parts/Table';

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    '& .MuiPaper-rounded': {
      padding: theme.spacing(2),
      minHeight: 175,
      flexDirection: 'column',
      display: 'flex'
    }
  },
  paperPadding: {
    '& .MuiPaper-rounded': {
      padding: theme.spacing(2)
    }
  }
}))

const columns = ["Name", "Company", "City", "State"];

const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'dropdown',
  selectableRows: false,
  jsonMode: true,
  searchOpen: false,
  searchPlaceholder: 'Search...',
  responsive: 'vertical',
  search: false,
  pagination: false,
  print: false,
  download: false,
  viewColumns: false,
  filter: false,
};

const Department = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet><title>Hospital Departments</title></Helmet>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Grid container spacing={2}>
              <Grid item md={12} className={classes.paperPadding}>
                <Paper variant="outlined">
                  <Typography variant="subtitle1">Overview</Typography>
                  <Table />
                </Paper>
              </Grid>
              <Grid item md={12} className={classes.paperPadding}>
                <Paper variant="outlined">
                  <Typography variant="subtitle1">Department Overview</Typography>
                  <TableMui data={data} columns={columns} options={options} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6} className={classes.paperContainer}>
                <Paper variant="outlined" color="primary" className="primary">
                  <Apartment fontSize='large' />
                  <Typography variant="subtitle1">Number of Departments</Typography>
                  <Typography variant="h3">5</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} md={6} className={classes.paperContainer}>
                <Paper variant="outlined" className="secondary">
                  <LocalHospital  fontSize='large' />
                  <Typography variant="subtitle1">Number of Total Patients</Typography>
                  <Typography variant="h3">12506</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} md={6} className={classes.paperContainer}>
                <Paper variant="outlined" className="secondary">
                  <LocalHospital fontSize='large' />
                  <Typography variant="subtitle1">Av. Patient per Department</Typography>
                  <Typography variant="h3">32</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} md={6} className={classes.paperContainer}>
                <Paper variant="outlined" className="primary">
                  <LocalHospital fontSize='large' />
                  <Typography variant="subtitle1">Av. Doctor per Department</Typography>
                  <Typography variant="h3">12</Typography>
                </Paper>
              </Grid>

              <Grid item md={12} xs={12} className={classes.paperContainer}>
                <Paper variant="outlined">
                  <Typography variant="subtitle1" color="textSecondary">Admission by Department</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Department;