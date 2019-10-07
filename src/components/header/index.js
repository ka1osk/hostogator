import React from 'react';
import {
  Container,
  Content,
  Logo,
  PageHeaderContainer,
  PageHeaderBackground,
  PageHeaderBackgroundWave,
  PageHeaderBackgroundArrowDown,
  PageHeaderDeskImage,
  PageHeaderManImage,
  PageHeaderContent,
  PageHeaderTitle,
  PageHeaderHighlight,
  PageHeaderCheckContainer,
  PageHeaderCheckContainerRow,
  PageHeaderCheckText,
} from './styles';
import logoHostgator from '../../assets/images/hostgator-logo.svg';
import deskImage from '../../assets/images/Grupo 29995.svg';
import manImage from '../../assets/images/Grupo 29996.svg';
import arrowDown from '../../assets/images/Grupo 29390.svg';

export default () => (
  <Container>
    <Content>
      <Logo src={logoHostgator} />
    </Content>
    <PageHeaderContainer>
      <PageHeaderBackground>
        <PageHeaderContent>
          <PageHeaderTitle>Hospedagem de Sites</PageHeaderTitle>
          <PageHeaderHighlight>Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</PageHeaderHighlight>
          <PageHeaderCheckContainer>
            <PageHeaderCheckContainerRow>
              <PageHeaderCheckText>99,9% de disponibilidade: seu site sempre no ar</PageHeaderCheckText>
            </PageHeaderCheckContainerRow>
            <PageHeaderCheckContainerRow>
              <PageHeaderCheckText>Suporte 24h, todos os dias</PageHeaderCheckText>
              <PageHeaderCheckText>Painel de Controle cPanel</PageHeaderCheckText>
            </PageHeaderCheckContainerRow>
          </PageHeaderCheckContainer>
        </PageHeaderContent>
      </PageHeaderBackground>
      <PageHeaderBackgroundWave>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C149.99,150.00 350.88,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#1d5297'}}></path>
        </svg>
        <PageHeaderBackgroundArrowDown src={arrowDown} />
      </PageHeaderBackgroundWave>
      <PageHeaderDeskImage src={deskImage} />
      <PageHeaderManImage src={manImage} />
    </PageHeaderContainer>
  </Container>
);