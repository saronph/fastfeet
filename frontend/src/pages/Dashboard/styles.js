import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1700px;
  margin: 50px 80px 0;

  p {
    font-size: 24px;
    font-weight: bold;
    color: #444444;
  }

  div {
    display: flex;
    justify-content: space-between;

    input {
      border-radius: 4px;
      border: 1px solid #dddddd;
      margin-top: 30px;
      height: 36px;
      max-width: 230px;
      align-self: left;
      display: flex;
      text-align: right;
    }

    button {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      width: 142px;
      height: 36px;
      background: #7d40e7;
      font-weight: bold;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#7d40e7')};
      }

      svg {
        color: #ffffff;
        margin-right: 7px;
        opacity: 1;
      }

      span {
        align-self: center;
        font-size: 18px;
      }
    }
  }

  nav {
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-top: 30px;
    justify-content: space-between;
    font-weight: bold;
    font-size: 16px;
    color: #444444;
  }

  ul {
    height: 57px;
    display: flex;
    align-items: center;
    background: #ffffff;
    margin: 0 auto;
    border-radius: 4px;
    margin-top: 20px;
    justify-content: space-between;
    font-weight: bold;
    font-size: 16px;
    color: #444444;

    div {
      display: flex;
      justify-content: center;

      img {
        display: flex;
        margin-right: 5px;
        justify-content: center;
        height: 35px;
        width: 35px;
        border-radius: 50%;
      }

      span {
        display: flex;
        justify-content: center;
      }
    }
  }
`;
