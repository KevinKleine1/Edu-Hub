import React, {Component} from 'react';
import Auth from '../../Auth/Auth';
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
  Segment
} from 'semantic-ui-react';
import Welcome from '../Pages/Welcome/Welcome';

const auth = new Auth();

class Dashboard extends React.Component {
  state = {
    activeItem: 'bio'
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      dropdownOpen: false

    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen

    });
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  test() {
    history.push
  }

  render() {
    const logged = this.isAuthenticated();
    const {activeItem} = this.state
    return (<div className="animated fadeIn">
      {
        logged && (<div className="container">
          <div className="row justify-content-md-center">

            <div>
              <div className="container">
                <div className="row justify-content-md-center">
                  <Menu attached='top' tabular={true} size="large">
                    <Menu.Item color='teal' name='Kernprojekte' active={activeItem === 'Kernprojekte'} onClick={this.handleItemClick}/>
                    <Menu.Item color='teal' name='Unterst&uuml;tzende Projekte' active={activeItem === 'Unterst&uuml;tzende Projekte'} onClick={this.handleItemClick}/>
                    <Menu.Item color='teal' name='Administrative Projekte' active={activeItem === 'Administrative Projekte'} onClick={this.handleItemClick}/>
                    <Menu.Menu position='right'>
                      <Menu.Item>
                        <Input transparent={true} icon={{
                            name: 'search',
                            link: true
                          }} placeholder='Projekt suchen...'/>
                      </Menu.Item>
                    </Menu.Menu>
                  </Menu>
                  <br/>
                </div>
              </div>
            </div>
            <div>
              <div className="container">
                <div className="row justify-content-md-center">
                  <br/>

                  <Card style={{
                      height: "100px",
                      width: "800px"
                    }}>
                    <Card.Content>
                      <Card.Header>Edu Hub von & für Lehrer</Card.Header>
                      <Card.Meta>Plattform für LehrerInnen</Card.Meta>
                      <Card.Description>
                        <b>Nach Projekten suchen, erstellen & gemeinsam entwickeln</b>
                        <Button animated={true} floated='right' color='teal'>
                          <Button.Content visible={true}>Projekt erstellen</Button.Content>
                          <Button.Content hidden={true}>
                            <Icon name='right arrow'/>
                          </Button.Content>
                        </Button>
                      </Card.Description>

                    </Card.Content>
                  </Card>


                  <br/>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">

                <Grid doubling columns={4} divided='vertically'>
                  <Grid.Row>
                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt1.jpg'/>
                        <Card.Content>
                          <Card.Header>
                            Digitale Bibliothek
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 05.12.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            22 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>

                        </Card.Content>
                      </Card>
                    </Grid.Column>

                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt2.jpg'/>
                        <Card.Content>
                          <Card.Header>
                            Experiment
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 03.12.2017
                            </span>

                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            5 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt3.jpg'/>
                        <Card.Content>
                          <Card.Header>
                            Selbstlernzentrum
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 28.11.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            52 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>

                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt4.jpeg'/>
                        <Card.Content>
                          <Card.Header>
                            Cafeteria
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 05.12.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            2 Mitglieder
                          </a>
                          <Button floated='right' animated={true} color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Grid doubling columns={4} divided='vertically'>
                  <Grid.Row>
                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt5.jpeg'/>
                        <Card.Content>
                          <Card.Header>
                            Garten AG
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 05.12.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            32 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>

                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt6.jpeg'/>
                        <Card.Content>
                          <Card.Header>
                            KFZ Werkstatt
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 03.12.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            5 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt7.jpeg'/>
                        <Card.Content>
                          <Card.Header>
                            Tablet Klasse
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 28.11.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            20 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>

                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt8.jpeg'/>
                        <Card.Content>
                          <Card.Header>
                            Erste Hilfe Seminar
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 05.12.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            8 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </div>

          </div>
        </div>)

      }
      {
        !logged && (<div className="container">
          <div className="row justify-content-md-center">
            <div>
              <div className="container">
                <div className="row justify-content-md-center">
                  <Menu attached='top' tabular={true} size="large">
                    <Menu.Item color='teal' name='Kernprojekte' active={activeItem === 'Kernprojekte'} onClick={this.handleItemClick}/>
                    <Menu.Item color='teal' name='Unterstützende Projekte' active={activeItem === 'Unterstützende Projekte'} onClick={this.handleItemClick}/>
                    <Menu.Item color='teal' name='Administrative Projekte' active={activeItem === 'Administrative Projekte'} onClick={this.handleItemClick}/>
                    <Menu.Menu position='right'>
                      <Menu.Item>
                        <Input transparent={true} icon={{
                            name: 'search',
                            link: true
                          }} placeholder='Projekt suchen...'/>
                      </Menu.Item>
                    </Menu.Menu>
                  </Menu>
                  <br/>
                </div>
              </div>
            </div>
            <div>
              <div className="container">
                <div className="row justify-content-md-center">
                  <br/>
                  <Card style={{
                      height: "100px",
                      width: "800px"
                    }}>
                    <Card.Content>
                      <Card.Header>Edu Hub von & für Lehrer</Card.Header>
                      <Card.Meta>Plattform für LehrerInnen</Card.Meta>
                      <Card.Description>
                        <b>Nach Projekten suchen, erstellen & gemeinsam entwickeln</b>
                        <Button animated={true} floated='right' color='teal'>
                          <Button.Content visible={true}>Projekt erstellen</Button.Content>
                          <Button.Content hidden={true}>
                            <Icon name='right arrow'/>
                          </Button.Content>
                        </Button>
                      </Card.Description>

                    </Card.Content>
                  </Card>

                  <br/>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">

                <Grid doubling columns={4} divided='vertically'>
                  <Grid.Row>
                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt1.jpg'/>
                        <Card.Content>
                          <Card.Header>
                            Digitale Bibliothek
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 05.12.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            22 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>

                        </Card.Content>
                      </Card>
                    </Grid.Column>

                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt2.jpg'/>
                        <Card.Content>
                          <Card.Header>
                            Experiment
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 03.12.2017
                            </span>

                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            5 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt3.jpg'/>
                        <Card.Content>
                          <Card.Header>
                            Selbstlernzentrum
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 28.11.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            52 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>

                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt4.jpeg'/>
                        <Card.Content>
                          <Card.Header>
                            Cafeteria
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 05.12.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            2 Mitglieder
                          </a>
                          <Button floated='right' animated={true} color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Grid doubling columns={4} divided='vertically'>
                  <Grid.Row>
                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt5.jpeg'/>
                        <Card.Content>
                          <Card.Header>
                            Garten AG
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 05.12.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            32 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>

                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt6.jpeg'/>
                        <Card.Content>
                          <Card.Header>
                            KFZ Werkstatt
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 03.12.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            5 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt7.jpeg'/>
                        <Card.Content>
                          <Card.Header>
                            Tablet Klasse
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 28.11.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            20 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>

                    <Grid.Column>
                      <Card>
                        <Image src='../img/Landingpage/projekt8.jpeg'/>
                        <Card.Content>
                          <Card.Header>
                            Erste Hilfe Seminar
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                              erstellt am 05.12.2017
                            </span>
                          </Card.Meta>
                          <Card.Description style={{
                              height: "150px"
                            }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Card.Description>
                        </Card.Content>
                        <Card.Content extra={true}>
                          <a>
                            <Icon name='user'/>
                            8 Mitglieder
                          </a>
                          <Button animated={true} floated='right' color='teal'>
                            <Button.Content visible={true}>Details</Button.Content>
                            <Button.Content hidden={true}>
                              <Icon name='right arrow'/>
                            </Button.Content>
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>);
  }
}

export default Dashboard;
