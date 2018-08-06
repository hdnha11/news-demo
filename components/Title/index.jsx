import styled, { css } from 'styled-components';

const Title = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 1.25rem;
  ${props => props.onClick && css`
    cursor: pointer;
  `}

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export default Title;
