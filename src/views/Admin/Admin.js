import React, {Component} from 'react';
import history from '../../history';
import { Container} from 'reactstrap';
import {Header, Message, Icon, Button,Card, Form} from 'semantic-ui-react';
import jwt from 'jsonwebtoken';
import 'whatwg-fetch'


class Admin extends Component {

      state = {
      Vorname: "",
      VornameT: true,
      vornameError: false,
      Nachname: "",
      NachnameT:true,
      nachnameError: false,
      Strasse: "",
      StrasseT: true,
      strasseError: false,
      Hausnummer: "",
      HausnummerT: true,
      hausnummerError: false,
      Stadt: "",
      StadtT: true,
      stadtError: false,
      Postcode: "",
      PostcodeT: true,
      postcodeError: false,
      Fehler: false,
      Erfolg: false
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
      postcodeError: false,
      Fehler: false,
      VornameT: true,
      NachnameT: true,
      StrasseT: true,
      HausnummerT: true,
      StadtT: true,
      PostcodeT: true
    };
  
    if (isNaN(this.state.Hausnummer)) {
      isError = true;
      errors.hausnummerError = true;
      errors.Fehler =true;
    }
  
    if (isNaN(this.state.Postcode)) {
      isError = true;
      errors.postcodeError = true;
      errors.Fehler =true;
    }

    if (this.state.Vorname.length < 1){
      errors.VornameT = false;
    }
    if (this.state.Nachname.length < 1){
      errors.NachnameT = false;
    }
     if (this.state.Strasse.length < 1){
      errors.StrasseT = false;
    }
    if (this.state.Hausnummer.length < 1){
      errors.HausnummerT = false;
     }
    if (this.state.Stadt.length < 1){
      errors.StadtT = false;   
     }
     if (this.state.Postcode.length < 1){
        errors.PostcodeT = false;        
     }


    if (isError){
      this.setState({
        ...this.state,
        ...errors
      });
    }
    return isError;
  };



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
 }

  handleSubmit(){
   
    const err = this.validate();
    if(!err){
    this.onSubmit();

    this.setState ( {
      Vorname: "",
      Nachname: "",
      Strasse: "",
      Hausnummer: "",
      Stadt: "",
      Postcode: "",
      vornameError: false,
      nachnameError: false,
      strasseError: false,
      hausnummerError: false,
      stadtError: false,
      postcodeError: false,
      Fehler: false,
      Erfolg: true
    });
  }}



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
        Daten Aktualisieren
        <Header.Subheader>
         {localStorage.getItem("name")}
        </Header.Subheader>
      </Header.Content>
      </Header>
            <br/>
            <div className="container">
              <div className="row justify-content-md-center">
                  <img className="img-circle" src={'img/avatars/' + localStorage.getItem('picture')}></img>
                <br/>
              </div>
            </div>
            <br/>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1"><b>Profilfoto Aktualisieren</b></label>
                  <br/>
                  <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                </div>
              </div>
            </div>

            <div className="card-text">
            <Form error={this.state.Fehler} success={this.state.Erfolg} onSubmit={this.handleSubmit}>
                 
                 <Form.Field>
                    <label>Vorname</label>
                    <Form.Input name="Vorname" value={Vorname} onChange={this.handleChange} error={this.state.vornameError} placeholder='Vorname' />
                  </Form.Field>
                  <Form.Field>
                   <label>Nachname</label>
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
                 <Message
                    error
                    header='Fehler bei Eingabe'
                    content='Hausnummer und PLZ müssen Zahlen sein.'
                    /> 
                    <Message
                    success
                    header='Daten erfolgreich erstellt'
                    content='Weiterhin viel Spaß auf Edu-Hub.'
                    />              
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

export default Admin;
