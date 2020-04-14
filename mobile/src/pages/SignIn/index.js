import React from 'react';
import {Image} from 'react-native';

import logo from '~/assets/logo.png';
import Input from '~/components/Input';

import {Container, Background, SubmitButton} from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} style={{marginBottom: 20}} />

        <Input
          style={{marginTop: 30}}
          placeholder="Enter your ID"
          autoCorrect={false}
        />

        <SubmitButton onPress={() => {}}>Enter the fastfeet</SubmitButton>
      </Container>
    </Background>
  );
}
