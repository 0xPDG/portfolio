import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
//import { FileDownload } from 'styled-icons/fa-solid';

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
  font-size: 3.5rem;
  color: #fff;

  text-align: center;
  margin: 0 0 2rem 0;
  letter-spacing: 0.5rem;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Description = styled(Presentation)`
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

// const ResumeBtn = styled.a`
//   color: #fff;
//   text-decoration: none;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #fff;
//   border-radius: 1rem;
//   &:hover {
//     background-color: #0952eb;
//     text-decoration: none;
//     color: #fff;

//     transition: all 0.5s ease;
//   }
// `;

const Mouse = styled.div`
  margin: 50px auto;
  width: 100px;
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`;
const MouseIcon = styled.div`
  width: 25px;
  height: 45px;
  border: 2px solid #fff;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  text-align: center;
`;

const MouseWheel = styled.span`
  height: 6px;
  margin: 2px auto 0;
  display: block;
  width: 3px;
  background-color: #fff;
  border-radius: 50%;
  animation: 1.6s ease infinite wheel-up-down;
  @keyframes wheel-up-down {
    0% {
      margin-top: 2px;
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    100% {
      margin-top: 20px;
      opacity: 0;
    }
  }
`;

const Header = () => {
  return (
    <Main>
      <Zoom top>
        <Presentation>Pierre de Gaujac</Presentation>
      </Zoom>
      <Zoom bottom>
        <Description>Développeur fullstack JavaScript</Description>
        {/* <ResumeBtn
          href='https://drive.google.com/open?id=1NVP9zVA1irk4IdUDpsiVBORH78gyf0uG'
          target='_blank'
          rel='noopener noreferrer'
        >
          CV <FileDownload size='15px' />
        </ResumeBtn> */}
        <Mouse>
          <MouseIcon>
            <MouseWheel></MouseWheel>
          </MouseIcon>
        </Mouse>
      </Zoom>
    </Main>
  );
};

export default Header;
