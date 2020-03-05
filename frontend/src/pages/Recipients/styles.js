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
`;

export const Content = styled.div`
  width: 1200px;
  margin: 20px 80px 0 80px;

  table {
    border-collapse: collapse;
    border-radius: 4px;

    thead {
      font-size: 16px;
      font-weight: bold;
      color: #444444;

      th.name {
        width: 250px;
        padding-left: 50px;
        text-align: left;
      }

      th.address {
        width: 280px;
        padding-left: 50px;
        text-align: left;
      }

      th.actions {
        width: 165px;
        text-align: right;
      }
    }

    tbody {
      line-height: 57px;
      background: #ffff;
      font-size: 16px;
      color: #666666;
      border-radius: 4px;

      td {
        border-top: 15px solid #f5f5f5;
      }

      td.id {
        width: 45px;
        text-align: center;
      }

      td.name {
        width: 400px;
        text-align: left;
        padding-left: 50px;
      }

      td.address {
        width: 420px;
        padding-left: 50px;
        text-align: left;
      }

      td.actions {
        width: 330px;
        text-align: right;

        svg {
          margin-right: 10px;
        }
      }
    }
  }
`;
