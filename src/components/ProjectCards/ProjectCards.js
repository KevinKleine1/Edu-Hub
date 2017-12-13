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
    Segment
  } from 'semantic-ui-react';
  import {Link, Switch, Route, Redirect} from 'react-router-dom';

class ProjectCards extends React.Component{

constructor(props){
    super(props);
   
}


render(){
  var org = this.props.text;
  var text = org.substring(0, 280);
  return (
    
    <Grid.Column>
    <Card>
      <Image src={'http://edu-hub-backend.azurewebsites.net/' + this.props.bild}/>
      <Card.Content>
        <Card.Header>
         {this.props.name}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            erstellt am {this.props.erstellt}
          </span>

        </Card.Meta>
        <Card.Description style={{
            height: "150px"
          }}>
         {text}...
        </Card.Description>
      </Card.Content>
      <Card.Content extra={true}>
        <a>
          <Icon name='user'/>
          5 Mitglieder
        </a>
        <Link to={{pathname: '/projectpage/' + this.props.link ,}}>
        <Button animated={true} floated='right' color='teal'>
          <Button.Content visible={true}>Details</Button.Content>
          <Button.Content hidden={true}>
            <Icon name='right arrow'/>
          </Button.Content>
        </Button>
        </Link>
      </Card.Content>
    </Card>
  </Grid.Column>
 
  );
 }
}
export default ProjectCards;