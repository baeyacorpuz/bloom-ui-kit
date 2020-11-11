import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/home/Home';

const RouteBlock = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
 
export default RouteBlock;