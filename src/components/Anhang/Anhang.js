import React, { Component, Border } from 'react'
import {Container, Segment, Card, Grid, Image, Header, Form, Icon, Button, Comment, Statistic, Label, List} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


export default class Anhang extends Component {
  render() {
    return (
        <List.Item>
            <List.Icon name='file outline' size='large' verticalAlign='middle'/>
                <List.Content>
  
                      <List.Header><a href={"http://backend-edu.azurewebsites.net/" + this.props.doclink}>{this.props.name}</a></List.Header>
              
                </List.Content>
        </List.Item>
    )
  }
}
