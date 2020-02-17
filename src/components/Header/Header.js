import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

const Main = styled.header`
  min-height: 100vh;
  background-image: linear-gradient(
      167deg,
      rgba(20, 27, 65, 0.8) 50%,
      rgba(9, 82, 235, 0.4) 100%
    ),
    url('/img/main2.jpg');
  background-size: cover;
  background-position: top;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 100%, 0 15%);
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 82%); */
  /* clip-path: polygon(0 17%, 100% 0, 100% 100%, 0 83%); */
  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 100%, 0 15%);

  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 23% 80%); Needs media Q */
  /* clip-path: polygon(80% 0, 80% 64%, 100% 64%, 49% 100%, 0 64%, 20% 64%, 20% 0); Down Arrow Needs Media Q */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: auto;
`;

const Presentation = styled.h2`
  text-transform: uppercase;
  font-size: 4rem;
  color: #fff;
  text-align: center;
  margin: 0 0 2rem 0;
`;

const Description = styled(Presentation)`
  font-size: 2.5rem;
  font-weight: 400;
`;

const Header = () => {
  return (
    <Container style={{ padding: 0 }} fluid>
      <Row>
        <Col>
          <Main>
            <Zoom top>
              <Presentation>Pierre de Gaujac</Presentation>
            </Zoom>
            <Zoom bottom>
              <Description>Développeur fullstack JavaScript</Description>
            </Zoom>
          </Main>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
