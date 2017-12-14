import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Card, Button} from 'semantic-ui-react';

export default class UserCard extends Component {

    constructor(props){
        super(props);
         }
        
  render() {
    return (

<Card link header={<Link to={{pathname: '/user/' + this.props.usermail, state: {userid: this.props.id} }}>{this.props.vorname}</Link>} meta='Lehrer' description={[this.props.description].join('')}/>

    )
  }
}
