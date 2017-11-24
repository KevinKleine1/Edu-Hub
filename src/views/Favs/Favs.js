import React, {Component} from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button
} from 'reactstrap';

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

class Favs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {

    return (<div className="animated fadeIn">
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="card" style={{
                width: "20rem"
              }}>
              <img class="card-img-top" src="https://i.imgur.com/ockpsKj.jpg" alt="Card image cap"></img>
              <div class="card-body">
                <h4 class="card-title">Titel</h4>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{
                width: "20rem"
              }}>
              <img class="card-img-top" src="https://i.imgur.com/zs0xJsA.jpg" alt="Card image cap"></img>
              <div class="card-body">
                <h4 class="card-title">Titel</h4>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{
                width: "20rem"
              }}>
              <img class="card-img-top" src="https://i.imgur.com/G6N2paL.jpg" alt="Card image cap"></img>
              <div class="card-body">
                <h4 class="card-title">Titel</h4>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{
                width: "20rem"
              }}>
              <img class="card-img-top" src="https://i.imgur.com/uk2MB1c.jpg" alt="Card image cap"></img>
              <div class="card-body">
                <h4 class="card-title">Titel</h4>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{
                width: "20rem"
              }}>
              <img class="card-img-top" src="https://i.imgur.com/ockpsKj.jpg" alt="Card image cap"></img>
              <div class="card-body">
                <h4 class="card-title">Titel</h4>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{
                width: "20rem"
              }}>
              <img class="card-img-top" src="https://i.imgur.com/zGHOb6A.jpg" alt="Card image cap"></img>
              <div class="card-body">
                <h4 class="card-title">Titel</h4>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{
                width: "20rem"
              }}>
              <img class="card-img-top" src="https://i.imgur.com/ockpsKj.jpg" alt="Card image cap"></img>
              <div class="card-body">
                <h4 class="card-title">Titel</h4>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>)
  }
}

export default Favs;
