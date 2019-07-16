import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

class Warnings extends Component {
  render() {
    const warnings = this.props.warnings.map(warning => <Message {...warning} />);
    return (
      <div>
        <div>Warning Type 2</div>
        <div>Count {warnings.length}</div>
        {warnings}
      </div>
    );
  }
}

Warnings.defaultProps = {
  warnings: [],
};

Warnings.propTypes = {
  warnings: PropTypes.array,
};

export default Warnings;
