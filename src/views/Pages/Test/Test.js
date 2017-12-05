import React, {Component} from 'react';
import history from '../../../history';
import { Container} from 'reactstrap';
import {Header, Icon, Button,Card, Form} from 'semantic-ui-react';
import jwt from 'jsonwebtoken';
import 'whatwg-fetch'


class Test extends Component {

      state = {
      Vorname: "",
      vornameError: false,
      Nachname: "",
      nachnameError: false,
      Strasse: "",
      strasseError: false,
      Hausnummer: "",
      hausnummerError: false,
      Stadt: "",
      stadtError: false,
      Postcode: "",
      postcodeError: false
    };
  

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

  validate = () =>{
    let isError = false;
    const errors = {
      vornameError: false,
      nachnameError: false,
      strasseError: false,
      hausnummerError: false,
      stadtError: false,
      postcodeError: false
    };

    if (this.state.Vorname.length < 1) {
      isError = true;
      errors.vornameError = true;
    }
    if (this.state.Nachname.length < 1) {
      isError = true;
      errors.vornameError = true;
    }
    if (this.state.Strasse.length < 1) {
      isError = true;
      errors.vornameError = true;
    }
    if (this.state.Hausnummer.length < 1) {
      isError = true;
      errors.vornameError = true;
    }
    if (this.state.Stadt.length < 1) {
      isError = true;
      errors.vornameError = true;
    }
    if (this.state.Postcode.length < 1) {
      isError = true;
      errors.vornameError = true;
    }

    if (isError){
      this.setState({
        ...this.state,
        ...errors
      });
    }
    return isError;
  };

  handleSubmit(){
    console.log(this.state.Vorname)
    const err = this.validate();
    if(!err){
    //onSubmit();

    this.setState ( {
      Vorname: "",
      Nachname: "",
      Strasse: "",
      Hausnummer: "",
      Stadt: "",
      Postcode: "",
    });
  }}

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
    history.replace("/profil");
}

  goBack(){
    history.go(-1);
  }

  render() {
    const { Vorname, Nachname, Strasse, Hausnummer, Stadt, Postcode } = this.state
    return (<div className="container">
      <div className="row justify-content-md-center">
        <Card style={{width: "800px"}}>
          <Card.Content style={{width: "800px"}}>

            <Header as='h2'>
      <Icon name='setting' />
      <Header.Content>
        Profil bearbeiten
        <Header.Subheader>
          Maria Müller
        </Header.Subheader>
      </Header.Content>
      </Header>
            <br/>
            <div className="container">
              <div className="row justify-content-md-center">
                  <img className="img-circle" src='../img/avatars/5.jpg'></img>
                <br/>
              </div>
            </div>
            <br/>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1"><b>Profilfoto aktualisieren</b></label>
                  <br/>
                  <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                </div>
              </div>
            </div>

            <div className="card-text">
            <Form onSubmit={this.handleSubmit}>
                 
                 <Form.Field>
                    <label>Vorname</label>
                    <Form.Input name="Vorname" value={Vorname} onChange={this.handleChange} error={this.state.vornameError} placeholder='Vorname' />
                  </Form.Field>
                  <Form.Field>
                   <label>Last Name</label>
                   <Form.Input name="Nachname" value={Nachname} onChange={this.handleChange} error={this.state.nachnameError} placeholder='Nachname' />
                  </Form.Field>
                  <Form.Field>
                   <label>Straße</label>
                   <Form.Input name="Strasse" value={Strasse} onChange={this.handleChange} error={this.state.strasseError} placeholder='Straße' />
                 </Form.Field>
                 <Form.Field>
                   <label>Hausnummer</label>
                   <Form.Input name="Hausnummer" value={Hausnummer} onChange={this.handleChange} error={this.state.hausnummerError} placeholder='Hausnummer' />
                 </Form.Field>
                 <Form.Field>
                   <label>Stadt</label>
                   <Form.Input name="Stadt" value={Stadt} onChange={this.handleChange} error={this.state.stadtError} placeholder='Stadt' />
                 </Form.Field>
                 <Form.Field>
                   <label>Postleitzahl</label>
                   <Form.Input name="Postcode" value={Postcode} onChange={this.handleChange} error={this.state.postcodeError} placeholder='Postleitzahl' />
                 </Form.Field>             
            </Form>
            </div>
         

            <div className="container">
              <div className="row justify-content-md-center">
                <Button animated color='teal' style={{width: "150px"}} onClick={this.handleSubmit.bind(this)}>
                      <Button.Content hidden>speichern</Button.Content>
                      <Button.Content visible>
                        <Icon name='check' />
                      </Button.Content>
                    </Button>
                    <Button animated color='teal' style={{width: "150px"}} onClick={this.goBack}>
                          <Button.Content hidden>zurück</Button.Content>
                          <Button.Content visible>
                            <Icon name='arrow left' />
                          </Button.Content>
                        </Button>
              </div>
            </div>

          </Card.Content>

        </Card>
      </div>
    </div>);
  }
}

export default Test;
