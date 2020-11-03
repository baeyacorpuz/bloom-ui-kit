import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';


import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RouteBlock from './routes/RouteBlock';

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(10)
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

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <div className={classes.appBar}>
            <div className={classes.toolbar} />
            <div className="">
              <RouteBlock />
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
