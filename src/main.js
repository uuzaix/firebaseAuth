const React = require('react');
const ReactDOM = require('react-dom');
const { createStore, applyMiddleware } = require('redux');
const { Provider, connect } = require('react-redux');
const createLogger = require('redux-logger');
const ReduxThunk = require('redux-thunk').default;

const firebase = require('./firebase.js');
const { auth } = require('./auth/reducer.js');
const { App } = require('./views/components/header.js');



const store = createStore(
  auth,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    ReduxThunk,
    createLogger({
      collapsed: true,
      diff: true
    }))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);