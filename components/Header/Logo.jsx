import styled from 'styled-components';
import logo from '../../images/logo.svg';

const Logo = styled.img.attrs({ src: logo })`
  position: absolute;
  height: 42%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Logo;
