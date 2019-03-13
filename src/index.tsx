import React from "react";
import { render } from "react-dom";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./app/common/duck/reducers";

import HeaderComponent from "./app/home/HeaderComponent";
import FooterComponent from "./app/home/FooterComponent";

const store = createStore(rootReducer, ["some_state"], applyMiddleware());

render(
  <div>
    <HeaderComponent className="header" />
    <FooterComponent className="footer" />
  </div>,
  document.getElementById("root")
);

module.hot.accept();
