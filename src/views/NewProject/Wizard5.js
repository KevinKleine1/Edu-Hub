import React, {Component} from 'react';

import {Redirect, Link} from 'react-router-dom';
import history from '../../history';
import { Button, Card, Step, Table, Form, Label, Header, Input, Divider, Icon, Dropdown,
Checkbox, FormCheckbox, Message, Image, Grid, GridColumn, GridRow} from 'semantic-ui-react';



// changes const

const Sonstiges = [ { key: 'Mathe', value: 'Mathe', text: 'Mathe' },
{ key: 'Englisch', value: 'Englisch', text: 'Englisch' },
{ key: 'Physik', value: 'Physik', text: 'Physik' },

]



class Wizard5 extends Component {
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

  wizardPage6() {
    history.replace('/wizard6');

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
                <Step disabled>
                  <Icon name='resize horizontal' />
                  <Step.Content>
                    <Step.Title>Step 4</Step.Title>
                  </Step.Content>
                </Step>
                <Step active>
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

<Message>
    <Message.Header>Brauchst du einen Guide für dein Projekt?</Message.Header>

  </Message>


    </Table.HeaderCell>

    </Table.Row>
    </Table.Header>
</Table>
<Table singleLine>
    <Table.Body>
      <Table.Row>
        <Table.Cell>

        <div className="container">
      <div className="row justify-content-md-center">

      <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={2} style={{height: "122px"}}>
<br/>
      <Image centered
    src='/img/DT1.png'
    as='a'
    size='small'
    href='https://xn--kreativittstechniken-jzb.info/kreativitaetsframeworks/design-thinking/'
    target='_blank'
  />

</Grid.Column>
      <Grid.Column style={{height: "122px"}}>

      <h2>Design Thinking</h2>
      <b>Der Design Thinking Process zielt darauf ab, möglichst unterschiedliche Erfahrungen,
        <br/>Meinungen und Perspektiven hinsichtlich einer Problemstellung zusammenzubringen. </b>




      </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      <Grid.Column width={2} style={{height: "122px"}}>

<br/>
<Image centered
    src='/img/update.png'
    as='a'
    size='small'
    href='https://www.projektarbeit-projektplanung.de/scrum-als-projektkonzept-teil-1/'
    target='_blank'
  />

</Grid.Column>

      <Grid.Column style={{height: "122px"}}>

      <h2>Scrum</h2>
      <b>Scrum ist eine Variante des agilen Projektmanagements und kennzeichnet sich im Wesentlichen
        <br/>durch Flexibilität.</b>

      </Grid.Column>
    </Grid.Row>
  </Grid>

      </div>
      </div>




  </Table.Cell>
  </Table.Row>

    </Table.Body>
  </Table>
<div><br/><br/>
<div className="container">
      <div className="row justify-content-md-center">

      <Button animated color='teal' onClick={this.wizardPage4} style={{width: "130px", height: "40px", top: "1px"}}>
      <Button.Content visible>Zurück</Button.Content>
      <Button.Content hidden>
        <Icon name='left arrow' />
      </Button.Content>
    </Button>

    <Button animated color='teal' onClick={this.wizardPage6} style={{width: "130px", height: "40px", top: "1px"}}>
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

export default Wizard5;
