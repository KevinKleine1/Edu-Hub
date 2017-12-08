import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import {Card, Step, Header, Icon, Form, TextArea, Button, Input, Divider} from 'semantic-ui-react';




export default class Wizard6 extends Component {
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

  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  static propTypes = {

  };

  goTo() {
    history.replace('/projectpage');
  }
  wizardPage5() {
    history.replace('/wizard5');
  }

  render() {
    const { value } = this.state
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
                  <Step disabled>
                    <Icon name='wizard' />
                    <Step.Content>
                      <Step.Title>Step 5</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step active>
                    <Icon name='edit'/>
                    <Step.Content>
                      <Step.Title>Step 6</Step.Title>
                    </Step.Content>
                  </Step>
                </Step.Group>
              </div>
              </div>
              <Divider hidden/>
 <Form>
        <Form.Group widths='equal'>
          <Form.Input placeholder='Titel' icon='user' iconPosition='left'/>
        </Form.Group>
        <div>
        <Input
  icon='tags'
  iconPosition='left'
  label={{ tag: true, content: 'Add Tag', color: 'blue'}}
  labelPosition='right'
  placeholder='Tags'
/></div>


  <br/>
  <Form.Group>
   <TextArea rows={2} placeholder='Projektbeschreibung' />
</Form.Group>
  <br/>
 <div>

 <Input
 icon='tags'
 iconPosition='left'
 label={{ tag: true, content: 'Add Tag', color: 'grey'}}
 labelPosition='right'
 placeholder='Ressourcen'
 /></div>


        <div className="form-group" widths='equal'>
<br/>
          <label><b>Anhang</b></label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
        </div>

        <Form.Group inline>
<br/>
          <label>Privatsphäre</label>
          <Form.Radio label='privat' value='p' checked={value === 'p'} onChange={this.handleChange} />
          <Form.Radio label='&ouml;ffentlich' value='o' checked={value === 'o'} onChange={this.handleChange} />

        </Form.Group>
      </Form>
        <div className="container">
          <div className="row justify-content-md-center">
        <Button animated={true} color='teal' onClick={this.wizardPage5} style={{width: "130px", height: "40px", bottom: "1px"}}>
          <Button.Content visible={true}>Zurück</Button.Content>
          <Button.Content hidden={true}>
            <Icon name='left arrow'/>
          </Button.Content>
        </Button>
        <Button animated={true} color='teal' onClick={this.goTo} style={{width: "130px", height: "40px", bottom: "1px"}}>
          <Button.Content visible={true}>Speichern</Button.Content>
          <Button.Content hidden={true}>
            <Icon name='right arrow'/>
          </Button.Content>
        </Button></div></div>






            </Card.Content>
          </Card>
          <br/>
        </div>
      </div>
    );
  }

}
