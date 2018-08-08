import React from 'react';
import { hot } from 'react-hot-loader';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Main from './Main';
import Content from './Content';
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
