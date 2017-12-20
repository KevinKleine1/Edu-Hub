import React, { Component } from 'react';
import {Label} from 'semantic-ui-react';



export default class Tags extends React.Component{


    constructor(props){
        super(props);
         }
        
  render() {
    return (

<Label>{this.props.Tag}</Label>

    )
  }
}