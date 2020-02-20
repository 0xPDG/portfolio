import React from 'react';
import styled from 'styled-components';
import { Image, Container, Row, Col } from 'react-bootstrap';

import Slide from 'react-reveal/Slide';

const Wrapper = styled(Container)`
  min-height: 100vh;
`;

const StackBox = styled.div`
  background-color: #e7e7e7;
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
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
  font-weight: 700;
  text-align: center;
  color: #000;
`;

const BoxDescription = styled.p`
  text-align: center;
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
  font-size: 1.3rem;
`;
const Presentation = styled.h2`
  text-transform: uppercase;
  font-size: 3rem;
  color: #fff;
  text-align: center;
  margin: 4rem 0 4rem 0;
  letter-spacing: 0.5rem;
  color: #e5e5e5;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.5rem;
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
      <Slide top>
        <Presentation>Mes réalisations</Presentation>
      </Slide>

      <Wrapper fluid>
        <Row className='justify-content-center align-items-start'>
          <Col xl={3} lg={8} md={8} sm={8} xs={12}>
            <Slide right>
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
                  </BoxDescription>
                  <BoxItem>Stack MERN</BoxItem>
                  <BoxItem>Traitement de fichier xlsx en JSON</BoxItem>
                  <BoxItem>Import/export de fichier xlsx</BoxItem>
                  <BoxItem>Affichage dynamique de graphiques</BoxItem>
                  <BoxItem>Authentification a deux niveaux</BoxItem>
                </BoxContent>
                <Btn href='#'>Voir PDF</Btn>
              </StackBox>
            </Slide>
          </Col>
          <Col xl={3} lg={8} md={8} sm={8} xs={12}>
            <Slide right>
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
                  <BoxItem>Stack MERN</BoxItem>
                  <BoxItem>Authentification PassportJS</BoxItem>

                  <BoxItem>
                    Composants fonctionnels et utilisation des Hooks
                  </BoxItem>
                  <BoxItem>
                    Gestion du state utilisateur coté client avec l'API de
                    Contexte
                  </BoxItem>
                  <BoxItem>
                    Je travail sur le portage en application mobile en React
                    Native
                  </BoxItem>
                </BoxContent>
                <Btn
                  href='https://github.com/PGaujac/twipierre'
                  target='_blank'
                >
                  Code
                </Btn>
                <Btn href='#'>Demo</Btn>
              </StackBox>
            </Slide>
          </Col>

          <Col xl={3} lg={8} md={8} sm={8} xs={12}>
            <Slide right>
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
                  <BoxItem>Stack MERN</BoxItem>
                  <BoxItem>Personalisation de pizzas</BoxItem>
                  <BoxItem>Calcul dynamique de prix</BoxItem>
                  <BoxItem>Formulaire "admin" pour l'ajout de pizzas</BoxItem>
                  <BoxItem>Animations CSS</BoxItem>
                </BoxContent>
                <Btn href='https://github.com/PGaujac/pierrza' target='_blank'>
                  Code
                </Btn>
                <Btn href='#'>Demo</Btn>
              </StackBox>
            </Slide>
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
};

export default Projects;
