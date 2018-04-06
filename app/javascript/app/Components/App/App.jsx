import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Header from '../Header';
import Hero from '../Hero';
import GetStarted from '../GetStarted';


const Container = styled.div`
  position: relative;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 640px;
  width: 100%;
`;
const App = () => (
  <section>
    <Container>
      <Header />
      <Hero />
      <GetStarted />
    </Container>
  </section>
);

export default App;
