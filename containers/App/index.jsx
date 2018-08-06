import React from 'react';
import { hot } from 'react-hot-loader';
import styled, { injectGlobal } from 'styled-components';
import HomePage from '../HomePage';

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
  max-width: 1024px;
  margin: 0 auto;
`;

const App = () => (
  <Main>
    <HomePage />
  </Main>
);

export default hot(module)(App);
