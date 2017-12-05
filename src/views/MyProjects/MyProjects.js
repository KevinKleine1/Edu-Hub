import _ from 'lodash';
import React, {Component} from 'react';
<<<<<<< HEAD
import {Table} from 'semantic-ui-react';

//Bug: Datum wird nicht richtig sortiert
=======
import {Button, Table} from 'reactstrap';
>>>>>>> 8abb8d4e8a77a08dcd91bbc49cb4a5242a18cbcc

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';
const colors = ['blue']
const tableData = [
  {
    Nummer: '1',
    ProjektName: 'Lernzentrum',
    Status: 'In Bearbeitung',
    ZuletztVeraendert: '2017.10.09'
  }, {
    Nummer: '2',
    ProjektName: 'Fitness Studio',
    Status: 'In Bearbeitung',
    ZuletztVeraendert: '2016.11.10'
  }, {
    Nummer: '3',
    ProjektName: 'Coding Kurs',
    Status: 'Fertig',
    ZuletztVeraendert: '2017.09.10'
  }, {
    Nummer: '4',
    ProjektName: 'Bundes Jugendspiele',
    Status: 'Fertig',
    ZuletztVeraendert: '2016.10.09'
  }
]

class MyProjects extends React.Component {
  state = {
    column: null,
    data: tableData,
    direction: null
  }

  handleSort = clickedColumn => () => {
    const {column, data, direction} = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending'
      })

<<<<<<< HEAD
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
=======
    return (<div className="animated fadeIn">
      <table className="table table-bordered table-hover table-sm">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Projekt Name</th>
            <th>Status</th>
            <th>Zuletzt verändert</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-success">
            <th scope="row">1</th>
            <td>Lernzentrum</td>
            <td>Fertig</td>
            <td>19.02.2017</td>
          </tr>
          <tr className="table-success">
            <th scope="row">2</th>
            <td>Bundesjugendspiele</td>
            <td>Fertig</td>
            <td>02.09.1945</td>
          </tr>
          <tr className="table-warning">
            <th scope="row">3</th>
            <td>Fitness Studio</td>
            <td>In Bearbeitung</td>
            <td>01.01.0001</td>
          </tr>
          <tr className="table-success">
            <th scope="row">4</th>
            <td>Coding Kurs</td>
            <td>Fertig</td>
            <td>09.08.2017</td>
          </tr>
          <tr className="table-warning">
            <th scope="row">5</th>
            <td>Forschungszentrum</td>
            <td>In Bearbeitung</td>
            <td>02.02.2017</td>
          </tr>
          <tr className="table-warning">
            <th scope="row">6</th>
            <td>Hobby Werkstatt</td>
            <td>In Bearbeitung</td>
            <td>30.12.2016</td>
          </tr>
        </tbody>
      </table>
>>>>>>> 8abb8d4e8a77a08dcd91bbc49cb4a5242a18cbcc

    return (<Table sortable="sortable" celled="celled" fixed="fixed" selectable="selectable">
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
            <Table.Cell>{ZuletztVeraendert}</Table.Cell>
          </Table.Row>))
        }
      </Table.Body>
    </Table>)
  }
}

export default MyProjects;
