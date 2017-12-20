import React, { Component } from 'react';
import {Label} from 'semantic-ui-react';



export default class Ressources extends React.Component{


    constructor(props){
        super(props);
         }
        
  render() {
    return (

<Label>{this.props.Resource}</Label>

    )
  }
}