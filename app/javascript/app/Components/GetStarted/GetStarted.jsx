import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import discord from './discord.png';

const GetStartedContainer = styled.div`
  margin-top: 48px;
`;


const DiscordInfo = styled.div`
  align-items: center;
  display: flex;
  margin: 28px 0 16px 0;

  img {
    max-width: 20px;
    margin-right: 15px;
  }
`;

const GetStarted = () => (
  <GetStartedContainer>
    <Button>
      <i>👍🏻</i>
      <span>Discord</span>
    </Button>
    <DiscordInfo>
      <div>
        <img src={discord} />
      </div>
      <small>For now get started by joining our discord</small>
    </DiscordInfo>
  </GetStartedContainer>
);

export default GetStarted;
