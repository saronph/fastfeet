import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';
import {parseISO, format} from 'date-fns';

import api from '~/services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {id} = payload;

    const response = yield call(api.get, `deliveryman/${id}/deliveries`);

    yield put(
      signInSuccess(id, {
        name: response.data.name,
        email: response.data.email,
        created_at: format(parseISO(response.data.created_at), 'dd/MM/yyyy'),
        avatar: response.data.avatar,
      }),
    );

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Authentication failed', 'Login error, check your data');
    yield put(signFailure());
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
