import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Main from './Main';
import Header from './Header';
import ActionIcon from './ActionIcon';
import Body from './Body';

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
