import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  loading: false,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliveryman/REGISTER_REQUEST': {
        draft.token = action.payload.token;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
