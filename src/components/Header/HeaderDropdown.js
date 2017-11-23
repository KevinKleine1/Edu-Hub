import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Auth from "../../Auth/Auth.js";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavDropdown,
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
import {lock} from 'auth0-lock';

import LoginForm from '../Forms/LoginForm';


class HeaderDropdown extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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
    const auth = new Auth();
    auth.login();

  }
  newLogout(){
    const auth = new Auth();
    auth.logout();
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggleModal() {
    this.setState({     
      modal: !this.state.modal
    });
  }

  dropAccnt() {
    const logged = this.isAuthenticated();
    return (
      <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
        {
          logged && (
            <img src={'img/avatars/8.jpg'} className="img-avatar" alt="Hallo Elvis!"/>
            )
        }
        {
          !logged && (
            <img src={'img/avatars/NotLogged.jpg'} className="img-avatar" alt="Nicht Registriert"/>
            )
        }
          
        </DropdownToggle>
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
            <DropdownItem onClick={this.toggleModal}><i className="fa fa-user"></i> Einloggen/Registrieren</DropdownItem>
            </DropdownMenu>
            )
        }
        
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
      <ModalHeader toggle={this.toggleModal}>Jetzt Einloggen</ModalHeader>
      <ModalBody>
      <h1>Login</h1>
      <p className="text-muted">Logge dich jetzt ein!</p>
      <InputGroup className="mb-3">
        <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
        <Input type="text" id="email" placeholder="E-Mail Adresse" />
      </InputGroup>
      <InputGroup className="mb-4">
        <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
        <Input type="password" id="password" placeholder="Passwort"/>
      </InputGroup>
      <Row>
        <Col xs="6">
          <Button id="login" color="primary" className="px-4">Login</Button>
        </Col>
        </Row>

      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={this.newLogin}>Sexy Login</Button>{' '}
        <Button color="primary" onClick={this.newLogout}>Sexy Logout</Button>
        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
      </ModalFooter>
    </Modal>
      </NavDropdown>
     
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
