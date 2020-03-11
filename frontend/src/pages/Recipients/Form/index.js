import React from 'react';
import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import { Container, Content } from './styles';

import { registerRequest } from '~/store/modules/deliveryman/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  street: Yup.string().required('Street is required'),
  number: Yup.number()
    .required('Number is required')
    .typeError('Number is required'),
  complement: Yup.string(),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zip_code: Yup.number()
    .required('Zip code is required')
    .typeError('Number is required'),
});

export default function RecipientsForm() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, avatar_id }) {
    dispatch(registerRequest(name, email, avatar_id));
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
              onClick={() => history.push('/deliveryman')}
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
              <InputMask
                mask="99999-999"
                id="zip_code"
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
