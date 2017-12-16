import React, { Component, Border } from 'react'
import {Container, Segment, Card, Grid, Image, Header, Form, Icon, Button, Comment, Statistic, Label, List} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

//Class for the creation of Projectlinks in the userpages

export default class ListItems extends Component {

constructor(props) {
    super(props);
}


//formats the date string we get from the sql timestamp to a useable view
formatDate(date_unformatted){
    var day = date_unformatted.substr(8, 2);
    var month = date_unformatted.substr(5, 2);
    var year = date_unformatted.substr(0, 4);
    var date_formatted = day + '.' + month + '.' + year;
    return date_formatted;
    }


  render() {
  var Erstellt = this.formatDate(this.props.erstellt);
    return (
<Link to={{pathname: '/projectpage/' + this.props.link }}>
     <List.Item>
      <List.Icon name='star' size='large' color='blue' verticalAlign='middle' />
          <List.Content>
          <List.Header>{this.props.titel}</List.Header>
          <List.Description>erstellt am {Erstellt}</List.Description>
      </List.Content>
     </List.Item>
</Link>
    )
  }
}
