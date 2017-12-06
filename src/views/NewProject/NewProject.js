import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, Header, Icon, Form, Button, Input} from 'semantic-ui-react';




export default class NewProject extends Component {

  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  static propTypes = {

  };

  render() {
    const { value } = this.state
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <Card style={{width: "800px"}}>
            <Card.Content style={{width: "800px"}}>
              <Header as='h2'>
   <Icon name='edit' />
   <Header.Content>
     Neues Projekt
   </Header.Content>
 </Header>
 <Form>
        <Form.Group widths='equal'>
          <Form.Input label='Titel' placeholder='Titel' icon='user' iconPosition='left'/>
        </Form.Group>
        <div>
        <Input
  icon='tags'
  iconPosition='left'
  label={{ tag: true, content: 'Add Tag'}}
  labelPosition='right'
  placeholder='Tags'
/></div>
<div>
  <br/>
<Input
icon='tags'
iconPosition='left'
label={{ tag: true, content: 'Add Tag'}}
labelPosition='right'
placeholder='Ressourcen'
/></div>

<div><br/>
        <Form.TextArea label='Projektbeschreibung' placeholder='Projektbeschreibung' />
</div>

        <div className="form-group" widths='equal'>
          <br/>
          <label htmlFor="exampleFormControlFile1"><b>Fotos</b></label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
        </div>
        <div className="form-group" widths='equal'>

          <label htmlFor="exampleFormControlFile1"><b>Anhang</b></label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
        </div>

        <Form.Group inline>
<br/>
          <label>Privatsphäre</label>
          <Form.Radio label='privat' value='p' checked={value === 'p'} onChange={this.handleChange} />
          <Form.Radio label='&ouml;ffentlich' value='o' checked={value === 'o'} onChange={this.handleChange} />

        </Form.Group>



        <Button animated={true} floated='left' color='teal'>
          <Button.Content visible={true}>Projekt erstellen</Button.Content>
          <Button.Content hidden={true}>
            <Icon name='right arrow'/>
          </Button.Content>
        </Button>




      </Form>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }

}
