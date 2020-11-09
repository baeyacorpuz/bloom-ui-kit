import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';


import './App.css';
import './assets/css/main.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RouteBlock from './routes/RouteBlock';
import Home from './components/home/Home';

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
  const [isHome, setIsHome] = useState(false)

  useEffect(() => {
    const location = () => {
      if (window.location.hash === "#/") {
        setIsHome(true)
      } else {
        setIsHome(false)
      }
    }

    location();
  }, []);

  return (
    <>
      {!isHome ? (
        <Router>
          <div>
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
      ) : (
          <Router>
            <div className="App">
              <div className="App-header">
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
              </div>
            </div>
          </Router>
        )}
    </>
  );
}

export default App;
