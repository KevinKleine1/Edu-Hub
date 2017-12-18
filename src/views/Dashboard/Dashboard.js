import React, {Component} from 'react';
import Auth from '../../Auth/Auth';
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
  Divider
} from 'semantic-ui-react';
import Welcome from '../Pages/Welcome/Welcome';
import ProjectCards from '../../components/ProjectCards/ProjectCards';
import 'whatwg-fetch'

const auth = new Auth();

//dashboard class where we can see up to date project and which is in general our landing page
class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      activeItem: '',
      dropdownOpen: false,
      activeItem: "Kernprojekte",
      Data: []
    };

    this.toggle = this.toggle.bind(this);
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
    var target = ('http://edu-hub-backend.azurewebsites.net/project/')
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

    return (<div className="animated fadeIn">
      <Container fluid={true}>
        <img src='../img/eduhub.png' style={{
            width: "100%",
            height: 'auto'
          }}/>
        <Button basic={true} color='grey' style={{
            position: 'absolute',
            width: '15%',
            height: 'auto',
            left: '324px',
            top: '470px'
          }}>
          <b>registrieren</b>
        </Button>
        <Divider hidden={true}/>
      </Container>
      <Divider hidden={true}/>
      <div className="container">
        <div className="row justify-content-md-center">
          <Grid doubling={true} columns={4} divided='vertically'>
            <Header as='h2' color='grey' floated='left'>
              Projekte entdecken
            </Header>
            <Grid.Row>
              {this.createImages(this.state.Data, 0, 4)}
            </Grid.Row>
          </Grid>
          <Grid doubling={true} columns={4} divided='vertically'>
            <Grid.Row>
              {this.createImages(this.state.Data, 4, 8)}
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </div>);
  }
}

export default Dashboard;
