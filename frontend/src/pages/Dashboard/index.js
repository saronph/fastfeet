import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import Avatar from 'react-avatar';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  Delivered,
  Pending,
  Withdrawn,
  Canceled,
} from '~/components/StatusDelivery';

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

  async function handleDelete(id) {
    const confirm = window.confirm('Are you sure you want to delete?');

    if (!confirm) {
      toast.error('Delivery not deleted');
    } else {
      await api.delete(`/deliveries/${id}`);
      toast.success('Delivery successfully deleted');
      window.location.reload();
    }
  }

  return (
    <>
      <Container>
        <header>
          <p>Deliveries management</p>
        </header>
        <div>
          <input
            type="search"
            placeholder="Search for deliveries..."
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
              <th className="recipient">Recipient</th>
              <th className="deliveryman">Deliveryman</th>
              <th className="city">City</th>
              <th className="state">State</th>
              <th className="status">Status</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map(delivery => (
              <tr key={delivery.id}>
                <td className="id">{`#${delivery.id}`}</td>
                <td className="recipient">{delivery.recipient.name}</td>
                <td className="deliveryman">
                  {delivery.deliveryman.avatar ? (
                    <img src={`${delivery.deliveryman.avatar.url}`} alt="" />
                  ) : (
                    <Avatar name={delivery.deliveryman.name} maxInitials={2} />
                  )}

                  {delivery.deliveryman.name}
                </td>
                <td className="city">{delivery.recipient.city}</td>
                <td className="state">{delivery.recipient.state}</td>
                <td className="status">
                  <Canceled />
                </td>
                <td className="actions">
                  <button type="submit" className="view">
                    View
                  </button>
                  <button type="submit" className="edit">
                    Edit
                  </button>
                  <button
                    type="button"
                    className="delete"
                    onClick={() => handleDelete(delivery.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </>
  );
}
