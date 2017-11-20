import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
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
  CardBody
} from 'reactstrap';
import LoginForm from "../Forms/LoginForm";

class HeaderLogin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
        
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
        toggle() {
          this.setState({
            modal: !this.state.modal
          });
        }

        render() {
            return(
            <div >
            <Button>
            <img src={'img/avatars/1.jpg'} className="img-avatar" onClick={this.toggle} alt="Nicht Registriert"/>
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
             <LoginForm/>
             
        

              
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
            </div>
            );
        }
    }

export default withRouter(HeaderLogin);