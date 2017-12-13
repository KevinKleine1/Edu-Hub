import React, {Component, Border} from 'react';
import PropTypes from 'prop-types';
import {Container, Card, Tab, Table, Divider, Input, Select, Checkbox, Radio, TextArea, Dropdown, Header, Form, Step, Grid, Icon, Button, Label, Menu} from 'semantic-ui-react';
import history from '../../history';

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

const Sonstiges = [ { key: 'Mathe', value: 'Mathe', text: 'Mathe' },
{ key: 'Englisch', value: 'Englisch', text: 'Englisch' },
{ key: 'Physik', value: 'Physik', text: 'Physik' },

]

const panes = [
  { menuItem: { key: 'step1', icon: 'book', content: 'Step 1'}, render: () => <Tab.Pane attached={false}>
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
      <Input placeholder='Schule' />
      </Form.Field>
    </Form>
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
  </div></div>
</Tab.Pane> },
  { menuItem: { key: 'step2', icon: 'bookmark', content: 'Step 2' }, render: () => <Tab.Pane attached={false}>
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
      </div>
      </div>
      </Form>

    </Table.Cell>
    </Table.Row>
  </Table.Body>
  </Table>
</div>
    </div>
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
  </Tab.Pane> },
  { menuItem: { key: 'step3', icon: 'child', content: 'Step 3' }, render: () => <Tab.Pane attached={false}>
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
              <Input placeholder='Anzahl Schüler' />
               </Form.Field>
             </Form>
      </Table.Cell>
      </Table.Row>
        </Table.Body>
      </Table>

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

            <Dropdown placeholder='Klassestufe' fluid search selection options={Klasse} />
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
  </Tab.Pane> },
  { menuItem: { key: 'step4', icon: 'resize horizontal', content: 'Step 4' }, render: () => <Tab.Pane attached={false}>
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

          <Checkbox  label='Klasse' type='radio'/><br/>
          <Checkbox  label='Schule'  type='radio'/><br/>
          <Checkbox label='Fachlich' type='radio'/><br/>
          <Checkbox  label='Lehrer' type='radio'/><br/>
          <Checkbox  label='Eltern' type='radio'/><br/>
          <Checkbox  label='Bundesweit' type='radio'/><br/>
            <Checkbox label='Praxispartner' type='radio'/><br/>
      <Checkbox  label='Sonstiges' type='radio'/>

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
  </Tab.Pane> },
  { menuItem: { key: 'step5', icon: 'edit', content: 'Step 5' }, render: () => <Tab.Pane attached={false}>

    <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>

        <Header as='h2' color='black' textAlign='center' >Projektinformationen</Header>
      </Table.HeaderCell>
      </Table.Row>
      </Table.Header>


      <Table.Body>
        <Table.Row>
          <Table.Cell>
    <Form>
           <Form.Group>
             <Form.Input style={{width: "600px"}} placeholder='Titel' icon='user' iconPosition='left'/>
           </Form.Group>
           <Form.Group widths='equal' >
            <Form.TextArea rows={2} placeholder='Projektbeschreibung'/>
         </Form.Group>
        <div>
           <Input
     icon='tags'
     iconPosition='left'
     label={{ tag: true, content: 'Add Tag', color: 'blue'}}
     labelPosition='right'
     placeholder='Tags'/></div>  <br/>

<div>
    <Input
    icon='tags'
    iconPosition='left'
    label={{ tag: true, content: 'Add Tag', color: 'grey'}}
    labelPosition='right'
    placeholder='Ressourcen'/></div>
    <br/>
    <div> <Form.Field><label>Projektbeginn</label><Form.Input style={{width: "200px"}} type='date' placeholder='Projektbeginn' icon='calendar' iconPosition='left'/></Form.Field></div>
          <br/> <div className="form-group">
             <Form.Field style={{width: "200px"}} label='Privatsphäre' control='select'>
       <option value='p'>privat</option>
       <option value='o'>&ouml;ffentlich</option>
     </Form.Field>
             <label><b>Anhang</b></label>
             <input type="file" style={{width: "400px"}} className="form-control-file" id="exampleFormControlFile1"></input>
           </div>

             <label><b>Fotos</b></label>
             <input type="file" style={{width: "400px"}} className="form-control-file" id="exampleFormControlFile1"></input>


         </Form>
       </Table.Cell>
       </Table.Row>
           </Table.Body>
         </Table>
  </Tab.Pane> },
]

class Wizard extends Component {
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



  render() {


    return (

       <div className="container">
            <div className="row justify-content-md-center">
              <Container fluid>
        <Tab menu={{ fluid: true, tabular: 'right'}} panes={panes} />
        </Container>
              <br/>

          </div></div>



  )
  }
}

export default Wizard;
