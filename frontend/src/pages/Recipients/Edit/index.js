import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import { Container, Content } from './styles';

import { recipientRegister } from '~/store/modules/recipients/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  street: Yup.string().required('Street is required'),
  number: Yup.number()
    .required('Number is required')
    .typeError('Number is required'),
  complement: Yup.string(),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zip_code: Yup.string().matches(
    /^[0-9]{8}$/,
    'Zip code must be exactly 8 digits'
  ),
});

export default function RecipientsForm() {
  const dispatch = useDispatch();

  function handleSubmit({
    name,
    street,
    number,
    complement,
    city,
    state,
    zip_code,
  }) {
    dispatch(
      recipientRegister(name, street, number, complement, city, state, zip_code)
    );
  }

  return (
    <>
      <Container>
        <header>
          <p>Recipients registration</p>

          <div>
            <button
              className="return"
              type="button"
              onClick={() => history.push('/recipients')}
            >
              <div>
                <MdKeyboardArrowLeft size={25} color="#fff" />
              </div>

              <span>Return</span>
            </button>
            <button form="form" className="save" type="submit">
              <div>
                <MdAdd size={25} color="#fff" />
              </div>

              <span>Register</span>
            </button>
          </div>
        </header>
      </Container>
      <Content>
        <Form schema={schema} id="form" onSubmit={handleSubmit}>
          <div>
            <p>Name</p>
            <Input name="name" type="name" placeholder="Ex: John Doe" />
          </div>
          <div id="street">
            <div>
              <p>Street</p>
              <Input
                name="street"
                type="string"
                placeholder="Ex: Street Beethoven"
              />
            </div>
            <div>
              <p className="number">Number</p>
              <Input name="number" type="number" placeholder="Ex: 1729" />
            </div>
            <div>
              <p className="complement">Complement</p>
              <Input
                name="complement"
                type="string"
                placeholder="Ex: Apt 301"
              />
            </div>
          </div>
          <div id="city">
            <div>
              <p>City</p>
              <Input name="city" type="string" placeholder="Ex: Diadema" />
            </div>
            <div>
              <p className="state">State</p>
              <Input name="state" type="string" placeholder="Ex: São Paulo" />
            </div>
            <div>
              <p className="zip_code">Zip code</p>
              <Input
                name="zip_code"
                type="string"
                placeholder="Ex: 09960-580"
              />
            </div>
          </div>
        </Form>
      </Content>
    </>
  );
}
