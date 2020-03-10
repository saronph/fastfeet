export function registerRequest(name, email) {
  return {
    type: '@deliveryman/REGISTER_REQUEST',
    payload: { name, email },
  };
}
