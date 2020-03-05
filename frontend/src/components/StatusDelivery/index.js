import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

import {
  Container,
  PendingStyle,
  WithdrawnStyle,
  CanceledStyle,
} from './styles';

export function Delivered() {
  return (
    <Container>
      <GoPrimitiveDot color="#2CA42B" size={20} />
      <p>Delivered</p>
    </Container>
  );
}

export function Pending() {
  return (
    <PendingStyle>
      <GoPrimitiveDot color="#C1BC35" size={20} />
      <p>Pending</p>
    </PendingStyle>
  );
}

export function Withdrawn() {
  return (
    <WithdrawnStyle>
      <GoPrimitiveDot color="#4D85EE" size={20} />
      <p>Withdrawn</p>
    </WithdrawnStyle>
  );
}

export function Canceled() {
  return (
    <CanceledStyle>
      <GoPrimitiveDot color="#DE3B3B" size={20} />
      <p>Canceled</p>
    </CanceledStyle>
  );
}
