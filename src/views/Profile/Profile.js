import React, {Component, Border} from 'react';
import {
  Container,
  Segment,
  Image,
  Header,
  Icon,
  Button,
  Statistic,
  Label
} from 'semantic-ui-react';
import history from '../../history';
import jwt from 'jsonwebtoken';

var vorname,
  name,
  strasse,
  stadt,
  hausnummer,
  postcode,
  schule;

var karma = 800;

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }


  //calls db for a fetch of the user data
  setData() {
    var target = ('http://backend-edu.azurewebsites.net/user/' + localStorage.getItem('email'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({Vorname: json[0].forename});
      this.setState({Nachname: json[0].surname});
      this.setState({Stadt: json[0].city});
      this.setState({Beschreibung: json[0].user_description});
      this.setState({Hausnummer: json[0].number});
      this.setState({Postcode: json[0].postcode});
      this.setState({Strasse: json[0].street});
      this.setState({Fach1: json[0].subject1});
      this.setState({Fach2: json[0].subject2});
      this.setState({Fach3: json[0].subject3});
      this.setState({Bild: json[0].profilpic});

    })
  }

  changeView() {
    history.push('/admin');
  };

  goBack() {
    history.go(-1);
  }

  //initial fetch call
  componentDidMount() {
    this.setData();
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
      Bild,
      Beschreibung
    } = this.state
    return (
    <div className="animated fadeIn">
      <div className="container">
        <div className="row justify-content-md-center">
          <Segment vertical={true} style={{
              width: "800px"
            }}>
            <img className="img-circle" src={ 'http://backend-edu.azurewebsites.net/' +  localStorage.getItem('picture') } style={{
                width: "200px"
              }} align="right"></img>
            <Header as='h2'>
              <Icon name='user outline'/>
              <Header.Content>
                {Vorname} {Nachname}
                <Header.Subheader>
                  Mein Profil
                </Header.Subheader>
              </Header.Content>
            </Header>
            <p style={{
                width: "580px"
              }}>{Beschreibung}</p>
          </Segment>
          <Segment vertical={true} style={{
              width: "800px"
            }}>
            <Header as='h3' floated='left'>
              <b>Name</b>
            </Header>
            <Header as='h3' floated='right' color='grey'>
              {Vorname} {Nachname}
            </Header>
          </Segment>
          <Segment vertical={true} style={{
              width: "800px"
            }}>
            <Header as='h3' floated='left'>
              Anschrift
            </Header>
            <Header as='h3' floated='right' color='grey'>
              {Strasse} {Hausnummer}, {Postcode} {Stadt}
            </Header>
          </Segment>
          <Segment vertical={true} style={{
              width: "800px"
            }}>
            <Header as='h3' floated='left'>
              Email
            </Header>
            <Header as='h3' floated='right' color='grey'>
              {localStorage.getItem("email")}
            </Header>
          </Segment>
          <Segment vertical={true} style={{
              width: "800px"
            }}>
            <Header as='h3' floated='left'>
              Schule
            </Header>
            <Header as='h3' floated='right' color='grey'>
              Open-School
            </Header>
          </Segment>
          <Segment vertical={true} style={{
              width: "800px"
            }}>
            <Header as='h3' floated='left'>
              Fächer
            </Header>
            <Header as='h3' floated='right' color='grey'>
              {Fach1}, {Fach2}, {Fach3}
            </Header>
          </Segment>
          <div className="container">
            <div className="row justify-content-md-center">
              <div>
                <br/>
                <Button animated={true} color='teal' style={{
                    width: "150px"
                  }} onClick={this.changeView}>
                  <Button.Content hidden={true}>bearbeiten</Button.Content>
                  <Button.Content visible={true}>
                    <Icon name='pencil'/>
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
          </div>

        </div>
        <br/>
      </div>
    </div>
    )
  }
}
export default Profile;
