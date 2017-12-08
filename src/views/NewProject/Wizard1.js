import React, {Component} from 'react';

import {Redirect, Link} from 'react-router-dom';
import history from '../../history';
import { Button, Card, Table, Form, Label, Header, Input, Step, Divider, Icon,Message} from 'semantic-ui-react';



// changes const

class Wizard1 extends Component {
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
        <Card style={{width:"800px", height: "550px"}}>
          <Card.Content style={{width: "800px"}}>

            <div className="container">
              <div className="row justify-content-md-center">
            <Step.Group widths={6} size='mini'>
                <Step active>
                  <Icon name='book' />
                  <Step.Content>
                    <Step.Title>Step 1</Step.Title>
                  </Step.Content>
                </Step>
                <Step disabled>
                  <Icon name='bookmark' />
                  <Step.Content>
                    <Step.Title>Step 2</Step.Title>
                  </Step.Content>
                </Step>
                <Step disabled>
                  <Icon name='child' />
                  <Step.Content>
                    <Step.Title>Step 3</Step.Title>
                  </Step.Content>
                </Step>
                <Step disabled>
                  <Icon name='resize horizontal' />
                  <Step.Content>
                    <Step.Title>Step 4</Step.Title>
                  </Step.Content>
                </Step>
                <Step disabled>
                  <Icon name='wizard' />
                  <Step.Content>
                    <Step.Title>Step 5</Step.Title>
                  </Step.Content>
                </Step>
                <Step disabled>
                  <Icon name='edit'/>
                  <Step.Content>
                    <Step.Title>Step 6</Step.Title>
                  </Step.Content>
                </Step>
              </Step.Group>
            </div>
            </div>
            <Divider hidden/>

          <Message floating>
          <Header color='black'
    as='h2'
    image='/img/logo-symbol.png'
    content='Erstelle ein Edu-Projekt'
  />
</Message>

      <Divider hidden/>
    <div className="container">
      <div className="row justify-content-md-center">
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>



    <Header as='h2' color='black' textAlign='center' size='large' >An welcher Schuler willst du dein Projekt durchführen?</Header>


    </Table.HeaderCell>
    </Table.Row>
    </Table.Header>


    <Table.Body>
      <Table.Row>
        <Table.Cell>

   <Form size='big'>

    <Form.Field>
    <Divider hidden/>
    <Input placeholder='Schule' />

    </Form.Field>

  </Form>
  <br/>
  <br/>

  </Table.Cell>
  </Table.Row>






  <Table.Row>
        <Table.Cell>
        <div className="container">
      <div className="row justify-content-md-center">
<Label as='a' color="grey" size='medium' style={{width: "110px"}} tag>Gesamtschule</Label>
<Label as='a' color='grey'size='medium' style={{width: "110px"}} tag>Realschule</Label>
<Label as='a' color='grey'size='medium' style={{width: "110px"}} tag>Berufskolleg</Label>
<Label as='a' color='grey' size='medium' style={{width: "110px"}} tag>Gymnasium</Label>
<Label as='a' color='grey'size='medium' style={{width: "110px"}} tag>Förderschule</Label>
<Label as='a' color='grey' size='medium' style={{width: "110px"}} tag>. . .</Label>
</div>
</div>
</Table.Cell>
</Table.Row>
    </Table.Body>
  </Table>
</div>
</div>

<div>
<br/>
<br/>

<div className="container">
      <div className="row justify-content-md-center">
        <Button animated color='teal' onClick={this.goBack} style={{width: "130px", height: "40px", top: "1px"}}>
        <Button.Content visible>Zurück</Button.Content>
        <Button.Content hidden>
          <Icon name='left arrow' />
        </Button.Content>
        </Button>
      <Button animated color='teal' onClick = {
  this.wizardPage2
} style={{width: "130px", height: "40px", top: "1px"}}>
      <Button.Content visible>Speichern</Button.Content>
      <Button.Content hidden>
        <Icon name='right arrow' />
      </Button.Content>
    </Button>
    </div>
  </div></div>









  </Card.Content>
  </Card>
      <br/>
  </div>
  </div>
  )
  }
}

export default Wizard1;
