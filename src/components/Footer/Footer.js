import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, LinkedinSquare } from 'styled-icons/boxicons-logos';
import { Email } from 'styled-icons/material';

const FooterText = styled.p`
  color: #fff;
  text-align: right;
  margin: 0;
  padding: 0;
  @media (min-width: 320px) and (max-width: 480px) {
    text-align: center;
    font-size: 10px;
  }
`;

const Wrapper = styled(Container)`
  min-height: 5vh;
  padding: 2rem;
  background: linear-gradient(
    167deg,
    rgba(20, 27, 65, 0.8) 50%,
    rgba(9, 82, 235, 0.4) 100%
  );
`;

const StyledGithub = styled(Github)`
  @media (min-width: 320px) and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`;

const StyledLinkedin = styled(LinkedinSquare)`
  @media (min-width: 320px) and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`;
const StyledEmail = styled(Email)`
  @media (min-width: 320px) and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`;

const Footer = () => {
  return (
    <Wrapper fluid>
      <Row>
        <Col xl={6} lg={6} md={6} sm={6} xs={6} className='align-self-end'>
          <a
            href='https://github.com/PGaujac'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledGithub size='50px' />
          </a>
          <a
            href='https://fr.linkedin.com/in/pierre-de-gaujac'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledLinkedin size='50px' />
          </a>
          <a
            href='mailto:hello@pierredegaujac.io'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StyledEmail size='50px' />
          </a>
        </Col>

        <Col xl={6} lg={6} md={6} sm={6} xs={6} className='align-self-center'>
          <FooterText>Réalisation : Pierre de Gaujac.</FooterText>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Footer;
