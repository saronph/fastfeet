import React from 'react';

import logo from '~/assets/logo2x.png';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Fastfeet" />

      <form>
        <p>YOUR EMAIL</p>
        <input type="email" placeholder="example@email.com" />
        <p>YOUR PASSWORD</p>
        <input type="password" placeholder="********" />

        <button type="submit">Access the system</button>
      </form>
    </>
  );
}
