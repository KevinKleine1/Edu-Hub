import React, {Component} from 'react';
import history from '../../history';
import {
  Container,
  Input,
  InputGroup,
  InputGroupAddon} from 'reactstrap';
import {Header, Icon, Button,Card} from 'semantic-ui-react';

class Admin extends Component {

  goBack(){
    history.go(-1);
  }

  changeSave() {
    history.replace('/profil');
  };

  render() {
    return (<div className="container">
      <div className="row justify-content-md-center">
        <Card style={{width: "800px"}}>
          <Card.Content style={{width: "800px"}}>

            <Header as='h2'>
      <Icon name='setting' />
      <Header.Content>
        Profil bearbeiten
        <Header.Subheader>
          Maria Müller
        </Header.Subheader>
      </Header.Content>
      </Header>
            <br/>
            <div className="container">
              <div className="row justify-content-md-center">
                  <img className="img-circle" src='../img/avatars/5.jpg'></img>
                <br/>
              </div>
            </div>
            <br/>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1"><b>Profilfoto aktualisieren</b></label>
                  <br/>
                  <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                </div>
              </div>
            </div>

            <div className="card-text">
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='user' />
                </InputGroupAddon>

                <Input type="text" placeholder="Name"/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='map pin' />
                </InputGroupAddon>

                <Input type="text" placeholder="Anschrift"/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='mail' />
                </InputGroupAddon>

                <Input type="text" placeholder="Email"/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='student' />
                </InputGroupAddon>
                <Input type="text" placeholder="Schule"/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='book' />
                </InputGroupAddon>
                <Input type="text" placeholder="Fächer"/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='write' />
                </InputGroupAddon>
                <Input type="text" placeholder="Profilbeschreibung"/>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='lock' />
                </InputGroupAddon>

                <Input type="password" placeholder="altes Passwort"/>
              </InputGroup>
            </div>
            <div>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='lock' />
                </InputGroupAddon>
                <Input type="password" placeholder="neues Passwort"/>
              </InputGroup>
            </div>
            <div>
              <InputGroup className="mb-3">
                <InputGroupAddon>
                  <Icon name='lock' />
                </InputGroupAddon>
                <Input type="password" placeholder="Passwort wiederholen"/>
              </InputGroup>

            </div>

            <div className="container">
              <div className="row justify-content-md-center">
                <Button animated color='teal' style={{width: "150px"}} onClick={this.changeSave}>
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
