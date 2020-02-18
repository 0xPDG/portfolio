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
`;

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <a href='https://github.com/PGaujac' target='_blank'>
            <Github size='50px' />
          </a>
          <a href='https://fr.linkedin.com/pierre-de-gaujac' target='_blank'>
            <LinkedinSquare size='50px' />
          </a>
          <a href='mailto:degaujacp@gmail.com' target='_blank'>
            <Email size='50px' />
          </a>
        </Col>
        <Col></Col>
        <Col>
          <FooterText>Site réalisé par Pierre de Gaujac.</FooterText>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
