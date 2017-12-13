import React, { Component, Border } from 'react'
import {Container, Segment, Card, Grid, Image, Header, Form, Icon, Button, Comment, Statistic, Label, List} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class ListItems extends Component {

constructor(props) {
    super(props);
}

  render() {
    return (
<Link to={{pathname: '/projectpage/' + this.props.link }}>
     <List.Item>
      <List.Icon name='star' size='large' color='blue' verticalAlign='middle' />
          <List.Content>
          <List.Header>{this.props.titel}</List.Header>
          <List.Description>erstellt am {this.props.erstellt}</List.Description>
      </List.Content>
     </List.Item>
</Link>
    )
  }
}
