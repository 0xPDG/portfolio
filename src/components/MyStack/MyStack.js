import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

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
  -webkit-clip-path: polygon(50% 0, 100% 15%, 100% 85%, 50% 100%, 0 100%, 0 0);
  clip-path: polygon(50% 0, 100% 15%, 100% 85%, 50% 100%, 0 100%, 0 0);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyStack = () => {
  return (
    <Container style={{ padding: 0 }} fluid>
      <Wrapper>
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <Card.Img variant='top' src='holder.js/100px160' />
                <Card.Body>
                  <Card.Title>Front-End</Card.Title>

                  <ListGroup>
                    <ListGroupItem>HTML 5</ListGroupItem>
                    <ListGroupItem>CSS 3</ListGroupItem>
                    <ListGroupItem>SASS</ListGroupItem>
                    <ListGroupItem>Bootstrap</ListGroupItem>
                    <ListGroupItem>React</ListGroupItem>
                    <ListGroupItem>Styled Components</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant='top' src='holder.js/100px160' />
                <Card.Body>
                  <Card.Title>Back-End</Card.Title>

                  <ListGroup>
                    <ListGroupItem>Node.JS</ListGroupItem>
                    <ListGroupItem>Express.JS</ListGroupItem>
                    <ListGroupItem>MongoDB</ListGroupItem>
                    <ListGroupItem>Mongoose</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant='top' src='holder.js/100px160' />
                <Card.Body>
                  <Card.Title>Deploiment/Versioning</Card.Title>

                  <ListGroup>
                    <ListGroupItem>
                      Configuration de serveur dédié
                    </ListGroupItem>
                    <ListGroupItem>Git</ListGroupItem>
                    <ListGroupItem>Google Cloud</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default MyStack;
