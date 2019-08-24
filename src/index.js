import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { productsReducer } from "./redux/reducers";

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(productsReducer, enhancers);


ReactDOM.render(
 <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);