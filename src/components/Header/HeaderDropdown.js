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
 
  newLogin(){
    const auth = new Auth();
    auth.login();

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
    return (
      <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img src={'img/avatars/NotLogged.jpg'} className="img-avatar" alt="Nicht Registriert"/>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={this.toggleModal}><i className="fa fa-user"></i> Einloggen</DropdownItem>
          <DropdownItem><i className="fa fa-shield"></i> Registrieren</DropdownItem>
        </DropdownMenu>
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
