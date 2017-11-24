import React, { Component } from 'react';
import {Input, InputGroup,InputGroupAddon, CardGroup, Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody} from 'reactstrap';
import LoginForm from "../../components/Forms/LoginForm";
import Auth from '../../Auth/Auth';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import Welcome from '../Pages/Welcome/Welcome';



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
  
  test(){
    const a = "s256349@mvrht.net";
    const b = "s688527@mvrht.net";
    console.log (localStorage.getItem('email') === a);
    console.log (localStorage.getItem('email') === b);
    console.log(localStorage.getItem('email'));
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


  render() {
   const logged = this.isAuthenticated();
   const testo = (this.compare1() || this.compare2());
    return (
      
      <div className="animated fadeIn">
      {
          (logged && !testo) && (
            <div>
              <h4>
               Du bist eingeloggt!
               <button onClick={this.test}>Test</button>
              </h4>
              <Redirect from="/dashboard" to="/welcome"/>
              </div>
            
            )
        }
       {
          logged && (
            <div>
              <h4>
               Du bist eingeloggt!
               <button onClick={this.test}>Test</button>
              </h4>
              </div>
            
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
