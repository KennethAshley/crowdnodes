import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  margin-top: 80px;
`;

const Tagline = styled.p`
  font-size: 20px;
  line-height: 28px;
  margin: 24px 0 0px 0;
`;

const Hero = ({ children }) => (
  <StyledHero>
    <p>For cryptocurrency enthusiasts</p>
    <h2>Quick and easy way to achieve Masternode status</h2>
    <Tagline>
      We’re building incredibly simple tools for you and your friends to obtain and use masternodes. Crowdnodes helps crypto enthusiasts find the resources and support they need to fulfill your masternode dreams.
    </Tagline>
  </StyledHero>
);

export default Hero;
