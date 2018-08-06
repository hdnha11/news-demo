import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const FORMAT = 'MMM DD, YYYY';

const Wrapper = styled.time`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;
`;

const Date = ({ children }) => {
  const dateFormatted = moment(children).format(FORMAT);

  return <Wrapper>{dateFormatted}</Wrapper>;
};

Date.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Date;
