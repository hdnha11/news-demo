import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

const Button = ({
  big, outline, children, ...rest
}) => (
  <StyledButton big={big} outline={outline} {...rest}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  big: PropTypes.bool,
  outline: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  big: false,
  outline: false,
};

export default Button;
