import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import promise from './promise';
import array from './array';
import whitelist from './whitelist';
import reducers from '../reducers';

export default function setup(done) {
  const isDev = global.isDebuggingInChrome || __DEV__;

  const logger = reduxLogger({
    predicate: () => isDev,
    collapsed: true,
    duration: true,
  });

  // Setup redux middleware
  const middleware = compose(composeWithDevTools(...[
    autoRehydrate(),
    isDev ? applyMiddleware(require('redux-immutable-state-invariant')()) : null,
    applyMiddleware(...[thunk, promise, array, logger]),
  ]));

  const store = createStore(reducers, {}, middleware);

  // Attach the store to the Chrome debug window
  if (global.isDebuggingInChrome) {
    window.store = store;
  }

  persistStore(store, { whitelist, storage: AsyncStorage }, () => done(store));
}
