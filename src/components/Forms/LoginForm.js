import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
            validationState: null
        };
   }
  
    getValidationState(e) {
      const length = e.state.value.length;
      console.log(length);
      console.log(this.state.validationState);
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {
      return (
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState='success'
          >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange.bind(this)}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      );
    }
  }
  


  export default LoginForm;