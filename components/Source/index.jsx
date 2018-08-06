import styled from 'styled-components';

const Source = styled.a`
  display: block;
  color: inherit;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${props => props.theme.sm}px) {
    font-size: 0.75rem;
  }
`;

export default Source;

