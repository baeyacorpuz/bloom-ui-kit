import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/home/Home';
import Settings from '../components/home/Setting';
import Dashboard from '../components/hospital/dashboard/Dashboard';
import Department from '../components/hospital/department/Department';
import Reports from '../components/hospital/reports/Reports';

const RouteBlock = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hospital/dashboard" component={Dashboard} />
      <Route path="/hospital/department" component={Department} />
      <Route path="/settings" component={Settings} />
      <Route path="/hospital/report" component={Reports} />
      <Route path="/hospital/task-board" component={Reports} />
      <Route path="/patient/dashboard" component={Reports} />
      <Route path="/patient/profile" component={Reports} />
      <Route path="/doctor/profile" component={Reports} />
      <Route path="/donation/dashboard" component={Reports} />
    </Switch>
  );
}
 
export default RouteBlock;