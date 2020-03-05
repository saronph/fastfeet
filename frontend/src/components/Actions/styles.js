import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
  z-index: 1;
`;

export const ActionList = styled.div`
  position: absolute;
  left: calc(100% - 100px);
  top: 40px;
  background: #d3d3d3;
  z-index: 2;
  padding: 0 15px;
  border-radius: 4px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: 65px;
    top: -15px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #d3d3d3;
  }
`;

export const ActionView = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  padding: 10px;

  & + div {
    margin-top: 2px;
    border-top: 1px solid #f0f0f0;
  }

  svg {
    align-items: left;
    justify-content: left;
    margin-left: 15px;
  }

  button {
    font-size: 16px;
    color: #666666;
    border: 0;
    background: none;
    margin-top: 2px;
    margin-left: 5px;
  }
`;
