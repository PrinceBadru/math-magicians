import React from 'react';
import PropTypes from 'prop-types';

const Answers = (props) => {
  const { value } = props;
  return <div className="results gray-bg">{value}</div>;
};

export default Answers;

Answers.propTypes = {
  value: PropTypes.number.isRequired,
};
