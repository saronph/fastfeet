import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Background = styled.View`
  flex: 1;
  background: #7d40e7;
`;

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#DDDDDD',
})`
  flex: 1;
  font-size: 16px;
  margin: 10px;
  color: #dddddd;
`;

export const Button = styled(RectButton)`
  height: 45px;
  background: #82bf18;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
