export function registerRequest(name, email, avatar_id) {
  return {
    type: '@deliveryman/REGISTER_REQUEST',
    payload: { name, email, avatar_id },
  };
}
