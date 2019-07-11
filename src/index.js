import React from 'react';
import ReactDOM from 'react-dom';
import MessagesRoot from './components/MessagesRoot';

const NewApp = require('./components/MessagesRoot').default;

function renderApp(App) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp(MessagesRoot);

if (module.hot) {
  module.hot.accept('./components/MessagesRoot', () => {
    renderApp(NewApp);
  });
}
