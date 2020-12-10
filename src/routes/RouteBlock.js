import React from 'react';
import { Route, Switch } from 'react-router';
import Placeholder from '../components/common/placeholder/Placeholder';
import Settings from '../components/home/Setting';
import Library from '../components/pokemon/Library';
import Pokemon from '../components/pokemon/Pokemon';
import RandomPokemon from '../components/pokemon/RandomGenerator';
import Type from '../components/pokemon/Type';
import Types from '../components/pokemon/Types';
// import Home from '../components/home/Home';
// import Dashboard from '../components/hospital/dashboard/Dashboard';
// import Department from '../components/hospital/department/Department';

const RouteBlock = () => {
  return (
    <Switch>
      <Route exact path="/" component={RandomPokemon} />
      <Route exact path="/about" component={Settings} />
      <Route exact path="/pokemon" component={Library} />
      <Route exact path="/pokemon/types" component={Types} />
      <Route exact path="/pokemon/type/:name" component={Type} />
      <Route exact path="/pokemon/:id" component={Pokemon} />
      {/* <Route exact path="/" component={Home} />
      <Route path="/hospital/dashboard" component={Dashboard} />
      <Route path="/hospital/department" component={Department} />
      <Route path="/settings" component={Settings} />
      <Route path="/hospital/report" component={Reports} />
      <Route path="/hospital/task-board" component={Reports} />
      <Route path="/patient/dashboard" component={Reports} />
      <Route path="/patient/profile" component={Reports} />
      <Route path="/doctor/profile" component={Reports} />
      <Route path="/donation/dashboard" component={Reports} /> */}
    </Switch>
  );
}

export default RouteBlock;