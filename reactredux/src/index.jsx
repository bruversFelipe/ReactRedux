import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LocaleProvider from "antd/lib/locale-provider";
import ptBr from "antd/lib/locale-provider/pt_BR";
import { Provider } from "react-redux";
import store from "./Store";
import "antd/dist/antd.css";

ReactDOM.render(
  <LocaleProvider locale={ptBr}>
    <Provider store={store}>
      <App />
    </Provider>
  </LocaleProvider>,

  document.getElementById("root")
);
