import styled from 'styled-components';

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

export default Wrapper;
