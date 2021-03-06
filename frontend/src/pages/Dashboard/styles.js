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

      th.recipient {
        width: 250px;
        display: flex;
        margin-left: 20px;
        text-align: left;
      }

      th.deliveryman {
        width: 280px;
        margin-left: 20px;
        text-align: left;
      }

      th.city {
        width: 170px;
        text-align: left;
      }

      th.state {
        width: 170px;
        text-align: left;
      }

      th.status {
        width: 120px;
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

      td.recipient {
        width: 250px;
        padding-left: 20px;
        text-align: left;
      }

      td.deliveryman {
        width: 280px;
        margin-left: 20px;
        text-align: left;

        div {
          background: rgba(255, 255, 255, 0.5);
          vertical-align: middle;
          margin-right: 5px;
          max-width: 35px;
          max-height: 35px;
          border-radius: 50%;

          span {
            font-size: 16px;
            vertical-align: middle;
          }
        }

        img {
          background: rgba(255, 255, 255, 0.5);
          vertical-align: middle;
          margin-right: 5px;
          max-width: 35px;
          max-height: 35px;
          border-radius: 50%;
        }
      }

      td.city {
        width: 170px;
        text-align: left;
      }

      td.state {
        width: 170px;
        text-align: left;
      }

      td.status {
        width: 120px;
        text-align: left;
      }

      td.actions {
        display: column;
        text-align: right;

        button {
          font-size: 16px;
          color: #8e5be8;
          background: none;
          border: 0;
          margin: 0 3px;

          &:hover {
            background: ${darken(0.1, '#f5f5f5')};
          }
        }

        button.delete {
          font-size: 16px;
          color: #de3b3b;
          background: none;
          border: 0;
          margin: 0 3px;

          &:hover {
            background: ${darken(0.1, '#f5f5f5')};
          }
        }
      }
    }
  }
`;
