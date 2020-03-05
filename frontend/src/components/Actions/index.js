import React, { useState } from 'react';

import { FaEllipsisH, FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';

import { Container, Badge, ActionList, ActionView } from './styles';

export default function Actions() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <FaEllipsisH color="#666666" size={20} />
      </Badge>

      <ActionList visible={visible}>
        <ActionView>
          <FaEye color="#8E5BE8" size={14} />
          <button type="button">View</button>
        </ActionView>
        <ActionView>
          <FaPen color="#8E5BE8" size={14} />
          <button type="button">Edit</button>
        </ActionView>
        <ActionView>
          <FaTrashAlt color="#DE3B3B" size={14} />
          <button type="button">Delete</button>
        </ActionView>
      </ActionList>
    </Container>
  );
}

export function ActionsMinor() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <FaEllipsisH color="#666666" size={20} />
      </Badge>

      <ActionList visible={visible}>
        <ActionView>
          <FaPen color="#8E5BE8" size={14} />
          <button type="button">Edit</button>
        </ActionView>
        <ActionView>
          <FaTrashAlt color="#DE3B3B" size={14} />
          <button type="button">Delete</button>
        </ActionView>
      </ActionList>
    </Container>
  );
}
