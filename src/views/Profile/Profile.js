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
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

    this.state = {
      profileData: [],
      Erstellt: ""
    };


  }

  createNode(node) {
    return <ProfileComponent type={node.project_projecttype} name={node.project_name} authorname={node.surname} authorvorname={node.forename} authormail={node.email} text={node.project_text} userid={node.userid} projectid={node.projectid} key={node.projectid}/>;
  }

  createNodes(nodes) {

    return nodes.map(this.createNode);

  }


  //calls db for a fetch of the user data
  setData() {
    var target = ('http://backend-edu.azurewebsites.net/user/' + localStorage.getItem('email'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({NutzerId: json[0].userid}, function(){
        localStorage.setItem('userid', this.state.NutzerId);
        this.getTimeline();
      })
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
      this.setState({Erstellt: json[0].user_created_at})
      this.setState({Schule: json[0].school_name});

    })
  }

  getTimeline(){
    var target = ('http://backend-edu.azurewebsites.net/user/profil/timeline/' + localStorage.getItem('userid'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
       profileData: json
      }, function() {})

    })
  }

  formatDateMonthName(date_unformatted) {
    var day = date_unformatted.substr(8, 2);
    var month = date_unformatted.substr(5, 2);
    var year = date_unformatted.substr(0, 4);
    var monthNamed = null;
    if (month == '01') {
      monthNamed = 'Januar';
    } else if (month == '02') {
      monthNamed = 'Februar';
    } else if (month == '03') {
      monthNamed = 'März';
    } else if (month == '04') {
      monthNamed = 'April';
    } else if (month == '05') {
      monthNamed = 'Mai';
    } else if (month == '06') {
      monthNamed = 'Juni';
    } else if (month == '07') {
      monthNamed = 'Juli';
    } else if (month == '08') {
      monthNamed = 'August';
    } else if (month == '09') {
      monthNamed = 'September';
    } else if (month == '10') {
      monthNamed = 'Oktober';
    } else if (month == '11') {
      monthNamed = 'November';
    } else {
      monthNamed = 'Dezember';
    }
    return day + '.' + monthNamed + '.' + year;
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
      Beschreibung,
      Schule
    } = this.state
    var Erstellt = this.formatDateMonthName(this.state.Erstellt);
    return (
    <div className="animated fadeIn">
      <div className="container">
        <div className="row justify-content-md-center">
          <Segment vertical={true} style={{
              width: "800px"
            }}>
            <img className="img-circle" src={ 'http://backend-edu.azurewebsites.net/' +  localStorage.getItem('picture') } style={{
                width: "200px", height: "200px"
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
              {Schule}
            </Header>
          </Segment>
          <Segment vertical={true} style={{
              width: "800px"
            }}>
            <Header as='h3' floated='left'>
              Interessen / Fächer
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
      <VerticalTimeline>
      {this.createNodes(this.state.profileData)}
      <VerticalTimelineElement className="vertical-timeline-element--education" iconStyle={{
              background: 'rgb(233, 30, 99)',
              color: '#fff'
            }} animate={true}>
            <h3 className="vertical-timeline-element-title">Beitritt</h3>
            <p>
              Ist am {""} {Erstellt} {""}
              Edu - Hub beigetreten.
            </p>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    )
  }
}
export default Profile;
