import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import logo from './logo.png';

const Container = styled.div`
  position: relative;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 640px;
  width: 100%;
`;

const Hero = styled.div`
  margin-top: 80px;
`;

const Header = styled.header`
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

const Tagline = styled.p`
  font-size: 20px;
  line-height: 28px;
  margin: 24px 0 0px 0;
`;

const Button = styled.button`
  color: #ffffff;
  background-color: #FF5A5F;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  text-align: left;
  padding: 15px 30px;
  outline: none;
  width: 300px;
`;

const RequestContainer = styled.div`
  margin-top: 48px;

  small {
    margin: 28px 0 16px 0;
  }
`;

const App = () => (
  <section>
    <Container>
      <Header>
        <LogoContainer>
          <img src={logo} />
        </LogoContainer>
      </Header>
      <Hero>
        <p>For cryptocurrency enthusiasts</p>
        <h2>Quick and easy way to achieve Masternode status</h2>
        <Tagline>
          We’re building incredibly simple tools for you and your friends to obtain and use masternodes. Crowdnodes helps crypto enthusiasts find the resources and support they need to fulfill your masternode dreams.
        </Tagline>
      </Hero>
      <RequestContainer>
        <Button>Discord</Button>
        <small>For now get started by joining our discord</small>
      </RequestContainer>
    </Container>
  </section>
);

export default App;
