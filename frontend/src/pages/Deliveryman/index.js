import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import Avatar from 'react-avatar';

import api from '~/services/api';

import { ActionsMinor } from '~/components/Actions';

import { Container, Content } from './styles';

export default function Dashboard() {
  const [deliveries, setDeliveries] = useState([]);
  const [product, setProduct] = useState('');

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries');

      const { data } = response;

      setDeliveries(data);
    }
    loadDeliveries();
  }, [product]);

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
            onChange={e => setProduct(e.target.value)}
          />
          <button type="button">
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
            {deliveries.map(delivery => (
              <tr key={delivery.id}>
                <td className="id">{`#${delivery.deliveryman.id}`}</td>
                <td className="avatar">
                  <Avatar name={delivery.deliveryman.name} maxInitials={2} />
                </td>
                <td className="name">{delivery.deliveryman.name}</td>
                <td className="email">{delivery.deliveryman.email}</td>
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
