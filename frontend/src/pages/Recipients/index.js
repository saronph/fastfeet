import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { ActionsMinor } from '~/components/Actions';

import { Container, Content } from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      const { data } = response;

      setRecipients(data);
    }
    loadRecipients();
  }, [name]);

  return (
    <>
      <Container>
        <header>
          <p>Recipients management</p>
        </header>
        <div>
          <input
            type="search"
            placeholder="Search for recipients..."
            onChange={e => setName(e.target.value)}
          />
          <button type="button" onClick={() => history.push('/recipientsForm')}>
            <div>
              <MdAdd size={25} color="#fff" />
            </div>

            <span>Register</span>
          </button>
        </div>
      </Container>
      <Content>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th className="name">Name</th>
              <th className="address">Address</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipients.map(recipient => (
              <tr key={recipient.id}>
                <td className="id">{`#${recipient.id}`}</td>

                <td className="name">{recipient.name}</td>
                <td className="address">
                  {recipient.street}, {recipient.number}, {recipient.city} -{' '}
                  {recipient.state}
                </td>
                <td className="actions">
                  <ActionsMinor />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </>
  );
}
