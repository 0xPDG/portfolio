import React from 'react';
import styled from 'styled-components';
import { Browser } from 'styled-icons/octicons';
import { Server, Tools } from 'styled-icons/fa-solid';
import Slide from 'react-reveal/Slide';

const Wrapper = styled.div`
  height: 100vh;
  background-image: linear-gradient(
      167deg,
      rgba(20, 27, 65, 0.8) 50%,
      rgba(9, 82, 235, 0.4) 100%
    ),
    url('/img/main.jpg');
  background-size: cover;
  background-position: top;

  clip-path: polygon(0 15vh, 100% 0, 100% 85vh, 0 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BrowserIcon = styled(Browser)`
  margin: 0 auto 1rem auto;
`;

const ServerIcon = styled(Server)`
  margin: 0 auto 1rem auto;
`;

const ToolsIcon = styled(Tools)`
  margin: 0 auto 1rem auto;
`;

const BoxWrapper = styled.div`
  width: 25%;
`;
const StackBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  margin-left: 15px;
  margin-right: 15px;
  color: #000;

  &:hover {
    transform: scale(1.03);
  }
`;

const BoxHeading = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  color: #000;
`;

const BoxContent = styled.ul`
  list-style: none;
  padding: 0;
`;
const BoxItem = styled.li`
  display: block;
  text-align: center;
  padding: 0.7rem;
  border-bottom: 1px solid #999;
  color: #000;
`;

const MyStack = () => {
  return (
    <Wrapper>
      <BoxWrapper>
        <Slide left>
          <StackBox>
            <BrowserIcon size='50px' />
            <BoxHeading>Front</BoxHeading>
            <BoxContent>
              <BoxItem>HTML 5</BoxItem>
              <BoxItem>CSS 3 </BoxItem>
              <BoxItem>JavaScript</BoxItem>
              <BoxItem>ReactJS</BoxItem>
            </BoxContent>
          </StackBox>
        </Slide>
      </BoxWrapper>

      <BoxWrapper>
        <Slide top>
          <StackBox>
            <ServerIcon size='50px' />
            <BoxHeading>Back</BoxHeading>
            <BoxContent>
              <BoxItem>Node.JS</BoxItem>
              <BoxItem>Express.JS</BoxItem>
              <BoxItem>MongoDB</BoxItem>
              <BoxItem>Mongoose</BoxItem>
            </BoxContent>
          </StackBox>
        </Slide>
      </BoxWrapper>

      <BoxWrapper>
        <Slide right>
          <StackBox>
            <ToolsIcon size='50px' />
            <BoxHeading>Divers</BoxHeading>
            <BoxContent>
              <BoxItem>Git</BoxItem>
              <BoxItem>Trello</BoxItem>
              <BoxItem>Methodes Agiles</BoxItem>
              <BoxItem>Slack </BoxItem>
            </BoxContent>
          </StackBox>{' '}
        </Slide>
      </BoxWrapper>
    </Wrapper>
  );
};

export default MyStack;
