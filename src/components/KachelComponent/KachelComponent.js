import React, {Component} from 'react';
import {
  Header,
  Icon,
  Image,
  Container,
  Card,
  Grid,
  Button,
  Message,
  Input,
  Menu,
  Segment,
  Table,
  Popup
} from 'semantic-ui-react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';

//Represents the projectcards we see on the dashboard and the project search

class KachelComponent extends React.Component {

    constructor(props) {
      super(props);
  
    }
  //formats the date string we get from the sql timestamp to a useable view
    formatDate(date_unformatted) {
      var day = date_unformatted.substr(8, 2);
      var month = date_unformatted.substr(5, 2);
      var year = date_unformatted.substr(0, 4);
      var date_formatted = day + '.' + month + '.' + year;
      return date_formatted;
    }
  
    render() {
      //limitation functions for the amount of displayed text on our cards

      var Erstellt = this.formatDate(this.props.erstellt);
  
      return (
        <Grid.Column>
        <Popup trigger={<Image
          size = 'medium'
          label = {{ as: 'a', color: 'teal', content: this.props.name, ribbon: true }}
          src = {'http://backend-edu.azurewebsites.net/' + this.props.bild} />} position='top left'>
          <Popup.Content>
            <p>
              <b>Status: </b>
              In Bearbeitung<br/>
              <b>Erstellt am: </b>
              {Erstellt}</p>
          </Popup.Content>
        </Popup>
      </Grid.Column>
      );
    }
  }
  export default KachelComponent;





