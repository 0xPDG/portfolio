import React from 'react';
import styled from 'styled-components';
import { Image, Container, Row, Col } from 'react-bootstrap';

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Wrapper = styled(Container)`
  min-height: 100vh;
`;

const StackBox = styled.div`
  background-color: #e7e7e7;
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 5px;
  transition: transform 0.3s;
  color: #000;
  margin: 20px 15px 20px 15px;
  transition: transform 0.3s ease;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }
  &:hover {
    transform: scale(1.03);
  }
`;

const BoxHeading = styled.h3`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: #000;
`;

const BoxDescription = styled.p`
  text-align: center;
  font-size: 1.1rem;
  /* font-weight: 400; */
`;

const BoxContent = styled.ul`
  list-style: none;
  padding: 0;
`;
const BoxItem = styled.li`
  display: block;
  text-align: center;
  padding: 0.8rem;
  border-bottom: 1px solid #999;
  color: #000;
  font-size: 1rem;
`;
const Presentation = styled.h2`
  /* text-transform: uppercase; */
  /* font-size: 1.9rem; */
  color: #fff;
  text-align: center;
  margin: 4rem 0 4rem 0;
  /* letter-spacing: 0.5rem; */
  color: #e5e5e5;
  @media (min-width: 320px) and (max-width: 480px) {
    /* font-size: 1.5rem; */
    padding: 0 1rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const Btn = styled.a`
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  background-color: #0952eb;
  color: #fff;
  font-size: 1rem;
  margin: 0 0.5rem;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;

const Projects = () => {
  return (
    <div>
      <Fade bottom cascade>
        <Presentation>Mes réalisations</Presentation>
      </Fade>

      <Wrapper fluid>
        <Row className='justify-content-center align-items-start'>
          <Col xl={3} lg={8} md={8} sm={8} xs={12}>
            <Slide bottom>
              <StackBox>
                <BoxHeading>DIBSTER DASHBOARD</BoxHeading>
                <Image
                  fluid
                  className='img-fluid'
                  src='/img/dibster.png'
                ></Image>
                <BoxContent>
                  <BoxDescription>
                    Réalisation d'un back-office pour la start-up DIBSTER, pour
                    des raisons de confidentialité je ne peux pas mettre en
                    ligne le code source.
                  </BoxDescription>{' '}
                  <Fade delay={300} top cascade>
                    <BoxItem>Stack MERN</BoxItem>
                    <BoxItem>Traitement de fichier xlsx en JSON</BoxItem>
                    <BoxItem>Import/export de fichier xlsx</BoxItem>
                    <BoxItem>Affichage dynamique de graphiques</BoxItem>
                    <BoxItem>Authentification à deux niveaux</BoxItem>
                  </Fade>
                </BoxContent>
                <Btn
                  href='https://drive.google.com/file/d/1BwLtZnjf9V2GzVdjqw9XRrrPZ9EO2ozm/view?usp=sharing'
                  target='_blank'
                >
                  Voir PDF
                </Btn>
              </StackBox>
            </Slide>
          </Col>
          <Col xl={3} lg={8} md={8} sm={8} xs={12}>
            <Slide bottom>
              <StackBox>
                <BoxHeading>Twipierre</BoxHeading>
                <Image
                  className='img-fluid'
                  fluid
                  src='/img/twipierre.png'
                ></Image>
                <BoxContent>
                  <BoxDescription>
                    Mon premier projet MERN, application de réseau social
                    "twitter like".
                  </BoxDescription>
                  <Fade delay={300} top cascade>
                    <BoxItem>Stack MERN</BoxItem>
                    <BoxItem>Authentification PassportJS</BoxItem>

                    <BoxItem>
                      Composants fonctionnels et utilisation des Hooks
                    </BoxItem>
                    <BoxItem>
                      Gestion du state utilisateur côté client avec l'API de
                      Contexte
                    </BoxItem>
                    <BoxItem>
                      Je travaille sur le portage en application mobile en React
                      Native
                    </BoxItem>
                  </Fade>
                </BoxContent>
                <Btn
                  href='https://github.com/PGaujac/twipierre'
                  target='_blank'
                >
                  Code
                </Btn>
              </StackBox>
            </Slide>
          </Col>

          <Col xl={3} lg={8} md={8} sm={8} xs={12}>
            <Slide bottom>
              <StackBox className='h-100'>
                <BoxHeading>La Pierrza</BoxHeading>
                <Image
                  fluid
                  className='img-fluid'
                  src='/img/pierrza.png'
                ></Image>
                <BoxContent>
                  <BoxDescription>
                    Mon premier projet ReactJS. J'ai depuis mis en place une API
                    web basé sur un serveur express et une base de données
                    MongoDB.
                  </BoxDescription>
                  <Fade delay={300} top cascade>
                    <BoxItem>Stack MERN</BoxItem>
                    <BoxItem>Personalisation de pizzas</BoxItem>
                    <BoxItem>Calcul dynamique de prix</BoxItem>
                    <BoxItem>Formulaire "admin" pour l'ajout de pizzas</BoxItem>
                    <BoxItem>Animations CSS</BoxItem>
                  </Fade>
                </BoxContent>
                <Btn href='https://github.com/PGaujac/pierrza' target='_blank'>
                  Code
                </Btn>
              </StackBox>
            </Slide>
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
};

export default Projects;
