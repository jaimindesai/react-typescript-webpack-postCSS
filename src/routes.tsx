import * as React from "react";

import {App} from "./Components/App";
import {browserHistory, Router, Route} from "react-router";

export const Routes = (
<Router history={browserHistory} >
  <Route path="/" component={App}>
    <Route path="/admin"/>
  </Route>
</Router>
);
