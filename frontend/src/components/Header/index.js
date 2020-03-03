import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '~/assets/logoheader.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
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
              <Link to="/">Logout</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
