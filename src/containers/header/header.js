import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { NavBar, Title } from "./header.styled";
import * as ROUTES from '../../constants/routes';

class Header extends Component {
  render() { 
    return ( 
      <NavBar>
        <Title>ToDo</Title>
        <div className="NavLinkWrapper">
          <NavLink to={ROUTES.ADD} className="NavLink" activeClassName="selected">
            <span>Add</span>
          </NavLink>
          <NavLink to={ROUTES.LIST} className="NavLink" activeClassName="selected">
            <span>List</span>
          </NavLink>
          <NavLink to={ROUTES.HOME} className="NavLink">
            <span>Logout</span>
          </NavLink>
        </div>
      </NavBar>
    );
  }
}
 
export default Header;