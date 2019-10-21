import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './containers/header/header';
import RouteView from  './routers'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="container">
          <RouteView/>
        </div>
      </div>
    </Router>
  );
}

export default App;
