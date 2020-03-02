import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 360px;
  max-height: 425px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  opacity: 1;

  img {
    margin: 68px 50px 0px 50px;
    max-width: 250px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 70px;

    input {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      height: 44px;
      padding: 0 15px;
      color: #444444;
      margin: 0 30px 10px;
    }

    button {
      width: 300px;
      height: 45px;
      align-self: center;
      margin: 5px 0 0;
      height: 44px;
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
    }

    span {
      color: #f64c75;
      font-weight: bold;
      margin-left: 30px;
      margin-bottom: 5px;
      margin-top: -7px;
    }

    p {
      font-size: 14px;
      font-weight: bold;
      color: #444444;
      margin: 0 0 5px 30px;
    }
  }
`;
