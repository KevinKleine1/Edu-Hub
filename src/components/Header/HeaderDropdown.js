import React, {Component} from 'react';
import { AUTH_CONFIG } from '../../Auth/auth0-variables';
import {withRouter} from 'react-router-dom';
import Auth from "../../Auth/Auth.js";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  Input,
  InputGroup,
  InputGroupAddon, 
  CardGroup, 
  Container, 
  Row, 
  Col, 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Card, 
  CardHeader, 
  CardBody,  
  Popover, 
  PopoverHeader, 
  PopoverBody
} from 'reactstrap';
import Auth0Lock from 'auth0-lock';

// customizing objects for the lock
var options = {
  language: 'de',
  oidcConformant: true,
  socialButtonStyle: 'small',
  rememberLastLogin: true,
  loginAfterSignUp: true,
  theme: {
    logo: 'img/logo.png',
    primaryColor: '#20a8d8',
    labeledSubmitButton: false
  },
  auth: {
    params: {param1: "value1"},
    redirect: true,
    redirectUrl: AUTH_CONFIG.callbackUrl,   //change for production
    responseType: 'token id_token',
    audience: 'https://kevkle.eu.auth0.com/userinfo',
    sso: true,
    params:{
      scope: 'openid email'
    }
   },
  languageDictionary: {
    emailInputPlaceholder: "Ihre Email",
    title: ""
  },
};


// creates a lock object with our client data to handle the login
var lock = new Auth0Lock('TAzP3VaJ1PJgDR2S5zTV0c4inUpt9A9J', 'kevkle.eu.auth0.com', options);

class HeaderDropdown extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      modal: false
    };
  }
  

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
 
  newLogin(){
    const auth = new Auth();  //deprecated, will be removed in later versions
    auth.login();
   }


   // function to show the login modal
   lockLogin(){
    lock.show();
      
    }

  // triggers logout function
  newLogout(){
    const auth = new Auth();
    auth.logout();
  }

  //toggles the dropdown
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }


  // testfunction to check if the distinguishing of the accounts works
  //delete in later version
  compare1(){
    const a = 's256349@mvrht.net';
    return localStorage.getItem('email') === a  
  }
  compare2(){
    const a = 's688527@mvrht.net';
    return localStorage.getItem('email') === a
  }

  //drops the header nav
  dropAccnt() {
    const logged = this.isAuthenticated();
    const peter = this.compare1();
    const maria = this.compare2();
    const testo = (this.compare1() || this.compare2());
    

    //change the logged states when database is connected
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} nav={true}>
        <DropdownToggle nav>

        {
        (logged && !testo) && (
            <img src={'img/avatars/NotLogged.jpg'} className="img-avatar" alt="Hallo, Elvis!"/>
            )
        }

        {
        (logged && peter) && (
            <img src={'img/avatars/8.jpg'} className="img-avatar" alt="Hallo, Elvis!"/>
            )
        }
        {
        (logged && maria) && (
            <img src={'img/avatars/5.jpg'} className="img-avatar" alt="Hallo, Maria!"/>
            )
        }
        {
          !logged && (
            <img src={'img/avatars/NotLogged.jpg'} className="img-avatar" alt="Nicht Registriert"/>
            )
        }
          
        </DropdownToggle>

        {
          (logged && !testo) && (
            <DropdownMenu right>
            <DropdownItem onClick={this.newLogout}><i className="fa fa-user"></i>Ausloggen</DropdownItem>
            </DropdownMenu>
            )
        }
        {
          logged && (
            <DropdownMenu right>
            <DropdownItem onClick={this.newLogout}><i className="fa fa-user"></i>Ausloggen</DropdownItem>
            </DropdownMenu>
            )
        }
        {
          !logged && (
            <DropdownMenu right>
            <DropdownItem onClick={this.lockLogin}><i className="fa fa-user"></i> Einloggen/Registrieren</DropdownItem>
            </DropdownMenu>
            )
        }
        
      </Dropdown>
     
    );
  }



  render() {
    const {...attributes} = this.props;
    return (
      this.dropAccnt()
    );
  }
}

export default withRouter(HeaderDropdown);
