import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import deliveryman from './deliveryman/sagas';
import recipients from './recipients/sagas';

export default function* rootSaga() {
  return yield all([auth, user, deliveryman, recipients]);
}
