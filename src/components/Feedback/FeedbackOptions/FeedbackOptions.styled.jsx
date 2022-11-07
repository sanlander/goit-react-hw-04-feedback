import styled from 'styled-components';

export const Button = styled.button`
  box-shadow: 2px 2px 5px grey;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 4px 12px;
  transition: all 250ms ease;

  :not(:last-child) {
    margin-right: 15px;
  }
  :hover {
    background-color: #b6e8f3;
  }
`;
