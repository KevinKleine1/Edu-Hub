import React, {Component, Border} from 'react';
import {Container, Segment, Card, Grid, Image, Header, Icon, Button, Statistic, Label} from 'semantic-ui-react';
import history from '../../history';



// changes const

class Test2 extends Component {
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

wizardPage2() {
    history.replace('/wizard2');
  }

  render() {

    return (

      <div className="container">
      <div className="row justify-content-md-center">
               <Segment vertical style={{width: "800px"}}>

                 <img className="img-circle" src ='/img/avatars/5.jpg' style={{width: "200px"}} align="right"></img>
                 <Header as='h2'>
                 <Icon name='user' />
                 <Header.Content>
                 Maria Müller
                 <Header.Subheader>
                 Profil
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
                      <br/>
 <Statistic.Group>
            <Statistic color='purple'>
              <Statistic.Value>
                <Icon name='diamond'/>
                84
              </Statistic.Value>
              <Statistic.Label>Karma</Statistic.Label><br/>
            </Statistic>

              <br/>
              <br/>

            <Statistic color='blue' >
              <Statistic.Value>
                <Icon name='edit'/>
                2
              </Statistic.Value>
              <Statistic.Label>Projekte</Statistic.Label>
            </Statistic>

          <br/>
            <br/>

            <Statistic color='green'>
              <Statistic.Value>
                <Icon name='users'/>
                6
              </Statistic.Value>
              <Statistic.Label>Projektmitglied</Statistic.Label>
            </Statistic>
          </Statistic.Group>
          <br/>
          </div>
        </div>
      </Segment>
    
  </div>
  </div>
  )
  }
}

export default Test2;
