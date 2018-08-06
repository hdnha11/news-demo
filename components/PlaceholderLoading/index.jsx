import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  from {
    transform: translateX(-30%);
  }

  to {
    transform: translateX(30%);
  }
`;

const PlaceholderLoading = styled.div`
  position: relative;

  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    z-index: 1;
    width: 500%;
    margin-left: -250%;
    animation: ${loadingAnimation} 0.8s linear infinite;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 46%,
        rgba(255, 255, 255, 0.35) 50%,
        rgba(255, 255, 255, 0) 54%
      )
      50% 50%;
  }
`;

export default PlaceholderLoading;
