import React, {Component} from 'react';
import history from '../../history';
import {
  Container,
  Input,
  InputGroup,
  InputGroupAddon} from 'reactstrap';
import {Header, Icon, Button,Card} from 'semantic-ui-react';
import jwt from 'jsonwebtoken';
import 'whatwg-fetch';
import {Link, Switch, Route, Redirect} from 'react-router-dom';

class Welcome extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      Vorname: "",
      Nachname: "",
      Strasse: "",
      Hausnummer: "",
      Stadt: "",
      Postcode: ""
    };
  }

  updateInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit() {
  
    
    fetch(
      //'http://edu-hub-backend.azurewebsites.net/user/'                          //prodo
      'http://localhost:8000/user/', {                                            //dev
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        name: this.state.Vorname,
        surname: this.state.Nachname,
        street: this.state.Strasse,
        city: this.state.Stadt,
        number: this.state.Hausnummer,
        postcode: this.state.Postcode,
      })
    })
    localStorage.setItem("name", this.state.Vorname);
    history.push('/dashboard');

}

  goBack(){
    history.go(-1);
  }

  render() {
    return (<div className="container">
      <div className="row justify-content-md-center">
        <Card style={{width: "800px"}}>
          <Card.Content style={{width: "800px"}}>
            <Header as='h2'>
      <Icon name='setting' />
      <Header.Content>
        Daten vervollständigen
        <Header.Subheader>
          Neuer Nutzer
        </Header.Subheader>
      </Header.Content>
      </Header>
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
                  <label htmlFor="exampleFormControlFile1"><b>Profilfoto hinzufügen</b></label>
                  <br/>
                  <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                </div>
              </div>
            </div>

            <div className="card-text">
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='user' />
                </InputGroupAddon>

                <Input onChange={(e) => this.updateInputValue(e)} name="Vorname" type="text" placeholder="Vorname"/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='user' />
                </InputGroupAddon>

                <Input onChange={(e) => this.updateInputValue(e)} name="Nachname" type="text" placeholder="Nachname"/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='map pin' />
                </InputGroupAddon>

                <Input onChange={(e) => this.updateInputValue(e)} name="Strasse" type="text" placeholder="Straße"/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='map pin' />
                </InputGroupAddon>

                <Input onChange={(e) => this.updateInputValue(e)} name="Hausnummer" type="int" placeholder="Hausnummer"/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='map pin' />
                </InputGroupAddon>

                <Input onChange={(e) => this.updateInputValue(e)} name="Stadt" type="text" placeholder="Stadt"/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='map pin' />
                </InputGroupAddon>

                <Input onChange={(e) => this.updateInputValue(e)} name="Postcode" type="int" placeholder="Postleitzahl"/>
              </InputGroup>
             
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='student' />
                </InputGroupAddon>
                <Input type="text" placeholder="Schule"/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='write' />
                </InputGroupAddon>
                <Input onChange={(e) => this.updateInputValue(e)} type="text" placeholder="Profilbeschreibung"/>
              </InputGroup>
            </div>
         

            <div className="container">
              <div className="row justify-content-md-center">
                <Link to="/profil">
                     <Button animated color='teal' style={{width: "150px"}} onClick={this.onSubmit.bind(this)}>
                      <Button.Content hidden>Daten speichern</Button.Content>
                      <Button.Content visible>
                        <Icon name='check' />
                      </Button.Content>
                    </Button>
                </Link>
              </div>
            </div>

          </Card.Content>

        </Card>
      </div>
    </div>);
  }
}

export default Welcome;
