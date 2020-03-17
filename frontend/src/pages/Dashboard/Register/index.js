import React, { useMemo, useRef } from 'react';
import { Form, Input } from '@rocketseat/unform';
import AsyncSelect from 'react-select/async';
import * as Yup from 'yup';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
});

export default function DeliveryRegister() {
  const formRef = useRef('');

  async function loadRecipient(inputValue, callback) {
    const response = await api.get('/allRecipients', {
      params: {
        q: inputValue,
      },
    });

    const data = response.data.map(recipient => ({
      value: recipient.id,
      label: recipient.name,
    }));

    callback(data);
  }

  async function loadDeliveryman(inputValue, callback) {
    const response = await api.get('/allDeliveryman', {
      params: {
        q: inputValue,
      },
    });

    const data = response.data.map(deliveryman => ({
      value: deliveryman.id,
      label: deliveryman.name,
    }));

    callback(data);
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

        <Form schema={schema} id="form">
          <div id="data">
            <div>
              <p>Recipient</p>
              <AsyncSelect
                label="name"
                loadOptions={loadRecipient}
                name="recipient_id"
                optionType="recipients"
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
