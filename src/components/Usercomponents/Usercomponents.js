import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Card, Button, List, Popup, Checkbox} from 'semantic-ui-react';

//displays a usercard on the projectpage

export default class UserCard extends Component {

    constructor(props){
        super(props);
         }
        
  render() {
    return (

        <List.Item>
          <List.Content floated='right'>
            <Popup trigger={<Button color="red" size="mini" icon="remove user" />} content='Entferne diese Person aus dem Projekt' />
          </List.Content>
          <List.Content>
            <List.Header as='a'>{this.props.vorname}</List.Header>
            <List.Description>Kann bearbeiten <Checkbox defaultChecked={true} /></List.Description>
          </List.Content>
        </List.Item>

    )
  }
}
