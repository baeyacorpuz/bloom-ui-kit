import React from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from '../components/dashboard/Dashboard';
import Home from '../components/home/Home';

const RouteBlock = () => {
  return (
    <Switch>
      <Route path component={Home} />
    </Switch>
  );
}
 
export default RouteBlock;