import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import { Container, Content } from './styles';

import { registerRequest } from '~/store/modules/deliveryman/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
});

export default function DeliveryRegister() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, avatar_id }) {
    dispatch(registerRequest(name, email, avatar_id));
  }

  return (
    <>
      <Container>
        <header>
          <p>Delivery registration</p>

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
        <div />

        <Form schema={schema} id="form" onSubmit={handleSubmit}>
          <div id="data">
            <div>
              <p>Recipient</p>
              <Input
                name="recipient"
                type="recipient"
                placeholder="Ex: John Doe"
              />
            </div>
            <div>
              <p>Deliveryman</p>
              <Input
                name="deliveryman"
                type="deliveryman"
                placeholder="Ex: John Doe"
              />
            </div>
          </div>
          <p>Product</p>
          <Input name="product" type="product" placeholder="Television" />
        </Form>
      </Content>
    </>
  );
}
