import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { ActionsProblems } from '~/components/Actions';

import { Container, Content } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('problems');

      const { data } = response;

      setProblems(data);
    }
    loadProblems();
  }, []);

  return (
    <>
      <Container>
        <header>
          <p>Delivery problems</p>
        </header>
      </Container>
      <Content>
        <table>
          <thead>
            <tr>
              <th className="id">Delivery ID</th>
              <th className="description">Description</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {problems.map(problem => (
              <tr key={problem.id}>
                <td className="id">{`#${problem.delivery_id}`}</td>

                <td className="description">{problem.description}</td>
                <td className="actions">
                  <ActionsProblems />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </>
  );
}
