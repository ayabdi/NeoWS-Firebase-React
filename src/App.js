
import './App.css';
import Dashboard from './components/Dashboard'
import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
        <Route exact path ="/" component={Dashboard}/> 
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
