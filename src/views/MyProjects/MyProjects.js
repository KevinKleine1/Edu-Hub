import _ from 'lodash';
import React, {Component} from 'react';
import {
  Table,
  Button,
  Menu,
  Header,
  Icon,
  Segment,
  Divider,
  Card,
  Grid,
  Image,
  Tab,
  Popup
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import KachelComponent from '../../components/KachelComponent/KachelComponent';
//This part needs to be created dynamicly according to user

class MyProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: null,
      data: [],
      direction: null,
      user: ""
   }

   this.createImages = this.createImages.bind(this);
   this.setData = this.setData.bind(this);
  }
 
  /* formates date from database to readable | currently unused in this view
  formatDate(date_unformatted){
  var day = date_unformatted.substr(8, 2);
  var month = date_unformatted.substr(5, 2);
  var year = date_unformatted.substr(0, 4);
  return day + '.' + month + '.' + year;
}*/


createImage(image) {
  return <KachelComponent name={image.project_name} bild={image.project_imagepath} erstellt={image.project_created_at} link={image.projectid} key={image.projectid}/>;
}

createImages(images) {
  return images.map(this.createImage);

}

  // formates date with time
  formatDateWithTime(date_unformatted) {
    var day = date_unformatted.substr(8, 2);
    var month = date_unformatted.substr(5, 2);
    var year = date_unformatted.substr(0, 4);
    var time = date_unformatted.substr(11, 5);
    var monthNamed = null;
    if (month == '01') {
      monthNamed = 'Jan';
    } else if (month == '02') {
      monthNamed = 'Feb';
    } else if (month == '03') {
      monthNamed = 'Mrz';
    } else if (month == '04') {
      monthNamed = 'Apr';
    } else if (month == '05') {
      monthNamed = 'Mai';
    } else if (month == '06') {
      monthNamed = 'Jun';
    } else if (month == '07') {
      monthNamed = 'Jul';
    } else if (month == '08') {
      monthNamed = 'Aug';
    } else if (month == '09') {
      monthNamed = 'Sep';
    } else if (month == '10') {
      monthNamed = 'Okt';
    } else if (month == '11') {
      monthNamed = 'Nov';
    } else {
      monthNamed = 'Dez';
    }
    return day + '. ' + monthNamed + '. ' + year + ' ' + time
  }

  setData() {
    var target = ('http://backend-edu.azurewebsites.net/user/' + localStorage.getItem('email'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        user: json[0].userid
      }, function() {
        this.getProjects();
      });
    })
  }

  getProjects() {
    var target = ('http://backend-edu.azurewebsites.net/user/getmyproject/' + this.state.user)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        data: json
      }, function() {})

    })
  }

  //sorts column
  handleSort = clickedColumn => () => {
    const {column, data, direction} = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending'
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending'
        ? 'descending'
        : 'ascending'
    })
  }

  componentDidMount() {
    this.setData();
  }

  render() {
    const panes = [
      {
        menuItem: {
          key: 'Liste',
          icon: 'list',
          content: 'Liste'
        },
        render: () => <Tab.Pane attached={false}>
            <Table sortable={true} celled={true} fixed={true} selectable={true} size='large'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell sorted={column === 'Nummer'
                      ? direction
                      : null} onClick={this.handleSort('Nummer')}>
                    #
                  </Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'ProjektName'
                      ? direction
                      : null} onClick={this.handleSort('ProjektName')}>
                    Projekt Name
                  </Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'Status'
                      ? direction
                      : null} onClick={this.handleSort('Status')}>
                    Status
                  </Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'ZuletztVeraendert'
                      ? direction
                      : null} onClick={this.handleSort('ZuletztVeraendert')}>
                    Zuletzt Verändert
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {
                  _.map(data, ({project_name, project_projecttype, projectid, project_updated_at}) => (<Table.Row key={projectid}>
                    <Table.Cell>{projectid}</Table.Cell>
                    <Table.Cell selectable="selectable">
                      <a href={'/projectpage/' + projectid}>{project_name}</a>
                    </Table.Cell>
                    <Table.Cell>{project_projecttype}</Table.Cell>
                    <Table.Cell>{this.formatDateWithTime(project_updated_at)}</Table.Cell>
                  </Table.Row>))
                }
              </Table.Body>
            </Table>
          </Tab.Pane>
      }, {
        menuItem: {
          key: 'Kacheln',
          icon: 'block layout',
          content: 'Kacheln'
        },
        render: () => <Tab.Pane attached={false}>
            <Grid doubling={true} columns={4} divided='vertically'>
             {this.createImages(this.state.data)}
            </Grid>

          </Tab.Pane>
      }
    ]
    const {column, data, direction} = this.state

    return (<div className="animated fadeIn">
      <div>
      <br/>
      <Header as='h2'>
        <Icon name='folder outline'/>
        <Header.Content>
          Meine Projekte
          <Header.Subheader>
            Liste oder Kachelansicht deiner Projekte
          </Header.Subheader>
        </Header.Content>
      </Header>
      <Tab menu={{
          secondary: true,
          pointing: true,
          fluid: true
        }} panes={panes}/>
    </div>
  </div>)
  }
}

export default MyProjects;
