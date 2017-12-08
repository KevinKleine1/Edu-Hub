import React, {Component} from 'react';

import {Redirect, Link} from 'react-router-dom';
import history from '../../history';
import { Button,Step, Card, Table, Form, Label, Header, Input, Divider, Icon, Dropdown} from 'semantic-ui-react';



// changes const


const Klasse = [ { key: '1', value: '1', text: '1' },
{ key: '2', value: '2', text: '2' },
{ key: '3', value: '3', text: '3' },
{ key: '4', value: '4', text: '4' },
{ key: '5', value: '5', text: '5' },
{ key: '6', value: '6', text: '6' },
{ key: '7', value: '7', text: '7' },
{ key: '8', value: '8', text: '8' },
{ key: '9', value: '9', text: '9' },
{ key: '10', value: '10', text: '10' },
{ key: '11', value: '11', text: '11' },
{ key: '12', value: '12', text: '12' },
{ key: '13', value: '13', text: '13' },

]



class Wizard3 extends Component {
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

  wizardPage4() {
    history.replace('/wizard4');
  }

  wizardPage2() {
    history.replace('/wizard2');
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
                <Step active>
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



    <Header as='h2' color='black' textAlign='center' >Wie viele Schüler?</Header>


    </Table.HeaderCell>
    </Table.Row>
    </Table.Header>


    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Form size='small'>

           <Form.Field>
             <br/>
           <Input placeholder='Anzahl Schüler' />
<Divider hidden/>
           </Form.Field>

         </Form>



  </Table.Cell>
  </Table.Row>


    </Table.Body>
  </Table>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
</div>
</div>




<div className="container">
      <div className="row justify-content-md-center">
<Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>



    <Header as='h2' color='black' textAlign='center' >Welche Klassenstufe?</Header>


    </Table.HeaderCell>
    </Table.Row>
    </Table.Header>


    <Table.Body>
      <Table.Row>
        <Table.Cell>

<br/>
        <Dropdown placeholder='Klassestufe' fluid search selection options={Klasse} />
<br/>

  </Table.Cell>
  </Table.Row>




  <Table.Row>
        <Table.Cell>
        <div className="container">
      <div className="row justify-content-md-center">
<Label as='a' color="grey" size='medium' style={{width: "110px"}} tag >Sekundär</Label>

<Label as='a' color='grey'size='medium' style={{width: "110px"}} tag>Primär</Label>
<Label as='a' color='grey' size='medium' style={{width: "110px"}} tag>Oberstufe</Label>
<Label as='a' color='grey' size='medium' style={{width: "110px"}} tag>22 </Label>
<Label as='a' color='grey'size='medium' style={{width: "110px"}} tag>Kurs</Label>
<Label as='a' color='grey' size='medium' style={{width: "110px"}} tag>...</Label>
</div>
</div>
</Table.Cell>
</Table.Row>
    </Table.Body>
  </Table>

</div>
</div>

<div><br/><br/>
<div className="container">
      <div className="row justify-content-md-center">

      <Button animated color='teal' onClick={this.wizardPage2} style={{width: "130px", height: "40px", top: "1px"}}>
      <Button.Content visible>Zurück</Button.Content>
      <Button.Content hidden>
        <Icon name='left arrow' />
      </Button.Content>
    </Button>

    <Button animated color='teal' onClick={this.wizardPage4} style={{width: "130px", height: "40px", top: "1px"}}>
      <Button.Content visible>Speichern</Button.Content>
      <Button.Content hidden>
        <Icon name='right arrow' />
      </Button.Content>
    </Button>
    </div>
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

export default Wizard3;
