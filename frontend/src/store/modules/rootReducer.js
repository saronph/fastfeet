import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import deliveryman from './deliveryman/reducer';
import recipients from './recipients/reducer';

export default combineReducers({
  auth,
  user,
  deliveryman,
  recipients,
});
