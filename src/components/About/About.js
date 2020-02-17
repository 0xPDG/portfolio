import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';

const Heading = styled.h3`
  text-align: center;
  color: #fff;
`;

const Paragraph = styled.p`
  color: #fff;
  font-size: 1.4rem;
  text-align: center;
  padding-top: 1rem;
`;

const Wrapper = styled.div`
  margin: 4rem;
  padding: 2rem;
`;

const ImageWrapper = styled.div`
  padding: 15rem 2rem 0 0;
`;

const Logo = styled.img`
  padding: 0 1rem 0 1rem;
  &:hover {
    transform: scale(1.2);
  }
  transition: transform 0.3s ease;
`;

const About = () => {
  return (
    <Container style={{ padding: 0 }} fluid>
      <Row>
        <Col>
          <Bounce left>
            <Wrapper>
              <Heading>Mon parcours</Heading>
              <Paragraph>
                Passioné d'informatique depuis le plus jeune age, songeant
                depuis quelques mois a me reconvertir j'ai commencer à m'auto
                former au développement web début 2019. En novembre 2019 j'ai
                sauté le pas et je me suis inscrit dans un bootcamp JavaScript.
              </Paragraph>
            </Wrapper>
            <Wrapper>
              <Heading>Ma situation</Heading>
              <Paragraph>
                Actuellement à la recherche d'un poste de développeur
                JavaScript.
                <br /> Je suis ouvert a tout types de poste
                (front/back/fullstack)
              </Paragraph>
            </Wrapper>
          </Bounce>
        </Col>
        <Col>
          <Bounce right>
            <ImageWrapper>
              <Logo fluid src='/img/js.png' />
              <Logo fluid src='/img/react.png' />
              <Logo fluid src='/img/node.png' />
              <Logo fluid src='/img/mongo.png' />
            </ImageWrapper>
          </Bounce>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
