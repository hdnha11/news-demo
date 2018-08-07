import styled from 'styled-components';

const Wrapper = styled.time`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;

  @media (max-width: ${props => props.theme.sm}px) {
    font-size: 0.75rem;
  }
`;

export default Wrapper;
