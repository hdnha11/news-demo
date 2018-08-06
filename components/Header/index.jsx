import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.svg';

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: ${props => props.theme.headerHeight}px;
  top: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);

  @media (max-width: ${props => props.theme.sm}px) {
    height: ${props => props.theme.headerHeightSM}px;
  }

  @media (max-width: ${props => props.theme.xxs}px) {
    height: ${props => props.theme.headerHeightXXS}px;
  }
`;

const Main = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
  max-width: ${props => props.theme.maxContentWidth}px;
`;

const Logo = styled.img.attrs({ src: logo })`
  position: absolute;
  height: 42%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = () => (
  <Wrapper>
    <Main>
      <Logo />
    </Main>
  </Wrapper>
);

export default Header;
