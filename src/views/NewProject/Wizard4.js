import React, {Component} from 'react';

import {Redirect, Link} from 'react-router-dom';
import history from '../../history';
import { Button, Card, Step, Table, Form, Label, Header, Input, Divider, Icon, Dropdown,
Checkbox, FormCheckbox,} from 'semantic-ui-react';



// changes const

const Sonstiges = [ { key: 'Mathe', value: 'Mathe', text: 'Mathe' },
{ key: 'Englisch', value: 'Englisch', text: 'Englisch' },
{ key: 'Physik', value: 'Physik', text: 'Physik' },

]



class Wizard4 extends Component {
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

  wizardPage5() {
    history.replace('/wizard5');

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
                <Step active>
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





<Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>



    <Header as='h2' color='black' textAlign='center' >Auf welcher Ebene wird das Projekt durchgeführt?</Header>


    </Table.HeaderCell>
    </Table.Row>
    </Table.Header>


    <Table.Body>
      <Table.Row>
        <Table.Cell>

        <div className="container">
      <div className="row justify-content-md-center">


        <Form.Group >
        <div className="container">
      <div className="row justify-content-md-center">
        <Form.Field>

<br/>
      <Checkbox  label='Klasse' type='radio'/><br/>
      <Checkbox  label='Schule'  type='radio'/><br/>
      <Checkbox label='Fachlich' type='radio'/><br/>
      <Checkbox  label='Lehrer' type='radio'/><br/>
      <Checkbox  label='Eltern' type='radio'/><br/>
      <Checkbox  label='Bundesweit' type='radio'/><br/>
        <Checkbox label='Praxispartner' type='radio'/><br/>
  <Checkbox  label='Sonstiges' type='radio'/>
<br/>
<br/>

      </Form.Field>
      </div>
      </div>
    </Form.Group>
      </div>
      </div>
  </Table.Cell>
  </Table.Row>



  <Table.Row>
        <Table.Cell>
        <div className="container">
      <div className="row justify-content-md-center">
        <Label as='a' color="grey" size='medium' style={{width: "110px"}} tag>Klasse</Label>
        <Label as='a' color='grey'size='medium' style={{width: "110px"}} tag>Eltern</Label>
        <Label as='a' color='grey'size='medium' style={{width: "110px"}} tag>Schüler</Label>
        <Label as='a' color='grey' size='medium' style={{width: "110px"}} tag>gemischt</Label>
        <Label as='a' color='grey'size='medium' style={{width: "110px"}} tag>Lehrer</Label>
        <Label as='a' color='grey' size='medium' style={{width: "110px"}} tag>. . .</Label>
</div>
</div>
</Table.Cell>
</Table.Row>
    </Table.Body>
  </Table>
  <div>
    <Divider hidden/><br/>
<div className="container">
      <div className="row justify-content-md-center">

      <Button animated color='teal' onClick={this.wizardPage3} style={{width: "130px", height: "40px", bottom: "1px"}}>
      <Button.Content visible>Zurück</Button.Content>
      <Button.Content hidden>
        <Icon name='left arrow' />
      </Button.Content>
    </Button>

    <Button animated color='teal' onClick={this.wizardPage5} style={{width: "130px", height: "40px", bottom: "1px"}}>
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

export default Wizard4;
