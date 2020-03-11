import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signFailure } from '~/store/modules/auth/actions';

export function* registerRecipients({ payload }) {
  try {
    const { name, street, number, complement, city, state, zip_code } = payload;

    yield call(api.post, 'recipients', {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip_code,
    });

    toast.success('Registration completed.');
    history.push('/recipients');
  } catch (err) {
    toast.error('Registration failure, check data.');

    yield put(signFailure());
  }
}

export default all([
  takeLatest('@recipients/REGISTER_REQUEST', registerRecipients),
]);
