import React, {Component} from 'react';
import history from '../../history';
import { Container} from 'reactstrap';
import {Header, Message, Icon, Button,Card, Form} from 'semantic-ui-react';
import jwt from 'jsonwebtoken';
import 'whatwg-fetch'


class Admin extends Component {

      state = {
      Vorname: "",
      VornameT: "",
      vornameError: false,
      Nachname: "",
      NachnameT:"",
      nachnameError: false,
      Strasse: "",
      StrasseT: "",
      strasseError: false,
      Hausnummer: "",
      HausnummerT: "",
      hausnummerError: false,
      Stadt: "",
      StadtT: "",
      stadtError: false,
      Postcode: "",
      PostcodeT: "",
      postcodeError: false,
      Fehler: false,
      Erfolg: false,
      VornameAlt: "",
      NachnameAlt: "",
      StrasseAlt: "",
      HausnummerAlt: "",
      StadtAlt: "",
      PostcodeAlt: "",
      Fach1: "",
      Fach2: "",
      Fach3: "",
      Fach1Alt: "",
      Fach2Alt: "",
      Fach3Alt: "",
      fachError: false
    };
  

    handleChange = (e, { name, value }) => this.setState({ [name]: value })


    setData(){
      var decoded = jwt.decode(localStorage.getItem('id_token'));       //decoder for JWT Token
      localStorage.setItem('email', decoded.email);
  
      //var target = ('http://localhost:8000/user/' + localStorage.getItem('email'))                                      //dev
      var target = ('http://edu-hub-backend.azurewebsites.net/user/' + localStorage.getItem('email'))                   //prod
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
            this.setState({Fach1Alt: json[0].subject1});
            this.setState({Fach2Alt: json[0].subject2});
            this.setState({Fach3Alt: json[0].subject3});
          
              })
    }


  validate = () =>{
    let isError = false;
    const errors = {
      vornameError: false,
      nachnameError: false,
      strasseError: false,
      hausnummerError: false,
      stadtError: false,
      postcodeError: false,
      fachError: false,
      Fehler: false,
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


    if (isError){
      this.setState({
        ...this.state,
        ...errors
      });
    }
    return isError;
  };



  onSubmit() {
    const { VornameAlt, NachnameAlt, StrasseAlt, HausnummerAlt, StadtAlt, PostcodeAlt, Fach1Alt, Fach2Alt, Fach3Alt} = this.state
    var Vorname ="";
    var Nachname="";
    var  Strasse="";
    var  Hausnummer="";
    var Stadt="";
    var Postcode="";
    var Fach1="";
    var Fach2="";
    var Fach3="";
    console.log(NachnameAlt);

    if (this.state.Vorname.length < 1){
        Vorname = VornameAlt;
    }else{
        Vorname = this.state.Vorname;
    }
    if (this.state.Nachname.length < 1){
      Nachname = NachnameAlt;
    }else{
      Nachname = this.state.Nachname;
    }
    if (this.state.Strasse.length < 1){
      Strasse = StrasseAlt;
    }else{
      Strasse = this.state.Strasse;
    }
    if (this.state.Hausnummer.length < 1){
      Hausnummer = HausnummerAlt;
    }else{
      Hausnummer = this.state.Hausnummer;
    }
    if (this.state.Stadt.length < 1){
      Stadt = StadtAlt;
    }else{
      Stadt = this.state.Hausnummer;
    }
    if (this.state.Postcode.length < 1){
      Postcode = PostcodeAlt;
    }else{
      Postcode = this.state.Postcode;
    }
    if (this.state.Fach1.length < 1){
      Fach1 = Fach1Alt;
    }else{
      Fach1 = this.state.Fach1;
    }
    if (this.state.Fach2.length < 1){
      Fach2 = Fach2Alt;
    }else{
      Fach2 = this.state.Fach2;
    }
    if (this.state.Fach3.length < 1){
      Fach3 = Fach3Alt;
    }else{
      Fach3 = this.state.Fach3;
    }

    console.log(this.state.Nachname);
     fetch(
       //'http://localhost:8000/user/'
       'http://edu-hub-backend.azurewebsites.net/user/'                          //prodo
       , {                                            //dev
       method: 'PUT',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         email: localStorage.getItem("email"),
         name: Vorname,
         surname: Nachname,
         street: Strasse,
         city: Stadt,
         number: Hausnummer,
         postcode: Postcode,
         subject1: Fach1,
         subject2: Fach2,
         subject3: Fach3
       })
     })
     this.setState({VornameAlt: Vorname})
     this.setState({NachnameAlt: Nachname})
     this.setState({StrasseAlt: Strasse})
     this.setState({StadtAlt: Stadt})
     this.setState({HausnummerAlt: Hausnummer})
     this.setState({PostcodeAlt: Postcode})
     this.setState({Fach1Alt: Fach1})
     this.setState({Fach2Alt: Fach2})
     this.setState({Fach3Alt: Fach3})
     localStorage.setItem("name", Vorname);
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
      Fach1: "",
      Fach2: "",
      Fach3: "",
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

  componentDidMount(){
    this.setData();
  }

  goBack(){
    history.go(-1);
  }

  render() {
    const { Vorname, Nachname, Strasse, Hausnummer, Stadt, Postcode, Fach1, Fach2, Fach3 } = this.state
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
                    <Form.Input name="Vorname" value={Vorname} onChange={this.handleChange} error={this.state.vornameError} placeholder={this.state.VornameAlt} />
                  </Form.Field>
                  <Form.Field>
                   <label>Nachname</label>
                   <Form.Input name="Nachname" value={Nachname} onChange={this.handleChange} error={this.state.nachnameError} placeholder={this.state.NachnameAlt} />
                  </Form.Field>
                  <Form.Field>
                   <label>Straße</label>
                   <Form.Input name="Strasse" value={Strasse} onChange={this.handleChange} error={this.state.strasseError} placeholder={this.state.StrasseAlt} />
                 </Form.Field>
                 <Form.Field>
                   <label>Hausnummer</label>
                   <Form.Input name="Hausnummer" value={Hausnummer} onChange={this.handleChange} error={this.state.hausnummerError} placeholder={this.state.HausnummerAlt} />
                 </Form.Field>
                 <Form.Field>
                   <label>Stadt</label>
                   <Form.Input name="Stadt" value={Stadt} onChange={this.handleChange} error={this.state.stadtError} placeholder={this.state.StadtAlt} />
                 </Form.Field>
                 <Form.Field>
                   <label>Postleitzahl</label>
                   <Form.Input name="Postcode" value={Postcode} onChange={this.handleChange} error={this.state.postcodeError} placeholder={this.state.PostcodeAlt} />
                 </Form.Field>
                 <Form.Group inline>
                  <Form.Field required>
                    <label>Fächer</label>
                   <Form.Input  name="Fach1" value={Fach1} onChange={this.handleChange} error={this.state.fachError} placeholder={this.state.Fach1Alt} /> 
                    
                   
                   <Form.Input  name="Fach2" value={Fach2} onChange={this.handleChange} placeholder={this.state.Fach2Alt} />
                  
                  
                   <Form.Input  name="Fach3" value={Fach3} onChange={this.handleChange} placeholder={this.state.Fach3Alt} />
                    </Form.Field>
                    </Form.Group>
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
