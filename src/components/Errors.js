import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import messagesContainerStyles from './messagesContainerStyles';
import Message from './Message';

class Errors extends Component {
  render() {
    const classes = messagesContainerStyles();
    const errors = this.props.errors.map(err => <Message {...err} />);
    return (
      <div className={classes.messagesContainer}>
        <div className={classes.title}>Error Type 1</div>
        <div className={classes.count}>Count {errors.length}</div>
        {errors}
      </div>
    );
  }
}

Errors.defaultProps = {
  errors: [],
};

Errors.propTypes = {
  errors: PropTypes.array,
};

export default Errors;
