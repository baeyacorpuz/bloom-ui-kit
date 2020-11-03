import React from 'react';
import { Route, Switch } from 'react-router';
import Installation from '../components/documentation/Installation';
import Home from '../components/home/Home';

const RouteBlock = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/installation" component={Installation} />
    </Switch>
  );
}
 
export default RouteBlock;