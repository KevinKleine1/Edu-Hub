import React, {Component} from 'react';
import history from '../../history';
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

//Admin class which is used to change the own profile datas

class Admin extends Component {

  state = {
    Vorname: "",
    VornameT: "",
    vornameError: false,
    Nachname: "",
    NachnameT: "",
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
    fachError: false,
    file: '',
    imagePreviewUrl: '',
    key: "",
    Laden: false,
    Profilbeschreibung: "",
    ProfilbeschreibungAlt: ""
  };

  //handler for change events in the textfields
  handleChange = (e, {name, value}) => this.setState({[name]: value})


  //handler for the image change, if a new one is uploaded
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({file: file, imagePreviewUrl: reader.result});
    }

    reader.readAsDataURL(file)
  }

  //function retrieves the actual data from the db to display them as current values
  setData() {
    var decoded = jwt.decode(localStorage.getItem('id_token')); //decoder for JWT Token
    localStorage.setItem('email', decoded.email);

    var target = ('http://backend-edu.azurewebsites.net/user/' + localStorage.getItem('email'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({VornameAlt: json[0].forename});
      this.setState({NachnameAlt: json[0].surname});
      this.setState({StadtAlt: json[0].city});
      this.setState({HausnummerAlt: json[0].number});
      this.setState({PostcodeAlt: json[0].postcode});
      this.setState({StrasseAlt: json[0].street});
      this.setState({Fach1Alt: json[0].subject1});
      this.setState({Fach2Alt: json[0].subject2});
      this.setState({Fach3Alt: json[0].subject3});
      this.setState({ProfilbeschreibungAlt: json[0].user_description});

    })
  }

  //Checks if the fields fit the requirements for the input
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

    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      });
    }
    return isError;
  };
//submit function which checks if a field is used and only then pushes the changes as new data in the db
  onSubmit() {
    this.setState({Laden: true});
    const {
      VornameAlt,
      NachnameAlt,
      StrasseAlt,
      HausnummerAlt,
      StadtAlt,
      PostcodeAlt,
      Fach1Alt,
      Fach2Alt,
      Fach3Alt,
      ProfilbeschreibungAlt
    } = this.state
    var Vorname = "";
    var Nachname = "";
    var Strasse = "";
    var Hausnummer = "";
    var Stadt = "";
    var Postcode = "";
    var Fach1 = "";
    var Fach2 = "";
    var Fach3 = "";
    var Profilbeschreibung = "";

    if (this.state.Vorname.length < 1) {
      Vorname = VornameAlt;
    } else {
      Vorname = this.state.Vorname;
    }
    if (this.state.Nachname.length < 1) {
      Nachname = NachnameAlt;
    } else {
      Nachname = this.state.Nachname;
    }
    if (this.state.Strasse.length < 1) {
      Strasse = StrasseAlt;
    } else {
      Strasse = this.state.Strasse;
    }
    if (this.state.Hausnummer.length < 1) {
      Hausnummer = HausnummerAlt;
    } else {
      Hausnummer = this.state.Hausnummer;
    }
    if (this.state.Stadt.length < 1) {
      Stadt = StadtAlt;
    } else {
      Stadt = this.state.Hausnummer;
    }
    if (this.state.Postcode.length < 1) {
      Postcode = PostcodeAlt;
    } else {
      Postcode = this.state.Postcode;
    }
    if (this.state.Fach1.length < 1) {
      Fach1 = Fach1Alt;
    } else {
      Fach1 = this.state.Fach1;
    }
    if (this.state.Fach2.length < 1) {
      Fach2 = Fach2Alt;
    } else {
      Fach2 = this.state.Fach2;
    }
    if (this.state.Fach3.length < 1) {
      Fach3 = Fach3Alt;
    } else {
      Fach3 = this.state.Fach3;
    }
    if(this.state.Profilbeschreibung < 1) {
      Profilbeschreibung = ProfilbeschreibungAlt;
    } else {
      Profilbeschreibung = this.state.Profilbeschreibung;
    }

    fetch('http://backend-edu.azurewebsites.net/user/', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        forename: Vorname,
        surname: Nachname,
        street: Strasse,
        city: Stadt,
        number: Hausnummer,
        postcode: Postcode,
        subject1: Fach1,
        subject2: Fach2,
        subject3: Fach3,
        user_description: Profilbeschreibung
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
    this.setState({ProfilbeschreibungAlt: Profilbeschreibung})
    localStorage.setItem("name", Vorname);
  }


  changePicture(){
    var forma = new FormData();
    forma.append('foo', this.state.file);
    forma.append('email', localStorage.getItem('email'));

    fetch('http://backend-edu.azurewebsites.net/user/changepicture', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    })
  }


  //the called function for the button which includes validation and data setting
  handleSubmit() {

    const err = this.validate();
    if (!err) {
      this.onSubmit();
      this.changePicture();
      this.setState({
        Vorname: "",
        Nachname: "",
        Strasse: "",
        Hausnummer: "",
        Stadt: "",
        Postcode: "",
        Fach1: "",
        Fach2: "",
        Fach3: "",
        Profilbeschreibung: "",
        vornameError: false,
        nachnameError: false,
        strasseError: false,
        hausnummerError: false,
        stadtError: false,
        postcodeError: false,
        Fehler: false,
        Erfolg: true
      });
      this.setState({Laden: false});
    }
  }

  //inital call after the component rendered so the data is displayed
  componentDidMount() {
    this.setData();
  }
