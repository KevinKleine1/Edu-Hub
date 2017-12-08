import React, {Component} from 'react';

import {Redirect, Link} from 'react-router-dom';
import history from '../../history';
import { Button, Card, Step,Dropdown, Table, Form, Label, Header, Input, Divider, Icon} from 'semantic-ui-react';


// changes const
const Fach = [ { key: 'Mathe', value: 'Mathe', text: 'Mathe' },
{ key: 'Deutsch', value: 'Deutsch', text: 'Deutsch' },
{ key: 'Englisch', value: 'Englisch', text: 'Englisch' },
{ key: 'Physik', value: 'Physik', text: 'Physik' },
{ key: 'Chemie', value: 'Chemie', text: 'Chemie' },
{ key: 'Erdkunde', value: 'Erdkunde', text: 'Erdkunde' },
{ key: 'Sport', value: 'Sport', text: 'Sport' },
{ key: 'Kunst', value: 'Kunst', text: 'Kunst' },
{ key: 'Französisch', value: 'Französisch', text: 'Französisch' },
{ key: 'Spanisch', value: 'Spanisch', text: 'Spanisch' },
{ key: 'Italienisch', value: 'Italienisch', text: 'Italienisch' },
{ key: 'BWL', value: 'BWL', text: 'BWL' },
{ key: 'VWL', value: 'VWL', text: 'VWL' },
{ key: 'Informatik', value: 'Informatik', text: 'Informatik' },
{ key: 'Pädagogik', value: 'Pädagogik', text: 'Pädagogik' },
{ key: 'Politik', value: 'Politik', text: 'Politik' },
{ key: 'Sonstiges', value: 'Sonstiges', text: 'Sonstiges' },
{ key: 'Kein Fach', value: 'Kein Fach', text: 'Kein Fach' },

]

class Wizard2 extends Component {
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

  wizardPage3() {
    history.replace('/wizard3');
  }

  wizardPage1() {
    history.replace('/wizard1');
  }
  render() {

    return (

      <div className="container">
      <div className="row justify-content-md-center">
        <Card style={{width: "800px", height: "550px"}}>
          <Card.Content style={{width: "800px"}}>


            <div className="container">
              <div className="row justify-content-md-center">

            <Step.Group widths={6} size='mini'>
                <Step disabled>
                  <Icon name='book' />
                  <Step.Content>
                    <Step.Title>Step 1</Step.Title>
                  </Step.Content>
                </Step>
                <Step active>
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

    <div className="container">
      <div className="row justify-content-md-center">
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>



    <Header as='h2' color='black' textAlign='center' >Welche Eigenschaft trifft auf dein Projekt zu?</Header>


    </Table.HeaderCell>
    </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>

        <Form>
        <div className="container">
      <div className="row justify-content-md-center">
        <Form.Group grouped>

      <Form.Radio label='Lern-und Lehrprozesse' name='size' type='radio'/>


      <Form.Radio label='Koordination und Organisation' name='size' type='radio'/>


      <Form.Radio label='Unterstützungsprozesse' name='size' type='radio'/>
    </Form.Group>
  <br/>

    </div>
    </div>
    </Form>


  </Table.Cell>
  </Table.Row>
</Table.Body>
</Table>
<div className="container">
      <div className="row justify-content-md-center">
<Table singleLine>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>



  <Header as='h2' color='black' textAlign='center' >Welches Fach?</Header>


  </Table.HeaderCell>
  </Table.Row>
  </Table.Header>


  <Table.Body>
    <Table.Row>
      <Table.Cell>

      <Dropdown placeholder='Unterrichtsfach' fluid search selection options={Fach} />



</Table.Cell>
</Table.Row>





  <Table.Row>
        <Table.Cell>
        <div className="container">
      <div className="row justify-content-md-center">
<Label as='a' color = "grey" size='medium' style={{width: "130px"}} tag>Dig. Klassenbuch</Label>
<Label as='a' color="grey" size='medium' style={{width: "130px"}} tag>Lernzentrum</Label>
<Label as='a' color='grey'size='medium' style={{width: "130px"}} tag>Sprachkurs</Label>
<Label as='a' color='grey' size='medium' style={{width: "130px"}} tag>IT Organisation</Label>
<Label as='a' color='grey' size='medium'  style={{width: "110px"}} tag>. . .</Label>
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

      <Button animated color='teal' onClick={this.wizardPage1} style={{width: "130px", height: "40px"}}>
      <Button.Content visible>Zurück</Button.Content>
      <Button.Content hidden>
        <Icon name='left arrow' />
      </Button.Content>
    </Button>

  <Button animated color='teal' onClick={this.wizardPage3} style={{width: "130px", height: "40px"}}>
      <Button.Content visible>Speichern</Button.Content>
      <Button.Content hidden>
        <Icon name='right arrow' />
      </Button.Content>
    </Button>
    </div>
  </div></div>







  </div>
  </div>

  </Card.Content>
  </Card>
  <br/>
  </div>
  </div>

  )
  }
}

export default Wizard2;
