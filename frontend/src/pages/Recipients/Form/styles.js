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
    padding: 20px 20px 20px 30px;
    background: #ffffff;
    border-radius: 4px;

    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    p {
      color: #444444;
      margin: 10px 0 5px 0;
      font-size: 14px;
      font-weight: bold;
    }

    input#name {
      border: 1px solid #dddddd;
      border-radius: 4px;
      margin: 0 30px 10px 0;
      height: 45px;
      width: 1140px;
      padding: 0 15px;
      font-size: 14px;
      color: #666666;
    }

    div#street {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      input#street {
        border: 1px solid #dddddd;
        border-radius: 4px;
        margin: 0 30px 10px 0;
        height: 45px;
        width: 750px;
        padding: 0 15px;
        font-size: 14px;
        color: #666666;
      }

      input#number {
        border: 1px solid #dddddd;
        border-radius: 4px;
        margin: 0 20px 10px 0;
        height: 45px;
        width: 150px;
        padding: 0 15px;
        font-size: 14px;
        color: #666666;
      }

      p.number {
        margin: 10px 0 5px 0;
      }

      input#complement {
        border: 1px solid #dddddd;
        border-radius: 4px;
        margin: 0 30px 10px 0;
        height: 45px;
        width: 190px;
        padding: 0 15px;
        font-size: 14px;
        color: #666666;
      }

      p.complement {
        margin: 10px 0 5px 0;
      }
    }

    div#city {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      input#city {
        border: 1px solid #dddddd;
        border-radius: 4px;
        margin: 0 30px 10px 0;
        height: 45px;
        width: 550px;
        padding: 0 15px;
        font-size: 14px;
        color: #666666;
      }

      input#state {
        border: 1px solid #dddddd;
        border-radius: 4px;
        margin: 0 20px 10px 0;
        height: 45px;
        width: 260px;
        padding: 0 15px;
        font-size: 14px;
        color: #666666;
      }

      p.state {
        margin: 10px 0 5px 0;
      }

      input#zip_code {
        border: 1px solid #dddddd;
        border-radius: 4px;
        margin: 0 30px 10px 0;
        height: 45px;
        width: 280px;
        padding: 0 15px;
        font-size: 14px;
        color: #666666;
      }

      p.zip_code {
        margin: 10px 0 5px 0;
      }
    }

    span {
      display: flex;
      color: #f64c75;
      font-weight: bold;
      margin-bottom: 5px;
      margin-top: -7px;
    }
  }
`;
