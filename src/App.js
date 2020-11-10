import "./App.css";
import Main from "./components/layout/Main";
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
 
  return (
    <Router>
      <Fragment>
      <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path="/dashboard" component={Main} />
      </Fragment>
    </Router>
  );
}

export default App;
