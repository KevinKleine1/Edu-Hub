import React, {Component} from 'react';
import {Container, Input, InputGroup, InputGroupAddon, InputGroupButton, CardGroup, Card, CardBody} from 'reactstrap';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class Admin extends Component {


    //Change static URL to relative URL

  render() {
    return (

<div className="container-fluid">
<div className="card w-75">
  <div className="card-body">
    <div className="alert alert-info" role="alert">
    </div>
    <h4 className="card-title"><b>Profil verwalten</b></h4>
    <br />
    <div className="container">
      <div className="row justify-content-md-center">
    <img className="img-circle" src='../img/avatars/5.jpg'></img>
    <br/>
  </div>
</div>
    <br />
    <div className="container">
      <div className="row justify-content-md-center">
    <div className="form-group">
      <label htmlFor="exampleFormControlFile1">Profilfoto aktualisieren</label>
      <br />
      <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
    </div>
</div>
</div>

    <div className="card-text">
      <InputGroup className="mb-3">
        <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>

      <Input type="text" placeholder="Name"/>
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroupAddon><i className="icon-location-pin"></i></InputGroupAddon>

    <Input type="text" placeholder="Anschrift"/>
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroupAddon><i className="icon-envelope-open"></i></InputGroupAddon>

  <Input type="text" placeholder="Email"/>
</InputGroup>
<InputGroup className="mb-3">
  <InputGroupAddon><i className="icon-graduation"></i></InputGroupAddon>

<Input type="text" placeholder="Schule"/>
</InputGroup>
<InputGroup className="mb-3">
  <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
  <Input type="password" placeholder="altes Passwort"/>
</InputGroup></div>
<div><InputGroup className="mb-3">
  <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
  <Input type="password" placeholder="neues Passwort"/>
</InputGroup></div>
<div><InputGroup className="mb-3">
  <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
  <Input type="password" placeholder="Passwort wiederholen"/>
</InputGroup></div>

<div className="container">
  <div className="row justify-content-md-center">
    <a href="#" className="btn btn-info" style={{width: "150px"}}><b>speichern</b></a>
    <a href="http://localhost:8080/#/profile" className="btn btn-secondary" style={{width: "150px"}}><b>zurück</b></a>
</div>
</div>



<br />
<br />

<div className="alert alert-info" role="alert">

</div>



  </div>
</div>
</div>





    );
  }
}

export default Admin;