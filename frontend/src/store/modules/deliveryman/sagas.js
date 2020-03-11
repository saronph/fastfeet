import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signFailure } from '~/store/modules/auth/actions';

export function* registerDeliveryman({ payload }) {
  try {
    const { name, email, avatar_id } = payload;

    yield call(api.post, 'deliveryman', {
      name,
      email,
      avatar_id,
    });

    toast.success('Registration completed.');
    history.push('/deliverymanRegister');
  } catch (err) {
    toast.error('Registration failure, check data.');

    yield put(signFailure());
  }
}

export default all([
  takeLatest('@deliveryman/REGISTER_REQUEST', registerDeliveryman),
]);
