import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from 'react-router';
import store from "./Components/Store/store";
import {Provider} from "react-redux";
import { createBrowserHistory , History } from 'history';
import {Routes} from "./Routes/Routes";
import * as serviceWorker from './serviceWorker';
import './index.css'

const history = createBrowserHistory ();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

serviceWorker.unregister();
//reportWebVitals();
