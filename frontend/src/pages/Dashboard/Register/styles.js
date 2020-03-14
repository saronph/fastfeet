import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1200px;
  margin: 50px 80px 0;

  p {
    font-size: 24px;
    font-weight: bold;
    color: #444444;
  }

  div {
    display: flex;
    justify-content: flex-end;

    button.return {
      margin: 5px;
      display: flex;
      justify-content: center;
      margin-top: 10px;
      width: 120px;
      height: 36px;
      background: #cccccc;
      font-weight: bold;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.07, '#CCCCCC')};
      }
      svg {
        color: #ffffff;
        margin-right: 3px;
        opacity: 1;
      }
      span {
        align-self: center;
        font-size: 18px;
      }
    }

    button.save {
      margin: 5px;
      display: flex;
      justify-content: center;
      margin-top: 10px;
      width: 120px;
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
        margin-right: 3px;
        opacity: 1;
      }
      span {
        align-self: center;
        font-size: 18px;
      }
    }
  }
`;

export const Content = styled.div`
  width: 1200px;
  margin: 20px 80px 0 80px;

  form {
    padding: 20px 0;
    background: #ffffff;
    border-radius: 4px;

    label {
      position: relative;
      margin-top: 30px;
      display: flex;
      margin: 0 auto;
      margin-top: 20px;
      height: 150px;
      width: 150px;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }

      p {
        margin-top: 90px;
        display: flex;
        justify-content: center;
        width: 85px;
        max-height: 20px;
        color: #dddddd;
      }
    }

    p {
      color: #444444;
      margin: 10px 0 5px 30px;
      font-size: 14px;
      font-weight: bold;
    }

    div#data {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    input {
      border: 1px solid #dddddd;
      border-radius: 4px;
      margin: 0 0 10px 30px;
      height: 45px;
      width: 540px;
      padding: 0 15px;
      font-size: 14px;
      color: #666666;
    }

    input#product {
      width: 1140px;
    }

    span {
      display: flex;
      color: #f64c75;
      font-weight: bold;
      margin-left: 30px;
      margin-bottom: 5px;
      margin-top: -7px;
    }
  }
`;
