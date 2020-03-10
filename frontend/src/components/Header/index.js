import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logoheader.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />
          <NavLink activeClassName="selected" to="/dashboard">
            DELIVERIES
          </NavLink>
          <NavLink activeClassName="selected" to="/deliveryman">
            DELIVERYMAN
          </NavLink>
          <NavLink activeClassName="selected" to="/recipients">
            RECIPIENTS
          </NavLink>
          <NavLink activeClassName="selected" to="/problem">
            PROBLEMS
          </NavLink>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Admin Fastfeet</strong>
              <button type="button" onClick={handleSignOut}>
                Logout
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
