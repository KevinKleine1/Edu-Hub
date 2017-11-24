import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { Input, InputGroup, Container, Row, Col, CardGroup, Card, CardBody, Button, InputGroupAddon, Popover, PopoverHeader, PopoverBody} from 'reactstrap';

class Login extends React.Component {


  // NOT USED ANYMORE DELETE IN NEXT VERSION
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  // Retrieves information from the valuefields
  handleChange(e){
    this.setState({[e.target.id]: e.target.value });
  }

    // Toggle function to get the Error Messages open
    toggle() {
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }


    errormsg(){
      if(!this.state.email && !this.state.password){
        this.setState({mess: "Bitte Email und Passwort eingeben!"})
        this.toggle();
      }
      else if(!this.state.password){  
      this.setState({mess: "Passwort bitte eingeben!"});
      this.toggle();
      }
      else if (!this.state.email){
        this.setState({mess: "Email bitte eingeben!"})
        this.toggle();
      }
    }


  // Checks if the password and username Match and redirects to the dashboard (Currently in dummy mode)
  validation(){
    var check1 = this.state.email
    var check2 = this.state.password
    console.log(check1);
    console.log(check2);
    var test = "test@test.de";
    var test2 = "Test123";
    this.errormsg();
    if(this.state.email && this.state.password){  
    if (check1 == test){
      if(check2 == test2){
        console.log("Feierabend für Heute!");
        this.nextPath();
      }     
    }    
  }
}
  // Function to redirect to the dashboard page
  nextPath(){
    this.props.history.push("/dashboard");
  }
  render() {
   return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody onChange={this.handleChange.bind(this)}>
                    <h1>Login</h1>
                    <p className="text-muted">Logge dich jetzt ein!</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                      <Input type="text" id="email" placeholder="E-Mail Adresse" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                      <Input type="password" id="password" placeholder="Passwort"/>
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button id="login" onClick={() => { this.validation(); }} color="primary" className="px-4">Login</Button>
                        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="login" toggle={this.toggle}>
                        <PopoverHeader style={{ color: "#ae5856" }}>Fehler!</PopoverHeader>
                        <PopoverBody style={{ color: "#ae5856" }}>{this.state.mess}</PopoverBody>
                        </Popover>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Passwort vergessen?</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" active>Jetzt registrieren!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);
