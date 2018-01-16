import React, {Component} from 'react';
import Auth from '../../Auth/Auth';
import {AUTH_CONFIG} from '../../Auth/auth0-variables';
import Auth0Lock from 'auth0-lock';
import history from '../../history';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {
  Header,
  Icon,
  Image,
  Container,
  Card,
  Grid,
  Button,
  Message,
  Input,
  Menu,
  Segment,
  Divider,
  Form,
  Transition,
  Dropdown,
  Checkbox,
  Statistic
} from 'semantic-ui-react';
import Welcome from '../Pages/Welcome/Welcome';
import ProjectCards from '../../components/ProjectCards/ProjectCards';
import 'whatwg-fetch'

var options = {
  language: 'de',
  oidcConformant: true,
  socialButtonStyle: 'small',
  rememberLastLogin: true,
  loginAfterSignUp: true,
  theme: {
    logo: '/img/logo.png',
    primaryColor: '#20a8d8',
    labeledSubmitButton: false
  },
  auth: {
    params: {
      param1: "value1"
    },
    redirect: true,
    redirectUrl: AUTH_CONFIG.callbackUrl, //change for production
    responseType: 'token id_token',
    audience: 'https://kevkle.eu.auth0.com/userinfo',
    sso: true,
    params: {
      scope: 'openid email'
    }
  },
  languageDictionary: {
    emailInputPlaceholder: "Ihre Email",
    title: ""
  }
};

const auth = new Auth();
var lock = new Auth0Lock('TAzP3VaJ1PJgDR2S5zTV0c4inUpt9A9J', 'kevkle.eu.auth0.com', options);



//dashboard class where we can see up to date project and which is in general our landing page
class Dashboard extends React.Component {

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      activeItem: '',
      dropdownOpen: false,
      activeItem: "Kernprojekte",
      Data: [],
      visible: false
    };

    this.toggle = this.toggle.bind(this);
  }

  lockLogin() {
    lock.show();

  }

  //Class to create a new project card with all the necessary data
  createImage(image) {
    return <ProjectCards name={image.project_name} members={image.project_membercount} text={image.project_text} bild={image.project_imagepath} erstellt={image.project_created_at} link={image.projectid} key={image.projectid}/>;
  }

  //this is the mapping class which uses createImage on every content of the array
  createImages(images, start, end) {
    var Plist = images.slice(start, end)
    return Plist.map(this.createImage);

  }
  //handler for the menu on top to change categories
  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  //dropdown handler
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen

    });
  }

  //fetch call to get all projects we have available atm TODO: Remove subprojects, make it dynamically, have some kind of sorting
  getProjects() {
    var target = ('http://backend-edu.azurewebsites.net/project/landingpage/get')
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        Data: json
      }, function() {
        this.setState({
          Id: this.state.Data.map((elem) => elem.projectid)
        }, function() {});
      })

    })
  }
  searchProject() {
    history.push('/discover');
  };

  newProject() {
    history.replace('/wizard1');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  //inital call after component did render
  componentDidMount() {
    this.getProjects();

  }

  render() {
    const logged = this.isAuthenticated();
    const {activeItem} = this.state;
    const { visible } = this.state;
    const kategorie = [
      { key: 'a', text: 'Lehr und Lernprozess', value: 'a' },
      { key: 'b', text: 'Management', value: 'b' },
      { key: 'c', text: 'Unterstützungsprozess', value: 'c' },
    ]

    return (<div className="animated fadeIn">
      <div className="row justify-content-md-center">
        <div className="position-relative">

          <img className="banner" src='../img/EduBanner.png'/> {
            !logged && (<Button onClick={this.lockLogin} basic={true} color='grey' style={{
                position: 'relative',
                size: 'medium',
                height: 'auto',
                left: '320px',
                bottom: '46px'
              }}>
              <b>Einloggen/ Registrieren</b>
            </Button>)
          }

        </div>

      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <br/>
          <Menu style={{
              width: '1200px'
            }} secondary={true}>
            <Menu.Item>
              <Header as='h2' color='grey' floated='left'>
                Projekte entdecken
              </Header>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
              <Button content={visible ? 'Verbergen' : 'Projekt suchen'} onClick={this.toggleVisibility} />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <Divider fitted={true} style={{
              width: '1115px'
            }}/>
        </div>
      </div><br/>

      <Transition visible={visible} animation='scale'>
        <div className="row justify-content-md-center">
          <Card centered style={{ backgroundColor: "#FFFFFF", width: '1115px' }}>
             <Segment.Group fluid='true' vertical='true'>
               <Segment basic={true}><Input fluid placeholder='Titel / Beschreibung'/></Segment>
               <Segment basic={true}> <Dropdown style={{color: 'teal'}} placeholder='Kategorie' fluid multiple search selection options={kategorie} /><br/><div>
           <Button floated='right' animated={true} color='teal' style={{
               width: "150px", position: 'relative'
             }}>
             <Button.Content hidden={true}>suchen</Button.Content>
             <Button.Content visible={true}>
               <Icon name='search'/>
             </Button.Content>
           </Button><br/></div><br/></Segment>
         </Segment.Group></Card>
         <div className="container">
        <div className="row justify-content-md-center">
        <Menu style={{width: '1200px'}} secondary>
           <Menu.Menu position='right'>
             <Menu.Item>
           <Statistic color='grey' size='tiny'>
            <Statistic.Value>5</Statistic.Value>
            <Statistic.Label >Treffer</Statistic.Label>
          </Statistic>
        </Menu.Item>
      </Menu.Menu>
         </Menu>
       </div></div>

            </div>

      </Transition>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="menu">
            <br/>
            <Grid doubling={true} columns={4} divided='vertically'>
              <Grid.Row>
                {this.createImages(this.state.Data, 0, 7)}
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Dashboard;
