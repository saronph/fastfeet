import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdAdd, MdKeyboardArrowLeft, MdImage } from 'react-icons/md';

import { Container, Content } from './styles';
import AvatarInput from './AvatarInput/index';

import { registerRequest } from '~/store/modules/deliveryman/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
});

export default function DeliverymanRegister() {
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

  const preview = useMemo(() => {
    return file ? URL.createObjectURL(file) : null;
  }, [file]);

  function handleSubmit({ name, email }) {
    dispatch(registerRequest(name, email));
  }

  return (
    <>
      <Container>
        <header>
          <p>Deliveryman registration</p>

          <div>
            <button className="return" type="button">
              <div>
                <MdKeyboardArrowLeft size={25} color="#fff" />
              </div>

              <span>Return</span>
            </button>
            <button form="form" className="save" type="submit">
              <div>
                <MdAdd size={25} color="#fff" />
              </div>

              <span>Register</span>
            </button>
          </div>
        </header>
      </Container>
      <Content>
        <div />

        <Form schema={schema} id="form" onSubmit={handleSubmit}>
          <label
            id="file"
            style={{ backgroundImage: `url(${preview})` }}
            className={file ? 'has-file' : ''}
          >
            <input
              type="file"
              onChange={event => setFile(event.target.files[0])}
            />
            <MdImage size={55} />
            <p className="photo">Add photo</p>
          </label>
          <p>Name</p>
          <Input name="name" type="name" placeholder="Ex: John Doe" />
          <p>Email</p>
          <Input name="email" type="email" placeholder="example@example.com" />
        </Form>
      </Content>
    </>
  );
}
