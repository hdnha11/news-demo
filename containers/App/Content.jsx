import styled from 'styled-components';

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

export default Content;
