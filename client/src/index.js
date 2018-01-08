import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import App from './components/App.jsx';

// store creation
const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  , document.getElementById('app')
);