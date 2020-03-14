import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn/index';

import Dashboard from '../pages/Dashboard/index';
import DeliveryRegister from '../pages/Dashboard/Register';

import Deliveryman from '../pages/Deliveryman/index';
import DeliverymanRegister from '../pages/Deliveryman/Register/index';
import DeliverymanFormEdit from '../pages/Deliveryman/Edit';

import Problem from '../pages/Problem/index';

import Recipients from '../pages/Recipients/index';
import RecipientsForm from '../pages/Recipients/Form';
import RecipientsFormEdit from '../pages/Recipients/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/deliveryRegister" component={DeliveryRegister} isPrivate />

      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route
        path="/deliverymanRegister"
        component={DeliverymanRegister}
        isPrivate
      />
      <Route
        path="/deliverymanFormEdit/:id"
        component={DeliverymanFormEdit}
        isPrivate
      />

      <Route path="/problem" component={Problem} isPrivate />

      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/recipientsForm" component={RecipientsForm} isPrivate />
      <Route
        path="/recipientsFormEdit/:id"
        component={RecipientsFormEdit}
        isPrivate
      />
    </Switch>
  );
}
