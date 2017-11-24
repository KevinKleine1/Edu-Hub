import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  Label,
  Table
} from 'reactstrap';
import LoginForm from "../../components/Forms/LoginForm";
import Auth from '../../Auth/Auth';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import Welcome from '../Pages/Welcome/Welcome';

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';


const auth = new Auth();
class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
     dropdownOpen: false

    };

    this.toggle = this.toggle.bind(this);
  }
  

  // delete
  test(){
    const a = "s256349@mvrht.net";
    const b = "s688527@mvrht.net";
    console.log (localStorage.getItem('email') === a);
    console.log (localStorage.getItem('email') === b);
    console.log(localStorage.getItem('email'));
  }

  

    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen

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
              <Redirect from="/dashboard" to="/welcome"/>
              </div>
            
            )
        }
       {
          logged && (
            <div>
      <div>
        <div className="card text-center">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h4 className="card-title">Projekt der Woche</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card" style={{
                width: "19rem"
              }}>
              <img className="card-img-top" src="https://i.imgur.com/ockpsKj.jpg" alt="Card image cap"></img>
              <div className="card-body">
                <h4 className="card-title">Bundesjugendspiele</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{
                width: "19rem"
              }}>
              <img className="card-img-top" src="https://i.imgur.com/uk2MB1c.jpg" alt="Card image cap"></img>
              <div className="card-body">
                <h4 className="card-title">Bibliotheks Ausbau</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{
                width: "19rem"
              }}>
              <img className="card-img-top" src="https://i.imgur.com/G6N2paL.jpg" alt="Card image cap"></img>
              <div className="card-body">
                <h4 className="card-title">Coding Kurs</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{
                width: "19rem"
              }}>
              <img className="card-img-top" src="https://i.imgur.com/zGHOb6A.jpg" alt="Card image cap"></img>
              <div className="card-body">
                <h4 className="card-title">Lernzentrum</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
          <div className="card" style={{
              width: "19rem"
            }}>
            <img className="card-img-top" src="https://i.imgur.com/KnnT5LQ.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <h4 className="card-title">Forschungzentrum</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div></div>
          <div className="col">
            <div className="card" style={{
                width: "19rem"
              }}>
              <img className="card-img-top" src="https://i.imgur.com/zs0xJsA.jpg" alt="Card image cap"></img>
              <div className="card-body">
                <h4 className="card-title">Hobby Werkstatt</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)

            
            
        }
        {
          !logged && (
            <div>
      <div>
        <div className="card text-center">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h4 className="card-title">Projekt der Woche</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card" style={{
                width: "19rem"
              }}>
              <img className="card-img-top" src="https://i.imgur.com/ockpsKj.jpg" alt="Card image cap"></img>
              <div className="card-body">
                <h4 className="card-title">Bundesjugendspiele</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{
                width: "19rem"
              }}>
              <img className="card-img-top" src="https://i.imgur.com/uk2MB1c.jpg" alt="Card image cap"></img>
              <div className="card-body">
                <h4 className="card-title">Bibliotheks Ausbau</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{
                width: "19rem"
              }}>
              <img className="card-img-top" src="https://i.imgur.com/G6N2paL.jpg" alt="Card image cap"></img>
              <div className="card-body">
                <h4 className="card-title">Coding Kurs</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{
                width: "19rem"
              }}>
              <img className="card-img-top" src="https://i.imgur.com/zGHOb6A.jpg" alt="Card image cap"></img>
              <div className="card-body">
                <h4 className="card-title">Lernzentrum</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
          <div className="card" style={{
              width: "19rem"
            }}>
            <img className="card-img-top" src="https://i.imgur.com/KnnT5LQ.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <h4 className="card-title">Forschungzentrum</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div></div>
          <div className="col">
            <div className="card" style={{
                width: "19rem"
              }}>
              <img className="card-img-top" src="https://i.imgur.com/zs0xJsA.jpg" alt="Card image cap"></img>
              <div className="card-body">
                <h4 className="card-title">Hobby Werkstatt</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            )
        }
        </div>
    );
  }
}

export default Dashboard;
