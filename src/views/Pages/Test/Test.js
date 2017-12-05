import React, {Component} from 'react';
import history from '../../../history';
import { Container} from 'reactstrap';
import {Header, Message, Icon, Button,Card, Form} from 'semantic-ui-react';
import jwt from 'jsonwebtoken';
import 'whatwg-fetch'


class Welcome extends Component {

      state = {
      Vorname: "",
      VornameAlt: "",
      vornameError: false,
      Nachname: "",
      NachnameAlt: "",
      nachnameError: false,
      Strasse: "",
      StrasseAlt: "",
      strasseError: false,
      Hausnummer: "",
      HausnummerAlt: "",
      hausnummerError: false,
      Stadt: "",
      StadtAlt: "",
      stadtError: false,
      Postcode: "",
      PostcodeAlt: "",
      postcodeError: false,
      Fehler: false,
      Erfolg: false
    };
  

    setData(){
      var decoded = jwt.decode(localStorage.getItem('id_token'));       //decoder for JWT Token
      localStorage.setItem('email', decoded.email);
  
      var target = ('http://localhost:8000/user/' + localStorage.getItem('email'))                                      //dev
      //var target = ('http://edu-hub-backend.azurewebsites.net/user/' + localStorage.getItem('email'))                   //prod
      fetch(target)
  
        .then((results) =>{
          return results.json();
  
          }).then((json)=>{
  
            this.setState({VornameAlt : json[0].name});
            this.setState({NachnameAlt : json[0].surname});
            this.setState({StadtAlt : json[0].city});
            this.setState({HausnummerAlt : json[0].number});
            this.setState({PostcodeAlt : json[0].postcode});
            this.setState({StrasseAlt : json[0].street});
              })
    }

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
      Fehler: false
    };

    if (this.state.Vorname.length < 1) {
      errors.Voname = this.state.VornameAlt.value;
    }
    if (this.state.Nachname.length < 1) {
      errors.Nachname = this.state.NachnameAlt;
    }
    if (this.state.Strasse.length < 1) {
      errors.Strasse = this.state.StrasseAlt;
    }
    if (this.state.Hausnummer.length < 1) {
      errors.Hausnummer = this.state.HausnummerAlt;
    }
    if (this.state.Stadt.length < 1) {
      errors.Stadt = this.state.StadtAlt;
    }
    if (this.state.Postcode.length < 1) {
      errors.Postcode = this.state.PostcodeAlt;
    }

    
      this.setState({
        ...this.state,
        ...errors
      });
    
    return false;
  };

  onSubmit() {

     fetch(
       //'http://edu-hub-backend.azurewebsites.net/user/'                          //prodo
       'http://localhost:8000/user/', {                                            //dev
       method: 'POST',
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
    this.setData();
    const err = this.validate();
    if(!err){
    //this.onSubmit();
    console.log(this.state.Vorname);
    console.log(this.state.VornameAlt);
    console.log(localStorage.getItem("email"));
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
          {Vorname} {Nachname}
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
            <Form error={this.state.Fehler} success={this.state.Erfolg} onSubmit={this.handleSubmit}>
                 
                 <Form.Field>
                    <label>Vorname</label>
                    <Form.Input name="Vorname"  onChange={this.handleChange} error={this.state.vornameError} placeholder='Vorname' />
                  </Form.Field>
                  <Form.Field>
                   <label>Last Name</label>
                   <Form.Input name="Nachname"  onChange={this.handleChange} error={this.state.nachnameError} placeholder='Nachname' />
                  </Form.Field>
                  <Form.Field>
                   <label>Straße</label>
                   <Form.Input name="Strasse"  onChange={this.handleChange} error={this.state.strasseError} placeholder='Straße' />
                 </Form.Field>
                 <Form.Field>
                   <label>Hausnummer</label>
                   <Form.Input name="Hausnummer"  onChange={this.handleChange} error={this.state.hausnummerError} placeholder='Hausnummer' />
                 </Form.Field>
                 <Form.Field>
                   <label>Stadt</label>
                   <Form.Input name="Stadt" onChange={this.handleChange} error={this.state.stadtError} placeholder='Stadt' />
                 </Form.Field>
                 <Form.Field>
                   <label>Postleitzahl</label>
                   <Form.Input name="Postcode" onChange={this.handleChange} error={this.state.postcodeError} placeholder='Postleitzahl' />
                 </Form.Field>
                 <Message
                    error
                    header='Fehler bei Eingabe'
                    content='Alle Felder müssen ausgefüllt sein.'
                    /> 
                    <Message
                    success
                    header='Daten erfolgreich aktualisiert'
                    content='Viel Spaß auf Edu-Hub.'
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

export default Welcome;
