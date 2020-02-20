import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';

const Heading = styled.h3`
  text-align: center;
  color: #e5e5e5;
  margin: 3rem 0 2rem 0;
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 1rem 0 1rem 0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 1.2rem 0 1.2rem 0;
  }
`;

const Paragraph = styled.p`
  color: #e5e5e5;
  font-size: 1.4rem;
  text-align: center;
  padding: 2rem 3rem 2rem 3rem;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 1rem 1.5rem 1rem 1.5rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 1rem 1.5rem 2rem 1.5rem;
  }
`;

const Logo = styled.img`
  padding: 0 1rem 0 1rem;
  &:hover {
    transform: scale(1.2);
  }
  transition: transform 0.3s ease;
  @media (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

const About = () => {
  return (
    <Container style={{ padding: 0 }} fluid>
      <Row className='align-items-center'>
        <Col xs={12} md={6}>
          <Bounce left>
            <Heading>Mon parcours</Heading>
            <Paragraph>
              Passionné d'informatique depuis le plus jeune âge, songeant depuis
              quelques mois à me reconvertir j'ai commencé à m'auto former au
              développement web début 2019. En novembre 2019 j'ai sauté le pas
              et je me suis inscrit dans un bootcamp JavaScript.
            </Paragraph>

            <Heading>Ma situation</Heading>
            <Paragraph>
              Actuellement à la recherche d'un poste de développeur JavaScript.
              <br /> Je suis ouvert à tout types de postes
              (front/back/fullstack)
            </Paragraph>
          </Bounce>
        </Col>
        <Col xs={4} md={2}>
          <Bounce right>
            <Logo className='img-fluid' fluid src='/img/js.png' />
          </Bounce>
        </Col>
        <Col xs={4} md={2}>
          <Bounce right>
            <Logo className='img-fluid' fluid src='/img/react.png' />
          </Bounce>
        </Col>
        <Col xs={4} md={2}>
          <Bounce right>
            <Logo className='img-fluid' fluid src='/img/node.png' />
          </Bounce>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
