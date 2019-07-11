import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Api from '../api';

class MessagesRoot extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      messages: [],
    };
  }

  api = new Api({
    messageCallback: message => {
      this.messageCallback(message);
    },
  });

  componentDidMount() {
    this.api.start();
  }

  messageCallback(message) {
    const { messages } = this.state;
    this.setState({
      messages: [...messages.slice(), message],
    });
  }

  renderButton() {
    const isApiStarted = this.api.isStarted();
    return (
      <Button
        variant="contained"
        onClick={() => {
          if (isApiStarted) {
            this.api.stop();
          } else {
            this.api.start();
          }
          this.forceUpdate();
        }}
      >
        {isApiStarted ? 'Stop Messages' : 'Start Messages'}
      </Button>
    );
  }

  render() {
    return <div>{this.renderButton()}</div>;
  }
}

export default MessagesRoot;
