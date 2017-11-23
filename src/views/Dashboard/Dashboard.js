import React, { Component } from 'react';
import {Input, InputGroup,InputGroupAddon, CardGroup, Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody} from 'reactstrap';
import LoginForm from "../../components/Forms/LoginForm";
import Auth from '../../Auth/Auth';
const auth = new Auth();
class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isAuthenticated: true

    };

    this.toggle = this.toggle.bind(this);
  }
  

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    isAuthenticated() {
      // Check whether the current time is past the 
      // access token's expiry time
      let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }
    
    


  render() {
   const logged = this.isAuthenticated();
    return (
      
      <div className="animated fadeIn">
       {
          logged && (
              <h4>
               Du bist eingeloggt!
              </h4>
            )
        }
        {
          !logged && (
              <h4>
               Du bist noch nicht eingeloggt!
              </h4>
            )
        }
        </div>
    );
  }
}

export default Dashboard;
