import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import Avatar from 'react-avatar';

import api from '~/services/api';
import history from '~/services/history';

import { ActionsMinor } from '~/components/Actions';

import { Container, Content } from './styles';

export default function Deliveryman() {
  const [deliveryman, setDeliveryman] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    async function loadDeliveryman() {
      const response = await api.get('deliveryman');

      const { data } = response;

      setDeliveryman(data);
    }
    loadDeliveryman();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <>
      <Container>
        <header>
          <p>Deliveryman management</p>
        </header>
        <div>
          <input
            type="search"
            placeholder="Search for deliveryman..."
            onChange={e => setName(e.target.value)}
          />
          <button
            type="button"
            onClick={() => history.push('/deliverymanRegister')}
          >
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
              <th className="recipient">Avatar</th>
              <th className="deliveryman">Name</th>
              <th className="deliveryman">Email</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {deliveryman.map(deliverymanData => (
              <tr key={deliverymanData.id}>
                <td className="id">{`#${deliverymanData.id}`}</td>
                <td className="avatar">
                  <Avatar name={deliverymanData.name} maxInitials={2} />
                </td>
                <td className="name">{deliverymanData.name}</td>
                <td className="email">{deliverymanData.email}</td>
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
