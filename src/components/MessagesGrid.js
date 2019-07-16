import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Errors from './Errors';
import Warnings from './Warnings';
import Infos from './Infos';

class MessagesGrid extends Component {
  render() {
    const errors = this.props.messages.filter(m => m.priority === 1);
    const warnings = this.props.messages.filter(m => m.priority === 2);
    const infos = this.props.messages.filter(m => m.priority === 3);

    return (
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item md={4}>
          <Errors errors={errors} />
        </Grid>
        <Grid item md={4}>
          <Warnings warnings={warnings} />
        </Grid>
        <Grid item md={4}>
          <Infos infos={infos} />
        </Grid>
      </Grid>
    );
  }
}

MessagesGrid.defaultProps = {
  messages: [],
};

MessagesGrid.propTypes = {
  messages: PropTypes.array,
};

export default MessagesGrid;
