import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const StyledHeader = styled.header`
  left: -87px;
  position: absolute;
  top: 0px;
`;

const LogoContainer = styled.div`
  width: 50px;

  img {
    width: 100%;
  }
`;

const Header = ({ children }) => (
  <StyledHeader>
    <LogoContainer>
      <img src={logo} />
    </LogoContainer>
  </StyledHeader>
);

export default Header;
