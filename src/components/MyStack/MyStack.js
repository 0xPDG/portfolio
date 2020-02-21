import React from 'react';
import styled from 'styled-components';
import { Browser } from 'styled-icons/octicons';
import { Server, Tools } from 'styled-icons/fa-solid';
import Slide from 'react-reveal/Slide';
import { Container, Row, Col } from 'react-bootstrap';

const Wrapper = styled(Container)`
  min-height: 100vh;
  background-image: linear-gradient(
      167deg,
      rgba(20, 27, 65, 0.8) 50%,
      rgba(9, 82, 235, 0.4) 100%
    ),
    url('/img/main.jpg');
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 15vh, 100% 0, 100% 85vh, 0 100%);
  @media (min-width: 320px) and (max-width: 480px) {
    clip-path: none;
  }
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

const StackBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;

  transition: transform 0.3s;
  margin-left: 15px;
  margin-right: 15px;
  color: #000;
  margin-bottom: 20px;
  margin-top: 20px;
  &:hover {
    transform: scale(1.03);
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const BoxHeading = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  font-size: 1.4rem;
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
    <Wrapper fluid>
      <Row className='justify-content-center align-items-center min-vh-100'>
        <Col lg={4} md={4} sm={4} xs={12}>
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
        </Col>
        <Col lg={4} md={4} sm={4} xs={12}>
          <Slide left>
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
        </Col>
        <Col lg={4} md={4} sm={4} xs={12}>
          <Slide left>
            <StackBox>
              <ToolsIcon size='50px' />
              <BoxHeading>Divers</BoxHeading>
              <BoxContent>
                <BoxItem>Git</BoxItem>
                <BoxItem>Trello</BoxItem>
                <BoxItem>Agilité</BoxItem>
                <BoxItem>Slack </BoxItem>
              </BoxContent>
            </StackBox>
          </Slide>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default MyStack;
