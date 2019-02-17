import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const SingleButtonForm = ({buttonLabel, onClick}) => (
  <Button fullWidth={true} onClick={e => onClick()}>{buttonLabel}</Button>
);

SingleButtonForm.propTypes = {
  buttonLabel: PropTypes.string,
  onClick: PropTypes.func,
};

SingleButtonForm.defaultProps = {
  buttonLabel: 'Unknown Label',
  onClick: () => {},
};

export default SingleButtonForm;
