import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

function Message(props) {
  return (
    <Card>
      <CardContent>{this.props.message}</CardContent>
      <CardActions>
        <Button>Clear</Button>
      </CardActions>
    </Card>
  );
}

Message.propTypes = {};

export default Message;
