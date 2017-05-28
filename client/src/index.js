// we have client/src/index.js
// react
import React from 'react';
// react dom vs react native
import ReactDOM from 'react-dom';
// provider is for ... store.....
// provider from redux
// inside we can have router
import { Provider } from 'react-redux';
// create sotre and apply middle ware
import { createStore, applyMiddleware } from 'redux';
// router and history
import { Router, browserHistory } from 'react-router';
// api request
import reduxThunk from 'redux-thunk';
// my route
import routes from './routes';
// my reducers
import reducers from './reducers/index';
// actino type
import { AUTH_USER } from './actions/types';

// Import stylesheets like this, if you choose: import './public/stylesheets/base.scss';
// middle ware, thunk + create store === create store with middle ware
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// thunk, create store, reducer ===== store
const store = createStoreWithMiddleware(reducers);

// dom render
// provider with store
// router, history = browser history, routes with routes
// document query selector, class wrapper
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('.wrapper'));
