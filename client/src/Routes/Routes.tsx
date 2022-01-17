import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StoreProvider from "../Components/Store/Provider";
import RoutesPrivate from "../Routes/Private/Private";
import Counter from "../Components/counter/Container";
import Login from "../Components/presentational/lv5/page_LoginTop";

//import Login from "../App";

import Home from "../Components/presentational/lv5/Dashboard";
import NotFound from "../NotFound";

import teste from "../Components/presentational/lv5/page_login_kanri";

export function Routes() {
  return (
    <>     
      <Router>
        <StoreProvider>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/secondpage" component={teste} />
            <RoutesPrivate path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </StoreProvider>
      </Router>
    </>
  );
}
