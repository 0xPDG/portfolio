import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import About from './components/About/About';
import MyStack from './components/MyStack/MyStack';

const Body = styled.section`
  background-color: #171717;
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
      </Body>
    </Container>
  );
}

export default App;
