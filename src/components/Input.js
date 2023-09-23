import React from 'react';
import PropTypes from 'prop-types';

const InputNumber = ({ className, value }) => (
  <div className={className}>{value}</div>
);

InputNumber.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputNumber;
