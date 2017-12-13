import React, {Component, Border} from 'react';
import {Container, Segment, Card, Grid, Image, Header, Form, Icon, Button, Comment, Statistic, Label, List} from 'semantic-ui-react';
import history from '../../history';


var redirectToMail = 'mailto:?body='
// changes const

class User extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  goBack(){
    history.go(-1);
  }

  render() {

    return (
        <Grid stackable columns={2} divided>
          <Grid.Row>
     <Grid.Column width={13}>
       <div className="container">
            <div className="row justify-content-md-center">
<Segment vertical style={{width: "800px"}}>
                 <Header as='h2'>
                 <Icon name='user outline' />
                 <Header.Content>
                 Maria Müller
                 <Header.Subheader>
                 Profil
                 </Header.Subheader>
                 </Header.Content>
                 </Header>
                 <p style={{width: "800px"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
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
            <b>Schule</b>
           </Header>
           <Header as='h3' floated='right' color='grey'>
           Gymnasium Köln-Ehrenfeld
           </Header>
</Segment>
<Segment vertical style={{width: "800px"}}>
           <Header as='h3' floated='left'>
            <b>Mitglied seit</b>
           </Header>
           <Header as='h3' floated='right' color='grey'>
           07. Dezember 2017
           </Header>
</Segment>
<Segment vertical style={{width: "800px"}}>
  <div className="container">
       <div className="row justify-content-md-center">
<Button animated color='teal' onClick={this.goBack} style={{width: "130px", height: "40px"}}>
<Button.Content visible>Zurück</Button.Content>
<Button.Content hidden>
  <Icon name='arrow left' />
</Button.Content>
</Button></div></div>
</Segment>
</div></div>

           </Grid.Column>
                      <Grid.Column width={3}>
                        <div className="container">
                             <div className="row justify-content-md-center">
<img className="img-circle" src ='/img/avatars/5.jpg' align="center" style={{width: "200px", height: "200px"}}></img>
<div></div>
<div className="container">
     <div className="row justify-content-md-center">
       <div><br/>
<Button animated color='teal' href={redirectToMail} style={{width: "200px", height: "40px", top: "1px"}}>
<Button.Content visible>Nachricht schreiben</Button.Content>
<Button.Content hidden>
  <Icon name='mail' />
</Button.Content>
</Button></div></div></div>
            <Statistic color='purple'> <br/>
              <Statistic.Value>
                <Icon name='diamond'/>
                84
              </Statistic.Value>
              <Statistic.Label>Karma</Statistic.Label>
                <br/>
              </Statistic>
          </div></div>
          <div className="container">
             <div className="row justify-content-md-center">
        <Statistic color='violet'>
          <Statistic.Value>
            <Icon name='puzzle'/>
            5
          </Statistic.Value>
             <Statistic.Label>Projektmitglied</Statistic.Label>
             <br/>
             </Statistic>
           </div>
         </div>
                 <div className="container">
                    <div className="row justify-content-md-center">
               <Statistic color='blue'>
                 <Statistic.Value>
                   <Icon name='star'/>
                   3
                 </Statistic.Value>
                    <Statistic.Label>Eigene Projekte</Statistic.Label>
                    </Statistic>
               <List divided relaxed>
    <List.Item>
      <List.Icon name='star' size='large' color='blue' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Selbstlernzentrum</List.Header>
        <List.Description as='a'>erstellt am 28.11.2017</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='star' size='large' color='blue' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Bundesjugendspiele</List.Header>
        <List.Description as='a'>erstellt am 03.12.2017</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='star' size='large' color='blue' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Digitale Bibliothek</List.Header>
        <List.Description as='a'>erstellt am 05.12.2017</List.Description>
      </List.Content>
    </List.Item>
  </List>
</div></div>
    </Grid.Column>
             </Grid.Row>
              </Grid>


  )
  }
}

export default User;
