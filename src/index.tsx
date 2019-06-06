import React from "react";
import { render } from "react-dom";
import Footer from "./app/home/FooterComponent";
import HeaderBar from "./app/home/HeaderComponent";
import UploadResume from "./app/prospect/uploadResume";

/* import { applyMiddleware, createStore } from "redux";
import rootReducer from "./app/common/duck/reducers"; */

// const store = createStore(rootReducer, ["some_state"], applyMiddleware());

render( 
  <>
    <HeaderBar />
    <UploadResume />
    <Footer />
  </>,
  document.getElementById("root")
);

module.hot.accept();
