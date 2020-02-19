import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import About from './components/About/About';
import MyStack from './components/MyStack/MyStack';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
const Body = styled.section`
  background-color: #171717;
  background-image: linear-gradient(
      167deg,
      rgba(0, 0, 0, 0.8) 50%,
      rgba(0, 0, 0, 0.82) 100%
    ),
    url('/img/stars3.jpg');

  color: #fff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`;

function App() {
  return (
    <Container style={{ padding: 0 }} fluid>
      <Body>
        <Header />
        <About />
        <MyStack />
        <Projects />
        <Footer />
      </Body>
    </Container>
  );
}

export default App;
