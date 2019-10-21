import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() { 
    return ( 
      <div>
        <Link to='/add' >
          <span>Add todo</span>
        </Link>
        <br/>
        <Link to='/list'>
          <span>list Todo</span>
        </Link>
        <br/>
        <Link to='/'>
          <span>logout</span>
        </Link>
      </div>
    );
  }
}
 
export default Header;