import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn/index';

import Dashboard from '../pages/Dashboard/index';
import Deliveryman from '../pages/Deliveryman/index';
import Problem from '../pages/Problem/index';
import Recipients from '../pages/Recipients/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route path="/problem" component={Problem} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
    </Switch>
  );
}
