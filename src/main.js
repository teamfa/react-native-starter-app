import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';

import setup from './store/setup';
import scenes from './scenes';

global.isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

function bootstrap() {
  // Setup any services here... e.g. Parse, Facebook SDK etc

  class Root extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: null,
      };
    }

    componentDidMount() {
      setup(store => {
        this.setState({
          isLoading: false,
          store,
        });
      });
    }

    render() {
      if (this.state.isLoading) {
        // TODO Render splash screen whilst store is bootstrapping
        return null;
      }

      return (
        <Provider store={this.state.store}>
          <Router scenes={scenes} />
        </Provider>
      );
    }
  }

  return Root;
}

export default bootstrap();
