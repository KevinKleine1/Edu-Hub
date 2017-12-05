import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Redirect, Link} from 'react-router-dom';
import history from '../../history';

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

// changes const

class NewProject extends Component {
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

  noWizard() {
    history.replace('/nowizard');
  }

  render() {

    return (<div className="animated fadeIn">
      <div className="alert alert-dark" role="alert">
        Wie möchten Sie ihr Projekt erstellen?
      </div>
      <button className="btn btn-primary btn-lg btn-block" onClick={this.noWizard}>Projekt mit Wizard erstellen</button>
      <button className="btn btn-secondary btn-lg btn-block" onClick={this.noWizard}>Projekt
        <strong>
          ohne
        </strong>
        Wizard erstellen</button>
    </div>)
  }
}

export default NewProject;
