import React, {Component} from 'react';
import {Button, Table} from 'reactstrap';

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

class MyProjects extends React.Component {

  render() {

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

    </div>)
  }
}

export default MyProjects;
