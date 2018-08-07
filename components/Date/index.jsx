import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Wrapper from './Wrapper';

const FORMAT = 'MMM DD, YYYY';

const Date = ({ children }) => {
  const dateFormatted = moment(children).format(FORMAT);

  return <Wrapper>{dateFormatted}</Wrapper>;
};

Date.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Date;
