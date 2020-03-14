import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Content } from './styles';
import AvatarInput from '../Register/AvatarInput';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
});

export default function DeliverymanFormEdit({ match }) {
  const { id } = match.params;
  const [deliveryman, setDeliveryman] = useState([]);

  useEffect(() => {
    async function loadDeliveryman() {
      const response = await api.get(`deliveryman/${id}`);

      const { data } = response;

      setDeliveryman(data);
    }
    loadDeliveryman();
  }, [id]);

  async function handleEdit(data) {
    await api.put(`/deliveryman/${id}`, {
      name: data.name,
      email: data.email,
      avatar_id: data.avatar_id,
    });
    toast.success('Deliveryman edited');
    history.push('/deliveryman');
  }

  return (
    <>
      <Container>
        <header>
          <p>Deliveryman edit</p>

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

              <span>Save</span>
            </button>
          </div>
        </header>
      </Container>
      <Content>
        {deliveryman.map(deliverymanData => (
          <Form
            schema={schema}
            id="form"
            onSubmit={handleEdit}
            key={deliverymanData.id}
            initialData={deliverymanData}
          >
            <AvatarInput name="avatar_id" />
            <p>Name</p>
            <Input name="name" type="name" placeholder="Ex: John Doe" />
            <p>Email</p>
            <Input
              name="email"
              type="email"
              placeholder="example@example.com"
            />
          </Form>
        ))}
      </Content>
    </>
  );
}

DeliverymanFormEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
