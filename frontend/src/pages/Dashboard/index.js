import React from 'react';
import { MdAdd } from 'react-icons/md';
import { FaEllipsisH } from 'react-icons/fa';
import api from '~/services/api';

import logo from '~/assets/logoheader.png';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <Container>
        <header>
          <p>Deliveries management</p>
        </header>
        <div>
          <input type="search" placeholder="Search for deliveries..." />
          <button type="button">
            <div>
              <MdAdd size={25} color="#fff" />
            </div>

            <span>Register</span>
          </button>
        </div>
        <nav>
          <strong>ID</strong>
          <strong>Recipient</strong>
          <strong>Deliveryman</strong>
          <strong>City</strong>
          <strong>State</strong>
          <strong>Status</strong>
          <strong>Actions</strong>
        </nav>
        <ul>
          <span>#01</span>
          <span>Saron Medeiros</span>
          <div>
            <img size={5} src={logo} alt="avatar" />
            <span>Bee delivery</span>
          </div>
          <span>Tubarão</span>
          <span>Santa Catarina</span>
          <div>
            <span>Delivered</span>
          </div>
          <div>
            {' '}
            <FaEllipsisH />{' '}
          </div>
        </ul>
      </Container>
    </>
  );
}
