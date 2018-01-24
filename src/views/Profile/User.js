import React, {Component, Border} from 'react';
import {
  Container,
  Segment,
  Card,
  Grid,
  Image,
  Header,
  Form,
  Icon,
  Button,
  Comment,
  Statistic,
  Label,
  List
} from 'semantic-ui-react';
import history from '../../history';
import ListItems from '../../components/ListItems/ListItems';


//this is the page which gets displayed when you visit an external profile
class User extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      Name: "",
      Vorname: "",
      Bild: "",
      Beschreibung: "",
      Id: "",
      Erstellt: "",
      Data: [],
      Private: false,
      Schule: ""
    };
  }

  //fetching the corresponding data from the server to display it on the webpage
  setData() {
    var target = ('http://backend-edu.azurewebsites.net/user/' + this.props.match.params.usermail)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({Name: json[0].surname});
      this.setState({Vorname: json[0].forename})
      this.setState({Bild: json[0].profilpic});
      this.setState({Erstellt: json[0].user_created_at});
      this.setState({Beschreibung: json[0].user_description});
      this.setState({Schule: json[0].school_name});
      this.setState({Fach1: json[0].subject1});
      this.setState({Fach2: json[0].subject2});
      this.setState({Fach3: json[0].subject3});
      if (json[0].user_privacy === 1){
        this.setState({Private: true});
      } else{
        this.setState({Private: false});
      }
    })
  }

  //date formatting function
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

  //set the projects of the user you are watching
  getProjects() {
    var target = ('http://backend-edu.azurewebsites.net/user/getmyproject/' + this.props.location.state.userid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        Data: json
      }, function() {})

    })
  }

  //creates the list of the Projectitems
  createList(item) {
    return <ListItems titel={item.project_name} erstellt={item.project_created_at} link={item.projectid} key={item.projectid}/>;
  }

  createLists(items) {

    return items.map(this.createList);

  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  goBack() {
    history.go(-1);
  }

  //initial mount call
  componentDidMount() {
    this.setData();
    this.getProjects();
  }

  render() {
    const {Name, Vorname, Bild, Beschreibung, Private, Schule, Fach1, Fach2, Fach3} = this.state
    var Erstellt = this.formatDateMonthName(this.state.Erstellt);
    var Projekte = this.state.Data.length;
    return (


    <div className="animated fadeIn">
      <br/>
      <Grid stackable={true} columns={2} divided={true}>
        <Grid.Row>
        {
           !Private && (
          <Grid.Column width={13}>
            <div className="container">
              <div className="row justify-content-md-center">
                <Segment vertical={true} style={{
                    width: "800px"
                  }}>
                  <Header as='h2'>
                    <Icon name='user outline'/>
                    <Header.Content>
                      {Vorname} {Name}
                      <Header.Subheader>
                        Profil
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                  <p style={{
                      width: "800px"
                    }}>{Beschreibung}</p>
                </Segment>
                <Segment vertical={true} style={{
                    width: "800px"
                  }}>
                  <Header as='h3' floated='left'>
                    <b>Name</b>
                  </Header>

                  <Header as='h3' floated='right' color='grey'>
                    {Vorname} {Name}
                  </Header>
                </Segment>
                <Segment vertical={true} style={{
                    width: "800px"
                  }}>
                  <Header as='h3' floated='left'>
                    <b>Schule</b>
                  </Header>
                  <Header as='h3' floated='right' color='grey'>
                    {Schule}
                  </Header>
                </Segment>
                <Segment vertical={true} style={{
                    width: "800px"
                  }}>
                  <Header as='h3' floated='left'>
                    <b>Interessen / Fächer</b>
                  </Header>
                  <Header as='h3' floated='right' color='grey'>
                    {Fach1}, {Fach2}, {Fach3}
                  </Header>
                </Segment>
                <Segment vertical={true} style={{
                    width: "800px"
                  }}>
                  <Header as='h3' floated='left'>
                    <b>Mitglied seit</b>
                  </Header>
                  <Header as='h3' floated='right' color='grey'>
                    {Erstellt}
                  </Header>
                </Segment>
                <Segment vertical={true} style={{
                    width: "800px"
                  }}>
                  <div className="container">
                    <div className="row justify-content-md-center">
                      <Button animated={true} color='teal' onClick={this.goBack} style={{
                          width: "130px",
                          height: "40px"
                        }}>
                        <Button.Content visible={true}>Zurück</Button.Content>
                        <Button.Content hidden={true}>
                          <Icon name='arrow left'/>
                        </Button.Content>
                      </Button>
                    </div>
                  </div>
                </Segment>
              </div>
            </div>
          </Grid.Column>
           )}
            {
           Private && (
          <Grid.Column width={13}>
            <div className="container">
              <div className="row justify-content-md-center">
                <Segment vertical={true} style={{
                    width: "800px"
                  }}>
                  <Header as='h2'>
                    <Icon name='user outline'/>
                    <Header.Content>
                    Privates Profil
                      <Header.Subheader>
                        Profil
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                  <p style={{
                      width: "800px"
                    }}>Das Profil dieses Nutzers ist privat.</p>
                </Segment>
                <Segment vertical={true} style={{
                    width: "800px"
                  }}>
                  <div className="container">
                    <div className="row justify-content-md-center">
                      <Button animated={true} color='teal' onClick={this.goBack} style={{
                          width: "130px",
                          height: "40px"
                        }}>
                        <Button.Content visible={true}>Zurück</Button.Content>
                        <Button.Content hidden={true}>
                          <Icon name='arrow left'/>
                        </Button.Content>
                      </Button>
                    </div>
                  </div>
                </Segment>
              </div>
            </div>
          </Grid.Column>
           )}


          <Grid.Column width={3}>
            <div className="container">
              <div className="row justify-content-md-center">
                <img className="img-circle" src={'http://backend-edu.azurewebsites.net/' + Bild} align="center" style={{
                    width: "200px",
                    height: "200px"
                  }}></img>
                <div></div>

                {
                  !Private &&(
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div><br/>
                      <Button animated={true} color='teal' href={'mailto:' + this.props.match.params.usermail} style={{
                          width: "200px",
                          height: "40px",
                          top: "1px"
                        }}>
                        <Button.Content visible={true}>Nachricht schreiben</Button.Content>
                        <Button.Content hidden={true}>
                          <Icon name='mail'/>
                        </Button.Content>
                      </Button>
                    </div>
                  </div>
                </div>
                  )}  
              </div>
            </div>
            <br/>
            {
                  !Private &&(
            <div className="container">
              <div className="row justify-content-md-center">
                <Statistic color='violet'>
                  <Statistic.Value>
                    <Icon name='puzzle'/> {Projekte}
                  </Statistic.Value>
                  <Statistic.Label>Projektmitglied</Statistic.Label>
                  <br/>
                </Statistic>
              </div>
            </div>
                  )}
                    {
                  !Private &&(
            <div className="container">
              <div className="row justify-content-md-center">
                <List divided={true} relaxed={true}>
                  {this.createLists(this.state.Data)}
                </List>
              </div>

            </div>
                  )}

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>)
  }
}

export default User;
