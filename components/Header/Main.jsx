import styled from 'styled-components';

const Main = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
  max-width: ${props => props.theme.maxContentWidth}px;
`;

export default Main;
