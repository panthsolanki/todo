import React, { Component } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import add from './pages/add';
import list from './pages/list';
import login from './pages/login';
import nopage from './pages/nopage';
import { directive } from "@babel/types";

class Routers extends Component {
  render(){
    return(
      <Switch>
        <Route exact strict path="/" component={login} />
        <Route path="/add" component={add} />
        <Route path="/list" component={list} />
        <Route component={nopage} />
      </Switch>
    )
  }
}

export default Routers