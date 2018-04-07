import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  align-items: center;
  color: #ffffff;
  background: linear-gradient(to right, #ff5a5f 50%, #ff4f94);
  border: none;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  text-align: left;
  padding: 15px 30px;
  outline: none;
  width: 300px;

  i {
    display: none;
  }

  &:hover {
    background: linear-gradient(to right, #ff4f94 50%, #ff5a5f);

    i {
      display: inline-block;
    }
  }
`;

const Button = ({ children }) => (
  <StyledButton>
    { children }
  </StyledButton>
);

export default Button;
  