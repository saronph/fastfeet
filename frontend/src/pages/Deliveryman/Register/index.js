import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import { Container, Content } from './styles';
import AvatarInput from './AvatarInput/index';

import { registerRequest } from '~/store/modules/deliveryman/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
});

export default function DeliverymanRegister() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, avatar_id }) {
    dispatch(registerRequest(name, email, avatar_id));
  }

  return (
    <>
      <Container>
        <header>
          <p>Deliveryman registration</p>

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
          <AvatarInput name="avatar_id" />
          <p>Name</p>
          <Input name="name" type="name" placeholder="Ex: John Doe" />
          <p>Email</p>
          <Input name="email" type="email" placeholder="example@example.com" />
        </Form>
      </Content>
    </>
  );
}
