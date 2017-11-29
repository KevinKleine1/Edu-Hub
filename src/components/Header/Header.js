import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  NavItem,
  NavLink,
  Badge,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

import HeaderDropdown from './HeaderDropdown';


class Header extends Component {


  constructor(props) {
    super(props);
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }


  // testfunctions to check if authentication detects different users
  compare1(){
    const a = 's256349@mvrht.net';
    return localStorage.getItem('email') === a  
  }
  compare2(){
    const a = 's688527@mvrht.net';
    return localStorage.getItem('email') === a
  }



  //correct this part after database connection
  render() {
    const logged = this.isAuthenticated();
    const peter = this.compare1();
    const maria = this.compare2();
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <NavbarBrand href="#"></NavbarBrand>
        <NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Nav className="ml-auto" navbar>
        {
          logged && (
            <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>     
            )
        }
        {
          logged && (
            
            <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-list"></i></NavLink>
          </NavItem>
            
            )
        }
        {
          logged && (
            <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem>     
            )
        }
         {
          (logged && maria) && (
            <NavItem className="d-md-down-none">
            Hallo, Maria!
          </NavItem>
            )
        }
        {
          (logged && peter) && (
            <NavItem className="d-md-down-none">
            Hallo, Elvis!
          </NavItem>
            )
        }
          <HeaderDropdown/>
        </Nav>
        {
          logged && (
            <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
              <span className="fa fa-table fa-lg mt-4"></span>
            </NavbarToggler>   
            )
        }
        
      </header>
    )
  }
}

export default Header;
