import _ from 'lodash';
import React, {Component} from 'react';
import {Table, Button} from 'semantic-ui-react';

//This part needs to be created dynamicly according to user
const tableData = [
  {
    Nummer: '1',
    ProjektName: 'Lernzentrum',
    Status: 'In Bearbeitung',
    ZuletztVeraendert: '2017-01-08T15:46:00.000Z'
  }, {
    Nummer: '2',
    ProjektName: 'Fitness Studio',
    Status: 'In Bearbeitung',
    ZuletztVeraendert: '2016-12-07T15:46:00.000Z'
  }, {
    Nummer: '3',
    ProjektName: 'Coding Kurs',
    Status: 'Fertig',
    ZuletztVeraendert: '2017-12-04T15:46:00.000Z'
  }, {
    Nummer: '4',
    ProjektName: 'Bundes Jugendspiele',
    Status: 'Fertig',
    ZuletztVeraendert: '2017-12-04T15:45:00.000Z'
  }
]

class MyProjects extends React.Component {
  state = {
    column: null,
    data: tableData,
    direction: null
  }
  /* formates date from database to readable | currently unused in this view
  formatDate(date_unformatted){
  var day = date_unformatted.substr(8, 2);
  var month = date_unformatted.substr(5, 2);
  var year = date_unformatted.substr(0, 4);
  return day + '.' + month + '.' + year;
}*/

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

  render() {
    const {column, data, direction} = this.state

    return (<div>
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
            _.map(data, ({ProjektName, Status, Nummer, ZuletztVeraendert}) => (<Table.Row key={Nummer}>
              <Table.Cell>{Nummer}</Table.Cell>
              <Table.Cell>{ProjektName}</Table.Cell>
              <Table.Cell>{Status}</Table.Cell>
              <Table.Cell>{this.formatDateWithTime(ZuletztVeraendert)}</Table.Cell>
            </Table.Row>))
          }
        </Table.Body>
      </Table>
    </div>)
  }
}

export default MyProjects;
