export function recipientRegister(
  name,
  street,
  number,
  complement,
  city,
  state,
  zip_code
) {
  return {
    type: '@recipients/REGISTER_REQUEST',
    payload: { name, street, number, complement, city, state, zip_code },
  };
}
