import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import { FileDownload } from 'styled-icons/fa-solid';

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

  clip-path: polygon(0 15vh, 100% 0, 100% 85vh, 0 100%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Presentation = styled.h2`
  text-transform: uppercase;
  font-size: 4rem;
  color: #fff;
  text-align: center;
  margin: 0 0 2rem 0;
  letter-spacing: 0.5rem;
`;

const Description = styled(Presentation)`
  font-size: 2.5rem;
  font-weight: 400;
`;

const ResumeBtn = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border: 1px solid #fff;
  border-radius: 1rem;
  &:hover {
    background-color: #0952eb;
    text-decoration: none;
    color: #fff;

    transition: all 0.5s ease;
  }
`;

// const MyFileDownload = styled(FileDownload)`

//   &:hover {
//     display: block;
//   }
// `;

const Header = () => {
  return (
    <Main>
      <Zoom top>
        <Presentation>Pierre de Gaujac</Presentation>
      </Zoom>
      <Zoom bottom>
        <Description>Développeur fullstack JavaScript</Description>
        <ResumeBtn href='#'>
          CV <FileDownload size='15px' />
        </ResumeBtn>
      </Zoom>
    </Main>
  );
};

export default Header;
