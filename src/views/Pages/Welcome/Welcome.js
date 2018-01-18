import React, {Component} from 'react';
import history from '../../../history';
import {Container} from 'reactstrap';
import {
  Header,
  Message,
  Icon,
  Button,
  Card,
  Form
} from 'semantic-ui-react';
import jwt from 'jsonwebtoken';
import 'whatwg-fetch'

//page where every new registered user will be redirected to, so he can complete his data, functionality is the same as on the admin page
//TODO: better solution for the picture input

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
    file: '../img/avatars/NotLogged.jpg',
    imagePreviewUrl: '',
    Laden: false,
    Private: false
  };


  //handler functions for the changes
  handleChange = (e, {name, value}) => this.setState({[name]: value})

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({file: file, imagePreviewUrl: reader.result});
    }

    reader.readAsDataURL(file)
  }

  toggle = () => this.setState({ Private: !this.state.Private })

  //Validation if every field is used and the requirements are ok
  validate = () => {
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

    if(this.state.imagePreviewUrl === ""){
      isError = true;
      errors.Fehler = true;
    }

    if (this.state.Vorname.length < 1) {
      isError = true;
      errors.vornameError = true;
      errors.Fehler = true;
    }
    if (this.state.Nachname.length < 1) {
      isError = true;
      errors.nachnameError = true;
      errors.Fehler = true;
    }
    if (isNaN(this.state.Hausnummer)) {
      isError = true;
      errors.hausnummerError = true;
      errors.Fehler = true;
    }
    if (isNaN(this.state.Postcode)) {
      isError = true;
      errors.postcodeError = true;
      errors.Fehler = true;
    }
    if (this.state.Fach1.length < 1) {
      isError = true;
      errors.fachError = true;
      errors.Fehler = true;
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      });
    }
    return isError;
  };

  //onsubmit as Formdata since we need to send an image
  onSubmit() {
 var privat

    if (this.state.Private){
      privat = 1;
    }
    else{
      privat = 0;
    }

    var form = new FormData();
    form.append('foo', this.state.file);
    form.append('fileName', "Profil");
    form.append('forename', this.state.Vorname);
    form.append('surname', this.state.Nachname);
    form.append('street', this.state.Strasse);
    form.append('city', this.state.Stadt);
    form.append('number', this.state.Hausnummer);
    form.append('postcode', this.state.Postcode);
    form.append('subject1', this.state.Fach1);
    form.append('subject2', this.state.Fach2);
    form.append('subject3', this.state.Fach3);
    form.append('email', localStorage.getItem('email'));
    form.append('user_privacy', privat);

    fetch('http://backend-edu.azurewebsites.net/user/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: form

    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({
        Bild: json[0].profilpic
      }, function() {
        localStorage.setItem('picture', this.state.Bild);
        localStorage.setItem("name", this.state.Vorname);
        history.push('/dashboard');
      });
    });

  }

  //complete submit function with validation and a loading state while it works
  handleSubmit() {
    this.setState({Laden: true});
    const err = this.validate();
    if (!err) {
      this.onSubmit();

      this.setState({
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
        Erfolg: true
      });
    }
  }

  goBack() {
    history.go(-1);
  }

  render() {
    const {
      Vorname,
      Nachname,
      Strasse,
      Hausnummer,
      Stadt,
      Postcode,
      Fach1,
      Fach2,
      Fach3,
      Private
    } = this.state
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="img-circle" src={imagePreviewUrl}/>);
    } else {
      $imagePreview = (<img className="img-circle" src='../img/avatars/NotLogged.jpg'/>);
    }
    return (<div className="container">
      <div className="row justify-content-md-center">
        <br/>
        <Card style={{
            width: "800px"
          }}>
          <Card.Content style={{
              width: "800px"
            }}>

            <Header as='h2'>
              <Icon name='setting'/>
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
                    <div className="row justify-content-md-center">
                  <label htmlFor="foo">
                    <b>Profilfoto hinzufügen</b>
                  </label></div>
                    <div className="row justify-content-md-center">
                  <input type="file" onChange={(e) => this._handleImageChange(e)} className="form-control-file" name="foo" id="foo"></input>
                </div></div>
              </div>
            </div>

            <div className="card-text">
              <Form loading={this.state.Laden} error={this.state.Fehler} onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                <Form.Field required={true}>
                  <label>Vorname</label>
                  <Form.Input name="Vorname" value={Vorname} onChange={this.handleChange} error={this.state.vornameError} placeholder='Vorname'/>
                </Form.Field>
                <Form.Field required={true}>
                  <label>Nachname</label>
                  <Form.Input name="Nachname" value={Nachname} onChange={this.handleChange} error={this.state.nachnameError} placeholder='Nachname'/>
                </Form.Field>
              </Form.Group>
                <Form.Group>
                <Form.Field required={false}>
                  <label>Straße</label>
                  <Form.Input name="Strasse" value={Strasse} onChange={this.handleChange} error={this.state.strasseError} placeholder='Straße' style={{width: "600px"}}/>
                </Form.Field>
                <Form.Field required={false}>
                  <label>Hausnummer</label>
                  <Form.Input name="Hausnummer" value={Hausnummer} onChange={this.handleChange} error={this.state.hausnummerError} placeholder='Hausnummer' style={{width: "162px"}}/>
                </Form.Field>
                  </Form.Group>
                    <Form.Field required={false}>
                      <label>Postleitzahl</label>
                      <Form.Input name="Postcode" value={Postcode} onChange={this.handleChange} error={this.state.postcodeError} placeholder='Postleitzahl'/>
                    </Form.Field>
                  <Form.Field required={false}>
                  <label>Stadt</label>
                  <Form.Input name="Stadt" value={Stadt} onChange={this.handleChange} error={this.state.stadtError} placeholder='Stadt'/>
                </Form.Field>
                <Form.Field required={false}>
                <label>Schule</label>
                <Form.Input name="Schule" placeholder='Schule'/>
              </Form.Field>
                <Form.Group inline={true}>
                  <Form.Field required={true}>
                    <label>Interessen / Fächer</label>
                    <Form.Input name="Fach1" value={Fach1} onChange={this.handleChange} error={this.state.fachError} placeholder='Interesse 1' style={{width: "300px"}}/>

                    <Form.Input name="Fach2" value={Fach2} onChange={this.handleChange} placeholder='Interesse 2' style={{width: "300px"}}/>

                    <Form.Input name="Fach3" value={Fach3} onChange={this.handleChange} placeholder='Interesse 3' style={{width: "300px"}}/>
                  </Form.Field>
                  </Form.Group>
                  <Form.Field>
                      <label>Profilbeschreibung</label>
                    <Form.TextArea rows={2} name='Profilbeschreibung' placeholder='Profilbeschreibung'/>
                  </Form.Field>
                  <Form.Checkbox name="Private" label="Privates Profil" checked={Private} onChange={this.toggle} />
                <Message error={true} header='Fehler bei Eingabe' content='Alle Felder müssen ausgefüllt sein und Hausnummer und PLZ müssen Zahlen sein.'/>
              </Form>
            </div>

            <div className="container">
              <div className="row justify-content-md-center">
                <Button animated={true} color='teal' style={{
                    width: "150px"
                  }} onClick={this.handleSubmit.bind(this)}>
                  <Button.Content hidden={true}>speichern</Button.Content>
                  <Button.Content visible={true}>
                    <Icon name='check'/>
                  </Button.Content>
                </Button>
                <Button animated={true} color='teal' style={{
                    width: "150px"
                  }} onClick={this.goBack}>
                  <Button.Content hidden={true}>zurück</Button.Content>
                  <Button.Content visible={true}>
                    <Icon name='arrow left'/>
                  </Button.Content>
                </Button>
              </div>
            </div>

          </Card.Content>

        </Card><br/>
      </div>
    </div>);
  }
}

export default Welcome;
