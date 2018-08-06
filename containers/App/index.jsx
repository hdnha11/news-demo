import React from 'react';
import { hot } from 'react-hot-loader';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import Header from '../../components/Header';
import HomePage from '../HomePage';
import theme from '../../themes/default';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.84);
  }
`;

const Main = styled.div`
  max-width: ${props => props.theme.maxContentWidth}px;
  margin: 0 auto;
`;

const Content = styled.div`
  margin-top: ${props => props.theme.headerHeight}px;
  padding-top: 32px;

  @media (max-width: ${props => props.theme.sm}px) {
    margin-top: ${props => props.theme.headerHeightSM}px;
  }

  @media (max-width: ${props => props.theme.xxs}px) {
    margin-top: ${props => props.theme.headerHeightXXS}px;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Main>
      <Header />

      <Content>
        <HomePage />
      </Content>
    </Main>
  </ThemeProvider>
);

export default hot(module)(App);
