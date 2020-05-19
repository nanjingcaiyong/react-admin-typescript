import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './components/router'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {  applyMiddleware, compose, createStore  } from 'redux'
import reducers from './store'
import { createEpicMiddleware } from "redux-observable";

import epics from "./epics";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}
const epicMiddleware = createEpicMiddleware<
  any,
  any,
  any
  >();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create store
function configureStore(initialState?: any) {
  // configure middlewares
  const middlewares = [
    epicMiddleware,
  ];
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  // create store
  return createStore(
    reducers,
    initialState,
    enhancer
  );
}

const store = configureStore();
epicMiddleware.run(epics);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router></Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
