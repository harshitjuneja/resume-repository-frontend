import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import rootReducer from "./app/common/duck/reducers";

const store = createStore(rootReducer);
render(<div>{}</div>, document.getElementById("root"));

module.hot.accept();
