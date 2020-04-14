import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Background = styled.View`
  flex: 1;
  background: #7d40e7;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
  width: 100%;
`;
