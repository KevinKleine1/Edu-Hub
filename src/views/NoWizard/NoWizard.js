import React, {Component} from 'react';
import {Button, Input, InputGroup, InputGroupAddon, InputGroupButton} from 'reactstrap';

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

class NoWizard extends Component {
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
      <div>
        <InputGroup className="mb-3">
          <InputGroupAddon>
            <i className="icon-user"></i>
          </InputGroupAddon>
          <Input type="text" placeholder="Projekt Titel"/>
        </InputGroup>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Projekt Beschreibung</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Titelbild</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
        </div>
      </form>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Dokumente</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
        </div>
      </form>
    </div>)
  }
}

export default NoWizard;
