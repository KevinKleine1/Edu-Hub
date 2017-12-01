import React, {Component} from 'react';
import history from '../../history';
import {
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  Label
} from 'reactstrap';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class Profile extends Component {
  changeAdmin() {
    history.replace('/admin');
  };

  changeBack() {
    history.replace('/dashboard');
  };

  render() {
    return (<div className="container">
      <div className="row justify-content-md-center">
        <div className="card w-75">
          <div className="card-body">
            <div className="alert alert-info" role="alert"></div>
            <h4 className="card-title">
              <b>Mein Profil</b>
            </h4>
            <br/>

            <div className="container">
              <div className="row justify-content-md-center">
                <img className="img-circle" src='../img/avatars/5.jpg'></img>
                <br/>
              </div>
            </div>
            <br/>

            <div className="container">
              <div className="row justify-content-md-center">

                <div className="card-text">

                  <InputGroup className="mb-3">

                    <InputGroupAddon style={{
                        width: "100px"
                      }}>

                      <b>
                        Name
                      </b>

                    </InputGroupAddon>
                    <span className="input-group-addon" id="basic-addon3" style={{
                        width: "500px"
                      }}>Maria Müller</span>

                  </InputGroup>
                  <InputGroup className="mb-3">

                    <InputGroupAddon style={{
                        width: "100px"
                      }}>

                      <b>
                        Anschrift
                      </b>

                    </InputGroupAddon>
                    <span className="input-group-addon" id="basic-addon3" style={{
                        width: "500px"
                      }}>Am alten Markt 13a, 50825 Köln</span>

                  </InputGroup>
                  <InputGroup className="mb-3">

                    <InputGroupAddon style={{
                        width: "100px"
                      }}>

                      <b>
                        Email
                      </b>

                    </InputGroupAddon>
                    <span className="input-group-addon" id="basic-addon3" style={{
                        width: "500px"
                      }}>m.mueller@gmx.de</span>

                  </InputGroup>
                  <InputGroup className="mb-3">

                    <InputGroupAddon style={{
                        width: "100px"
                      }}>

                      <b>
                        Schule
                      </b>

                    </InputGroupAddon>
                    <span className="input-group-addon" id="basic-addon3" style={{
                        width: "500px"
                      }}>
                      Gymnasium Köln-Ehrenfeld</span>

                  </InputGroup>
                </div>

              </div>
            </div>

            <div className="container">
              <div className="row justify-content-md-center">
                <button onClick={this.changeAdmin} className="btn btn-info" style={{
                    width: "150px"
                  }}>
                  <b>Ändern</b>
                </button>
                <button onClick={this.changeBack} className="btn btn-secondary" style={{
                    width: "150px"
                  }}>
                  <b>Zurück</b>
                </button>

              </div>
            </div>
          </div>
          <br/>

          <div className="alert alert-info" role="alert"></div>

        </div>
      </div>
    </div>);
  }
}

export default Profile;
