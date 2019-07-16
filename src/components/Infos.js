import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

class Infos extends Component {
  render() {
    const infos = this.props.infos.map(info => <Message {...info} />);
    return (
      <div>
        <div>Info Type 3</div>
        <div>Count {infos.length}</div>
        {infos}
      </div>
    );
  }
}

Infos.defaultProps = {
  infos: [],
};

Infos.propTypes = {
  infos: PropTypes.array,
};

export default Infos;
