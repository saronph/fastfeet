import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 25px;
  border-radius: 10px;
  background: #dff0df;

  svg {
    margin-left: 2px;
  }

  p {
    font-size: 14;
    font-weight: bold;
    color: #2ca42b;
  }
`;

export const PendingStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 25px;
  border-radius: 10px;
  background: #f0f0df;

  svg {
    margin-left: 2px;
  }

  p {
    font-size: 14;
    font-weight: bold;
    color: #c1bc35;
  }
`;

export const WithdrawnStyle = styled.div`
  display: flex;
  align-items: center;
  width: 110px;
  height: 25px;
  border-radius: 10px;
  background: #bad2ff;

  svg {
    margin-left: 2px;
  }

  p {
    font-size: 14;
    font-weight: bold;
    color: #4d85ee;
  }
`;

export const CanceledStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 25px;
  border-radius: 10px;
  background: #fab0b0;

  svg {
    margin-left: 2px;
  }

  p {
    font-size: 14;
    font-weight: bold;
    color: #de3b3b;
  }
`;
