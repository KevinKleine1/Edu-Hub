import React, {Component} from 'react';
import {Container, Segment, Image, Header, Icon, Button} from 'semantic-ui-react';




//change url to relative ones

class Profile extends Component {
    render() {
      return (
 <div className="container">
      <div className="row justify-content-md-center">
        <Segment vertical style={{width: "800px"}}>
            <img className="img-circle" src='../img/avatars/5.jpg' style={{width: "200px"}} align="right"></img>
          <Header as='h2'>
    <Icon name='user outline' />
    <Header.Content>
      Maria Müller
      <Header.Subheader>
        Mein Profill
      </Header.Subheader>
    </Header.Content>
  </Header>
        <p style={{width: "580px"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </Segment>
      <Segment vertical style={{width: "800px"}}>
    <Header as='h3' floated='left'>
     <b>Name</b>
    </Header>
    <Header as='h3' floated='right' color='grey'>
      Maria Müller
    </Header>
      </Segment>
      <Segment vertical style={{width: "800px"}}>
    <Header as='h3' floated='left'>
      Anschrift
    </Header>
    <Header as='h3' floated='right' color='grey'>
      Alter Markt 43a, 50825 Köln
    </Header>
      </Segment>
      <Segment vertical style={{width: "800px"}}>
    <Header as='h3' floated='left'>
      Email
    </Header>
    <Header as='h3' floated='right' color='grey'>
      maria.mueller@gmx.de
    </Header>
      </Segment>
      <Segment vertical style={{width: "800px"}}>
    <Header as='h3' floated='left'>
      Schule
    </Header>
    <Header as='h3' floated='right' color='grey'>
      Gymnasium Köln-Ehrenfeld
    </Header>
      </Segment>
      <div className="container">
<div className="row justify-content-md-center">
  <div>
    <br/>
    <Button animated style={{width: "150px"}} a href="http://localhost:8080/#/dashboard">
          <Button.Content visible>bearbeiten</Button.Content>
          <Button.Content hidden>
            <Icon name='pencil' />
          </Button.Content>
        </Button>
        <Button animated style={{width: "150px"}}>
              <Button.Content visible>zurück</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
</div>
</div>
</div>
  </div>
</div>
      )
    }
  }
  export default Profile;