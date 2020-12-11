import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./page/Home";
import Login from './page/Login'
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/> 
        </Switch>
    </Router>
  );
}
export default App;