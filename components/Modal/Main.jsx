import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #ffffff;
  max-width: 1024px;
  width: 90%;
  left: 50%;
  top: 5%;
  bottom: 5%;
  transform: translateX(-50%);
  box-shadow: 0 2px 8px 0 rgba(103, 103, 103, 0.5);
  border-radius: 6px;
`;

export default Main;
