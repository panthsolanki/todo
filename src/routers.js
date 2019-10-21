import React, { Component } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import add from './pages/add';
import list from './pages/list';
import login from './pages/login';
import nopage from './pages/nopage';
import * as ROUTES from './constants/routes';

class Routers extends Component {
  render(){
    return(
      <Switch>
        <Route exact strict path={ROUTES.HOME} component={login} />
        <Route path={ROUTES.ADD} component={add} />
        <Route path={ROUTES.LIST} component={list} />
        <Route component={nopage} />
      </Switch>
    )
  }
}

export default Routers