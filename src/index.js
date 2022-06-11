import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "redux/store.js"
import "react-big-calendar/lib/css/react-big-calendar.css";

Modal.setAppElement("#root");

ReactDOM.render(
  <Provider store={store}>
  <PersistGate persistor={persistor}>
  <App />
  </PersistGate>
  </Provider>,
  document.getElementById("root")
);
