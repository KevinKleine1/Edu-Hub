import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Card, Button, List, Popup, Checkbox} from 'semantic-ui-react';

//displays a usercard on the projectpage

export default class UserCard extends Component {

    constructor(props){
        super(props);
        this.state ={
          rights: this.props.rights
        }

        this.kickUser = this.kickUser.bind(this);
        this.changer = this.changer.bind(this);
        this.removeEditor = this.removeEditor.bind(this);
        this.addEditor = this.addEditor.bind(this);
         }

  changer(){
    if (this.state.rights){
      this.removeEditor();
    }
    else{
      this.addEditor();
    }
  }
         

  addEditor(){
    console.log("Adding...");
    var forma = new FormData();
    forma.append('uhp_idproject', this.props.project);
    forma.append('uhp_iduser', this.props.id);
    forma.append('authorid', localStorage.getItem('userid'));

    fetch('http://backend-edu.azurewebsites.net/governance/addEditor', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    }).then((response) => {
      this.props.new();
      this.props.update();
    })
    this.setState({rights: !this.state.rights});
  }

  removeEditor(){
    console.log("Deleting...");
    var forma = new FormData();
    forma.append('uhp_idproject', this.props.project);
    forma.append('uhp_iduser', this.props.id);
    forma.append('authorid', localStorage.getItem('userid'));

    fetch('http://backend-edu.azurewebsites.net/governance/deleteEditor', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    }).then((response) => {
      this.props.new();
      this.props.update();
    })
    this.setState({rights: !this.state.rights});
  }


  kickUser(){
    var forma = new FormData();
    forma.append('uhp_idproject', this.props.project);
    forma.append('uhp_iduser', this.props.id);

    fetch('http://backend-edu.azurewebsites.net/useraddsproject/cancelMembership', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    }).then((response) => {
      this.props.update();
      this.props.new();
    })
  }
         
  render() {
    const {rights} = this.state;
    return (

        <List.Item>
           {
              !this.props.author &&(
          <List.Content floated='right'>
            <Popup trigger={<Button color="red" onClick={this.kickUser} size="mini" icon="remove user" />} content='Entferne diese Person aus dem Projekt' />
          </List.Content>
              )}
          <List.Content>
            <List.Header as='a'>{this.props.vorname}</List.Header>
            {
              !this.props.author &&(
            <List.Description>Kann bearbeiten <Checkbox checked={rights} onChange={this.changer.bind(this)} /></List.Description>
              )}
          </List.Content>
        </List.Item>

    )
  }
}
