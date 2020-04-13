import React from 'react';
import {Image} from 'react-native';

import Logo from '~/assets/fastfeet-logo.png';

import {Container, Background, Input, Button} from './styles';

export default function SignIn({children, ...rest}) {
  return (
    <Background>
      <Container {...rest}>
        <Image source={Logo} size={45} />
        <Input style={{marginTop: 30}} placeholder="Enter you ID" />
        <Button />
      </Container>
    </Background>
  );
}
