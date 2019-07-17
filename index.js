import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import reducerA from "./store/reducerA";
import reducerB from "./store/reducerB";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import myReducer from './store/myReducer'
const rootReducer = combineReducers({
   reducerA,
   reducerB,
   myReducer
  
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
