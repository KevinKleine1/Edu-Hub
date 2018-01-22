import React, { Component } from 'react'
import {
    Header,
    Icon,
    Segment,
    Divider,
    Card,
    Button,
    Grid,
    Image
  } from 'semantic-ui-react';

export default class FavObject extends Component {
  render() {
    return (
        <Grid.Column>
            <Image
              fluid
              label={{ as: 'a', color: 'teal', content: this.props.name, ribbon: true }}
              src= {'http://backend-edu.azurewebsites.net/' + this.props.image}
                />
            </Grid.Column>
    )
  }
}
