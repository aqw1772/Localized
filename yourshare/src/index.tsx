import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {createStore } from 'redux';
import { Provider } from 'react-redux';
const yourShareReducer = require("./redux/reducer"); // import your reducer function

<<<<<<< HEAD
let store = createStore(yourShareReducer); // create the Redux store (handing it your reducer function as a parameter)

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>, 
=======
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import yourShareReducer from "./redux/reducer"

let store = createStore(yourShareReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
>>>>>>> ad3976805f2e1a1332c79d9bff1b8c5ee11b03d0
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
