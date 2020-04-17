import React, {useRef, useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Form} from '@unform/mobile';
import logo from '~/assets/logo.png';
import Input from '~/components/Input';

import {signInRequest} from '~/store/modules/auth/actions';

import {Container, Background, SubmitButton} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const formRef = useRef(null);
  const [id, setId] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} style={{marginBottom: 20}} />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="id"
            value={id}
            onChangeText={setId}
            style={{marginTop: 30}}
            placeholder="Enter your ID"
            autoCorrect={false}
            keyboardType="numeric"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton
            loading={loading}
            onPress={() => formRef.current.submitForm()}>
            Enter the fastfeet
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
