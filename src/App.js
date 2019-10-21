import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './containers/header/header';
import RouteView from  './routers'

function App() {
  return (
    <Router>
      <Header/>
      <RouteView/>
    </Router>
  );
}

export default App;
