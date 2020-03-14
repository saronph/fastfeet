import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Content } from './styles';

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

export default function RecipientsFormEdit({ match }) {
  const { id } = match.params;
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get(`recipients/${id}`);

      const { data } = response;

      setRecipients(data);
    }
    loadRecipients();
  }, [id]);

  async function handleEdit(data) {
    await api.put(`/recipients/${id}`, {
      name: data.name,
      street: data.street,
      number: data.number,
      complement: data.complement,
      city: data.city,
      state: data.state,
      zip_code: data.zip_code,
    });
    toast.success('Recipient edited');
    history.push('/recipients');
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

              <span>Save</span>
            </button>
          </div>
        </header>
      </Container>
      <Content>
        {recipients.map(recipient => (
          <Form
            schema={schema}
            id="form"
            key={recipient.id}
            initialData={recipient}
            onSubmit={handleEdit}
          >
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
        ))}
      </Content>
    </>
  );
}

RecipientsFormEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
