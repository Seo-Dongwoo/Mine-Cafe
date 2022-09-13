import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = document.getElementById("root");

ReactDom.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
