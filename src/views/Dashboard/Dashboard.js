import React, { Component } from 'react';
import {Input, InputGroup,InputGroupAddon, CardGroup, Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody} from 'reactstrap';
import LoginForm from "../../components/Forms/LoginForm";
class Dashboard extends Component {

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
  
    return (
      <div className="animated fadeIn">
        Hallo Welt!
        </div>
    );
  }
}

export default Dashboard;
