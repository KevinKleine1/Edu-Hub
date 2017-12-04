import React, {Component} from 'react';
import {
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  CardGroup,
  Card,
  CardBody
} from 'reactstrap';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import 'whatwg-fetch'
import history from '../../../history';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Strasse: "",

    };
  }
  //Change static URL to relative URL

  updateInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  
  onSubmit() {
    
    
    fetch(
      //'http://edu-hub-backend.azurewebsites.net/user/'                          //prod
      'http://localhost:8000/user/', {                                            //dev
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        name: this.state.Name,
        street: this.state.Strasse,
      })
    })
    history.replace('/dashboard');
}

  
  render() {
    return (   
    <div className="container-fluid">
      <div className="card w-75">
        <div className="card-body">
          <div className="alert alert-info" role="alert"></div>
          <h4 className="card-title">
            <b>Daten vervollständigen</b>
          </h4>
          <br/>
          <div className="container">
            <div className="row justify-content-md-center">
              <img className="img-circle" src='../img/avatars/NotLogged.jpg'></img>
              <br/>
            </div>
          </div>
          <br/>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Profilfoto hinzufügen</label>
                <br/>
                <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
              </div>
            </div>
          </div>

          <div className="card-text">
            <InputGroup className="mb-3">
              <InputGroupAddon>
                <i className="icon-user"></i>
              </InputGroupAddon>

              <Input value={this.state.inputValue} name="Name" onChange={(e) => this.updateInputValue(e)} type="text" placeholder="Name"/>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroupAddon>
                <i className="icon-location-pin"></i>
              </InputGroupAddon>

              <Input type="text" name="Strasse" onChange={(e) => this.updateInputValue(e)} placeholder="Anschrift"/>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroupAddon>
                <i className="icon-envelope-open"></i>
              </InputGroupAddon>

              <Input type="text" placeholder="Email"/>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroupAddon>
                <i className="icon-graduation"></i>
              </InputGroupAddon>

              <Input type="text" placeholder="Schule"/>
            </InputGroup>
          </div>

          <div className="container">
            <div className="row justify-content-md-center">
              <button onClick={this.onSubmit.bind(this)} className="btn btn-info" style={{
                  width: "150px"
                }}>
                <b>speichern</b>
              </button>
              <a href="http://localhost:8080/#/profile" className="btn btn-secondary" style={{
                  width: "150px"
                }}>
                <b>zurück</b>
              </a>
            </div>
          </div>

          <br/>
          <br/>

          <div className="alert alert-info" role="alert"></div>

        </div>
      </div>
    </div>);
  }
}

export default Welcome;