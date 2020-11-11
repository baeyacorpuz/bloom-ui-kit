import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';


import './App.css';
import Header from './components/header/Header';
import RouteBlock from './routes/RouteBlock';

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    paddingBottom: theme.spacing(10),
    minHeight: '100vh'
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
        <div>
          <div className={classes.appBar}>
            <Header />
            <div className={classes.toolbar} />
            <div className="">
              <RouteBlock />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
