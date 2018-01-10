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
  Table
} from 'semantic-ui-react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';

//Represents the projectcards we see on the dashboard and the project search

class ProjectCards extends React.Component {

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
    var org = this.props.text;
    if (org.length > 280) {
      var text = org.substring(0, 280);
      text = text + "...";
    } else {
      var text = org;
    }
    var gro = this.props.name;
    if (gro.length > 25) {
      var title = gro.substring(0, 28);
      title = title + "...";
    } else {
      var title = gro;
    }

    var Erstellt = this.formatDate(this.props.erstellt);

    return (<Grid.Column>
      <Card>
        <Image style={{width: "300px", height: "200px"}} src={'http://backend-edu.azurewebsites.net/' + this.props.bild}/>
        <Card.Content>
          <Card.Header>
            {title}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              erstellt am {Erstellt}
            </span>

          </Card.Meta>
          <Card.Description style={{
              height: "150px"
            }}>
            {text}
          </Card.Description>
        </Card.Content>
        <Card.Content extra={true}>
          <a>
            <Icon name='user'/> {this.props.members} Mitglieder
          </a>
          <Link to={{
              pathname: '/projectpage/' + this.props.link
            }}>
            <Button animated={true} floated='right' color='teal'>
              <Button.Content visible={true}>Details</Button.Content>
              <Button.Content hidden={true}>
                <Icon name='right arrow'/>
              </Button.Content>
            </Button>
          </Link>
        </Card.Content>
      </Card>
    </Grid.Column>);
  }
}
export default ProjectCards;
