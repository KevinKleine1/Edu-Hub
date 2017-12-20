import React, {Component} from 'react';
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


class Favs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {

    return (<div className="animated fadeIn">
      <div className="container">
        <div className="row justify-content-md-center">
          <Segment vertical={true} style={{
              width: "1000px"
            }}>
            <Header as='h2'>
              <Icon name='empty heart'/>
              <Header.Content>
                Favoriten
                <Header.Subheader>
                  Projekte, die du favorisiert hast
                </Header.Subheader>
              </Header.Content>
            </Header>
            <Divider fitted/>
        <Divider hidden/>
        <Grid doubling={true} columns={4} divided='vertically'>
          <Grid.Column>
            <Image
              fluid
              label={{ as: 'a', color: 'teal', content: 'Digitale Bibliothek', ribbon: true }}
              src='/img/Landingpage/projekt1.jpg'
                />
              </Grid.Column>
              <Grid.Column>
      <Image
        fluid
        label={{ as: 'a', color: 'teal', content: 'Experiment', ribbon: true }}
        src='/img/Landingpage/projekt2.jpg'
      />
    </Grid.Column>
    <Grid.Column>
          <Image
            fluid
            label={{ as: 'a', color: 'teal', content: 'Selbstlernzetrum', ribbon: true }}
            src='/img/Landingpage/projekt3.jpg'
          />
        </Grid.Column>
        <Grid.Column>
              <Image
                fluid
                label={{ as: 'a', color: 'teal', content: 'Cafeteria', ribbon: true }}
                src='/img/Landingpage/projekt4.jpeg'
              />
            </Grid.Column>

        </Grid>
        <Grid doubling={true} columns={4} divided='vertically'>
          <Grid.Column>
            <Image
              fluid
              label={{ as: 'a', color: 'teal', content: 'Garten AG', ribbon: true }}
              src='/img/Landingpage/projekt5.jpeg'
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  fluid
                  label={{ as: 'a', color: 'teal', content: 'KFZ Werkstatt', ribbon: true }}
                  src='/img/Landingpage/projekt6.jpeg'
                />
      </Grid.Column>


        </Grid>

      </Segment>
    </div>
      </div>

    </div>)
  }
}

export default Favs;
