import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  padding-bottom: 30px;
  margin: 50px 80px 0;

  p {
    font-size: 24px;
    font-weight: bold;
    color: #444444;
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

      th.id {
        width: 100px;
        text-align: center;
      }

      th.description {
        width: 400px;
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
        width: 100px;
        text-align: center;
      }

      td.description {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 800px;
        padding-left: 50px;
        text-align: left;
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
