import styled from 'styled-components';

const Right = styled.div`
  flex: 0 0 auto;
  width: 150px;

  @media (max-width: ${props => props.theme.sm}px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: ${props => props.theme.xxs}px) {
    width: 80px;
    height: 80px;
  }
`;

export default Right;
