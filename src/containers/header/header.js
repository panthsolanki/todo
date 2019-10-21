import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { NavBar, Title } from "./header.styled";

class Header extends Component {
  render() { 
    return ( 
      <NavBar>
        <Title>ToDo</Title>
        <div className="NavLinkWrapper">
          <NavLink to='/add' className="NavLink" activeClassName="selected">
            <span>Add</span>
          </NavLink>
          <NavLink to='/list' className="NavLink" activeClassName="selected">
            <span>List</span>
          </NavLink>
          <NavLink to='/' className="NavLink">
            <span>Logout</span>
          </NavLink>
        </div>
      </NavBar>
    );
  }
}
 
export default Header;