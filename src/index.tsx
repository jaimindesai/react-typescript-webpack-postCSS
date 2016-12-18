import * as React from "react";
import * as ReactDOM from "react-dom";

import "./public/css/app.pcss";

import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";

/* TODO : its temporary */
import {rootReducer as reducers} from "./Components/App/Reducer";
import {Routes} from "./routes";

const createStoreWithMiddleware = applyMiddleware()(createStore);

 ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {Routes}
  </Provider>,
 document.getElementById("app")
);
