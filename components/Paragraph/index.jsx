import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-weight: 300;
  margin: 6px 0 12px 0;
  ${props => props.onClick && css`
    cursor: pointer;
  `}

  @media (max-width: ${props => props.theme.sm}px) {
    font-size: 0.875rem;
  }
`;

export default Paragraph;