//goback
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
      Profilbeschreibung
    } = this.state
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="img-circle"  style={{width: "200px", height: "200px"}} src={imagePreviewUrl}/>);
    } else {
      $imagePreview = (<img className="img-circle" style={{width: "200px", height: "200px"}} src={'http://backend-edu.azurewebsites.net/' + localStorage.getItem('picture')}/>);
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
                Daten Aktualisieren
                <Header.Subheader>
                  {localStorage.getItem("name")}
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
                  <label htmlFor="exampleFormControlFile1">
                    <b>Profilfoto Aktualisieren</b>
                  </label></div>
                      <div className="row justify-content-md-center">
                  <input type="file" onChange={(e) => this._handleImageChange(e)} className="form-control-file" id="exampleFormControlFile1"></input>
                </div></div>
              </div>
            </div>

            <div className="card-text">
              <Form loading={this.state.Laden} error={this.state.Fehler} success={this.state.Erfolg} onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                <Form.Field>
                  <label>Vorname</label>
                  <Form.Input name="Vorname" value={Vorname} onChange={this.handleChange} error={this.state.vornameError} placeholder={this.state.VornameAlt}/>
                </Form.Field>
                <Form.Field>
                  <label>Nachname</label>
                  <Form.Input name="Nachname" value={Nachname} onChange={this.handleChange} error={this.state.nachnameError} placeholder={this.state.NachnameAlt}/>
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field>
                  <label>Straße</label>
                  <Form.Input name="Strasse" value={Strasse} onChange={this.handleChange} error={this.state.strasseError} placeholder={this.state.StrasseAlt} style={{width: "600px"}}/>
                </Form.Field>
                <Form.Field>
                  <label>Hausnummer</label>
                  <Form.Input name="Hausnummer" value={Hausnummer} onChange={this.handleChange} error={this.state.hausnummerError} placeholder={this.state.HausnummerAlt} style={{width: "162px"}}/>
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <label>Postleitzahl</label>
                <Form.Input name="Postcode" value={Postcode} onChange={this.handleChange} error={this.state.postcodeError} placeholder={this.state.PostcodeAlt}/>
              </Form.Field>
                <Form.Field>
                  <label>Stadt</label>
                  <Form.Input name="Stadt" value={Stadt} onChange={this.handleChange} error={this.state.stadtError} placeholder={this.state.StadtAlt}/>
                </Form.Field>
                <Form.Field>
                <label>Schule</label>
                <Form.Input name="Schule"/>
              </Form.Field>
                <Form.Group inline={true}>
                  <Form.Field>
                    <label>Interessen / Fächer</label>
                    <Form.Input name="Fach1" value={Fach1} onChange={this.handleChange} error={this.state.fachError} placeholder={this.state.Fach1Alt} style={{width: "300px"}}/>

                    <Form.Input name="Fach2" value={Fach2} onChange={this.handleChange} placeholder={this.state.Fach2Alt} style={{width: "300px"}}/>

                    <Form.Input name="Fach3" value={Fach3} onChange={this.handleChange} placeholder={this.state.Fach3Alt} style={{width: "300px"}}/>
                  </Form.Field>
                </Form.Group>
                <Form.Field>
                    <label>Profilbeschreibung</label>
                  <Form.TextArea rows={2} value={Profilbeschreibung} onChange={this.handleChange} placeholder={this.state.ProfilbeschreibungAlt} name='Profilbeschreibung'/>
                </Form.Field>
                <Message error={true} header='Fehler bei Eingabe' content='Hausnummer und PLZ müssen Zahlen sein.'/>
                <Message success={true} header='Daten erfolgreich aktualisiert' content='Weiterhin viel Spaß auf Edu-Hub.'/>
              </Form>
            </div>

            <div className="container">
              <div className="row justify-content-md-center">
                <br/>
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

        </Card>
        <br/>
      </div>
    </div>);
  }
}

export default Admin;
