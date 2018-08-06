import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const ActionIcon = Icon.extend`
  position: absolute;
  top 15px;
  right: 15px;
  color: rgba(0, 0, 0, 0.58);
  cursor: pointer;
`;

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

const Header = styled.header`
  flex: 0 0 auto;
  width: 100%;
  height: 58px;
`;

const Body = styled.main`
  overflow: auto;
  flex: 1 1 auto;
`;

const Modal = ({ onClose, children, ...rest }) => (
  <Wrapper {...rest}>
    <Main>
      <Header>
        <ActionIcon onClick={onClose}>close</ActionIcon>
      </Header>

      <Body>{children}</Body>
    </Main>
  </Wrapper>
);

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  onClose: null,
  children: null,
};

export default Modal;
