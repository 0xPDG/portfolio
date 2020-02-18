import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

import Slide from 'react-reveal/Slide';
import Tada from 'react-reveal/Tada';

const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const BoxWrapper = styled.div`
  width: 25%;
`;

const StackBox = styled.div`
  background-color: #e7e7e7;
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  margin-left: 15px;
  margin-right: 15px;
  color: #000;
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
  padding: 0.7rem;
  border-bottom: 1px solid #999;
  color: #000;
`;
const Presentation = styled.h2`
  text-transform: uppercase;
  font-size: 4rem;
  color: #fff;
  text-align: center;
  margin: 4rem 0 4rem 0;
  letter-spacing: 0.5rem;
`;

const Btn = styled.a`
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  background-color: #0952eb;
  color: #fff;
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

      <Wrapper>
        <BoxWrapper>
          <Slide left>
            <StackBox>
              <BoxHeading>DIBSTER DASHBOARD</BoxHeading>
              <Image fluid src='/img/dibster.png'></Image>
              <BoxContent>
                <BoxDescription>
                  Réalisation d'un back-office pour la start-up DIBSTER
                </BoxDescription>
                <BoxItem>Stack MERN</BoxItem>
                <BoxItem>Traitement de fichier xlsx en JSON</BoxItem>
                <BoxItem>Import/export de fichier xlsx</BoxItem>
                <BoxItem>Affichage dynamique de graphiques</BoxItem>
                <BoxItem>Authentification a deux niveaux</BoxItem>
              </BoxContent>
            </StackBox>
          </Slide>
        </BoxWrapper>

        <BoxWrapper>
          <Slide top>
            <StackBox>
              <BoxHeading>La Pierrza</BoxHeading>
              <Image fluid src='/img/pierrza.png'></Image>
              <BoxContent>
                <BoxDescription>
                  Mon premier projet ReactJS. Au départ c'était une application
                  web uniquement en front, elle est maintenant servie par une
                  API web basé sur un serveur express et une base de données
                  MongoDB
                </BoxDescription>
                <BoxItem>Stack MERN</BoxItem>
                <BoxItem>Personalisation de pizza</BoxItem>
                <BoxItem>Calcul dynamique de prix</BoxItem>
              </BoxContent>
              <Btn href='https://github.com/PGaujac/pierrza' target='_blank'>
                Voir le code
              </Btn>
            </StackBox>
          </Slide>
        </BoxWrapper>

        <BoxWrapper>
          <Slide right>
            <StackBox>
              <BoxHeading>Twipierre</BoxHeading>
              <Image fluid src='/img/twipierre.png'></Image>
              <BoxContent>
                <BoxDescription>
                  Mon premier projet MERN, application "twitter like". Je
                  travail sur le portage en appli mobile avec react native
                </BoxDescription>
                <BoxItem>Stack MERN</BoxItem>
                <BoxItem>Authentification PassportJS/Express Session</BoxItem>

                <BoxItem>
                  Composants fonctionnels et utlisation des Hooks
                </BoxItem>
              </BoxContent>
              <Btn href='https://github.com/PGaujac/twipierre' target='_blank'>
                Voir le code
              </Btn>
            </StackBox>
          </Slide>
        </BoxWrapper>
      </Wrapper>
    </div>
  );
};

export default Projects;
