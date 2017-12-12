import React, {Component} from 'react';
import history from '../../../history';
import { Container} from 'reactstrap';
import {Header, Message, Icon, Button,Card, Form} from 'semantic-ui-react';
import jwt from 'jsonwebtoken';
import 'whatwg-fetch'


class Welcome extends Component {

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
      postcodeError: false,
      Fach1: "",
      Fach2: "",
      Fach3: "",
      fachError: false,
      Fehler: false,
      Erfolg: false,
      file: '',imagePreviewUrl: ''
    };
  

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
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
      Fehler: false
    };

    if (this.state.Vorname.length < 1) {
      isError = true;
      errors.vornameError = true;
      errors.Fehler =true;
    }
    if (this.state.Nachname.length < 1) {
      isError = true;
      errors.nachnameError = true;
      errors.Fehler =true;
    }
    if (this.state.Strasse.length < 1) {
      isError = true;
      errors.strasseError = true;
      errors.Fehler =true;
    }
    if (this.state.Hausnummer.length < 1 || isNaN(this.state.Hausnummer)) {
      isError = true;
      errors.hausnummerError = true;
      errors.Fehler =true;
    }
    if (this.state.Stadt.length < 1) {
      isError = true;
      errors.stadtError = true;
      errors.Fehler =true;
    }
    if (this.state.Postcode.length < 1 || isNaN(this.state.Postcode)) {
      isError = true;
      errors.postcodeError = true;
      errors.Fehler =true;
    }
    if (this.state.Fach1.length < 1 ) {
      isError = true;
      errors.fachError = true;
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

    var form = new FormData();
       form.append('foo', this.state.file);
       form.append('name', this.state.Vorname);
       form.append('surname', this.state.Nachname);
       form.append('street', this.state.Strasse);
       form.append('city', this.state.Stadt);
       form.append('number', this.state.Hausnummer);
       form.append('postcode', this.state.Postcode);
       form.append('subject1', this.state.Fach1);
       form.append('subject2', this.state.Fach2);
       form.append('subject3', this.state.Fach3);
       form.append('fileName', "Maria");
       form.append('email', localStorage.getItem('email'));

     fetch(
       'http://edu-hub-backend.azurewebsites.net/user/', {                                   
        method: 'POST',
        headers: {
        'Accept': 'application/json, */*',
        },
        body: form
      
     });
     localStorage.setItem("name", this.state.Vorname);
     history.push('/dashboard');
 }

  handleSubmit(){
   
    console.log(this.state.file)
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
      fachError: false,
      Fehler: false,
      Erfolg: true,
    });
  }}



  goBack(){
    history.go(-1);
  }

  render() {
    const { Vorname, Nachname, Strasse, Hausnummer, Stadt, Postcode, Fach1, Fach2, Fach3 } = this.state
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="img-circle" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<img className="img-circle" src='../img/avatars/NotLogged.jpg' />);
    }
    return (<div className="container">
      <div className="row justify-content-md-center">
        <Card style={{width: "800px"}}>
          <Card.Content style={{width: "800px"}}>

            <Header as='h2'>
      <Icon name='setting' />
      <Header.Content>
        Daten Vervollständigen
        <Header.Subheader>
          Neuer Nutzer
        </Header.Subheader>
      </Header.Content>
      </Header>
            <br/>
            <div className="container">
              <div className="row justify-content-md-center">
                        {$imagePreview}
                <br/>
              </div>
            </div>
            <br/>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="form-group">
                  <label htmlFor="foo"><b>Profilfoto hinzufügen</b></label>
                  <br/>
                  <input type="file" onChange={(e) => this._handleImageChange(e)} className="form-control-file" name = "foo" id="foo"></input>
                </div>
              </div>
            </div>

            <div className="card-text">
            <Form error={this.state.Fehler} success={this.state.Erfolg} onSubmit={this.handleSubmit}>
                 
                 <Form.Field required>
                    <label>Vorname</label>
                    <Form.Input name="Vorname" value={Vorname} onChange={this.handleChange} error={this.state.vornameError} placeholder='Vorname' />
                  </Form.Field>
                  <Form.Field required>
                   <label>Nachname</label>
                   <Form.Input name="Nachname" value={Nachname} onChange={this.handleChange} error={this.state.nachnameError} placeholder='Nachname' />
                  </Form.Field>
                  <Form.Field required>
                   <label>Straße</label>
                   <Form.Input name="Strasse" value={Strasse} onChange={this.handleChange} error={this.state.strasseError} placeholder='Straße' />
                 </Form.Field>
                 <Form.Field required>
                   <label>Hausnummer</label>
                   <Form.Input name="Hausnummer" value={Hausnummer} onChange={this.handleChange} error={this.state.hausnummerError} placeholder='Hausnummer' />
                 </Form.Field>
                 <Form.Field required>
                   <label>Stadt</label>
                   <Form.Input name="Stadt" value={Stadt} onChange={this.handleChange} error={this.state.stadtError} placeholder='Stadt' />
                 </Form.Field>
                 <Form.Field required>
                   <label>Postleitzahl</label>
                   <Form.Input name="Postcode" value={Postcode} onChange={this.handleChange} error={this.state.postcodeError} placeholder='Postleitzahl' />
                 </Form.Field>
                 <Form.Group inline>
                  <Form.Field required>
                    <label>Fächer</label>
                   <Form.Input  name="Fach1" value={Fach1} onChange={this.handleChange} error={this.state.fachError} placeholder='Fach 1' /> 
                    
                   
                   <Form.Input  name="Fach2" value={Fach2} onChange={this.handleChange} placeholder='Fach 2' />
                  
                  
                   <Form.Input  name="Fach3" value={Fach3} onChange={this.handleChange} placeholder='Fach 3' />
                    </Form.Field>
                    </Form.Group>
                 <Message
                    error
                    header='Fehler bei Eingabe'
                    content='Alle Felder müssen ausgefüllt sein und Hausnummer und PLZ müssen Zahlen sein.'
                    /> 
                    <Message
                    success
                    header='Daten erfolgreich erstellt'
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
