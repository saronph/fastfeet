import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #ffffff;
  padding: 0 30px;
  border: 1px solid #dddddd;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  max-width: 1800px;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      max-height: 26px;
      max-width: 190px;
      margin-left: 30px;
      margin-right: 20px;
      padding-right: 30px;
      border-right: 1px solid #dddddd;
    }

    a {
      font-weight: bold;
      font-size: 16px;
      margin: 20px;
      color: #999999;
      opacity: 1;
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.1, '#999999')};
      }
    }

    a.selected {
      color: #444444;
    }
  }

  aside {
    display: flex;
    align-items: center;

    button {
      background: none;
      margin-top: 3px;
      border: 0;
      color: #de3b3b;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 14px;
      color: #de3b3b;
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.1, '#de3b3b')};
      }
    }
  }
`;
