import React, {Component, Border} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Card,
  Tab,
  Table,
  Divider,
  Popup,
  Visibility,
  Input,
  Select,
  Checkbox,
  Radio,
  TextArea,
  Dropdown,
  Header,
  Form,
  Step,
  Grid,
  Icon,
  Button,
  Label,
  Menu
} from 'semantic-ui-react';
import history from '../../history';

class Wizard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      activeIndex: 0,
      selectedOption: 'option1'
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleChange = (e, {value}) => this.setState({value})

  goBack() {
    this.setState({
      activeIndex: (this.state.activeIndex - 1)
    });

  }
  changeTab() {
    if (this.state.value === "option1") {
      this.setState({activeIndex: 1});
    } else if (this.state.value === "option2") {
      this.setState({activeIndex: 2});
    } else if (this.state.value === "option3") {
      this.setState({activeIndex: 3});
    }
  };

  render() {
    const {activeIndex} = this.state
    const panes = [
      {
        menuItem: {
          key: 'step1',
          icon: 'book',
          content: 'Step 1'
        },
        render: () => <Tab.Pane attached={false}>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine="singleLine">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>
                        <Header as='h2' color='black' textAlign='center' size='large'>Was ist der Fokus deines Projekts?</Header>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Form size='big'>
                          <Form.Group grouped="grouped">
                            <Form.Field>
                              <Radio label='Ich möchte mit meinem Projekt für den Lehr-und Lernprozess in der Schule beitragen' control='input' value='option1' onChange={this.handleChange} type='radio' checked={this.state.value === 'option1'} name='htmlRadios'/>
                              <Popup trigger={<Icon name = 'question' />} wide='very' content='Das Kernziel einer Schule ist die Wissensvermittlung. Dazu gehören Projekte die den Unterricht fördern und neu gestalten können wie z.B Sportwoche, Theater AG oder Projekte wie „Effiziente Nutzung von Strom und Wasser im Alltag'/>
                            </Form.Field>
                            <br/>

                            <Form.Field>
                              <Radio label='Ich möchte koordinieren und organisieren' control='input' value='option2' onChange={this.handleChange} type='radio' checked={this.state.value === 'option2'} name='htmlRadios'/>
                              <Popup trigger={<Icon name = 'question' />} wide='very' content='z. B digitales Klassenbuch. Planung, Organisiation und Durchführung der Unterstützungsprojekte und Lehr-bzw Lernprojekte.'/>
                            </Form.Field><br/>
                            <Form.Field>
                              <Radio label='Ich möchte ein Projekt erstellen um die Ziele der Schule zu unterstützen' control='input' value='option3' onChange={this.handleChange} type='radio' checked={this.state.value === 'option3'} name='htmlRadios'/>
                              <Popup trigger={<Icon name = 'question' />} wide='very' content='Unterstützende Tätigikeiten wie z. B Infrastruktur der Schule verbessern oder Fundraising für eine Finanzierung.'/>
                            </Form.Field>
                          </Form.Group>
                        </Form>

                      </Table.Cell>
                    </Table.Row>

                  </Table.Body>
                </Table>
              </div>
            </div>

          </Tab.Pane>
      }, {
        menuItem: {
          key: 'step2',
          icon: 'bookmark',
          content: 'Lehr und Lernprozess'
        },
        render: () => <Tab.Pane attached={false}>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine="singleLine">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>

                        <Header as='h2' color='black' textAlign='center'>Was sind deine Kompentenzen für das Projekt?</Header>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Form.Group grouped="grouped">
                          <Form.Field label='Suchen, Verarbeiten und Aufbewahren' control='input' type='checkbox'/>
                          <Form.Field label='Kommunizieren und Kooperieren' control='input' type='checkbox'/>
                          <Form.Field label='Produzieren und Präsentieren' control='input' type='checkbox'/>
                          <Form.Field label='Schützen und sicher agieren' control='input' type='checkbox'/>
                          <Form.Field label='Probleme lösen und Handeln' control='input' type='checkbox'/>
                          <Form.Field label='Analysieren und Reflektieren' control='input' type='checkbox'/>
                        </Form.Group>
                      </Table.Cell>
                    </Table.Row>

                  </Table.Body>

                </Table>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine="singleLine">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>
                        <Header as='h2' color='black' textAlign='center'>Was sind die Zielgruppen?</Header>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Form.Group grouped="grouped">
                          <Form.Field label='Kita/Vorschule' control='input' type='checkbox'/>
                          <Form.Field label='Grundschule' control='input' type='checkbox'/>
                          <Form.Field label='Sekundarstufe 1' control='input' type='checkbox'/>
                          <Form.Field label='Sekundarstufe 2' control='input' type='checkbox'/>
                          <Form.Field label='Höhere Handelschule (Fachabi)' control='input' type='checkbox'/>
                          <Form.Field label='Handelschule' control='input' type='checkbox'/>
                        </Form.Group>
                      </Table.Cell>
                    </Table.Row>

                  </Table.Body>

                </Table>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine="singleLine">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>

                        <Header as='h2' color='black' textAlign='center'>Fächergruppen?</Header>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Form.Group grouped="grouped">
                          <Form.Field label='Sprachen' control='input' type='checkbox'/>
                          <Form.Field label='Kulturelle Bildung' control='input' type='checkbox'/>
                          <Form.Field label='Geschichte/ Gesellschaft' control='input' type='checkbox'/>
                          <Form.Field label='Naturwissenschaften' control='input' type='checkbox'/>
                          <Form.Field label='Informatik/ technische Bildung' control='input' type='checkbox'/>
                        </Form.Group>
                      </Table.Cell>
                    </Table.Row>

                  </Table.Body>

                </Table>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine="singleLine">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>
                        <Header as='h2' color='black' textAlign='center'>Fächer?</Header>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Form.Group grouped="grouped">
                          <Form.Field label='Mathematik' control='input' type='checkbox'/>
                          <Form.Field label='Deutsch' control='input' type='checkbox'/>
                          <Form.Field label='Englisch' control='input' type='checkbox'/>
                          <Form.Field label='Physik' control='input' type='checkbox'/>
                          <Form.Field label='Chemie' control='input' type='checkbox'/>
                          <Form.Field label='Erdkunde' control='input' type='checkbox'/>
                          <Form.Field label='Sport' control='input' type='checkbox'/>
                          <Form.Field label='Kunst' control='input' type='checkbox'/>
                          <Form.Field label='Französisch' control='input' type='checkbox'/>
                          <Form.Field label='Spanisch' control='input' type='checkbox'/>
                          <Form.Field label='Italienisch' control='input' type='checkbox'/>
                          <Form.Field label='BWL' control='input' type='checkbox'/>
                          <Form.Field label='VWL' control='input' type='checkbox'/>
                          <Form.Field label='Informatik' control='input' type='checkbox'/>
                          <Form.Field label='Pädagogik' control='input' type='checkbox'/>
                          <Form.Field label='Politik' control='input' type='checkbox'/>
                          <Form.Field label='Sonstiges' control='input' type='checkbox'/>
                        </Form.Group>
                      </Table.Cell>
                    </Table.Row>

                  </Table.Body>

                </Table>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine="singleLine">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>

                        <Header as='h2' color='black' textAlign='center'>Medieneinsatz?</Header>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Form.Group grouped="grouped">
                          <Form.Field label='Kein Internet' control='input' type='checkbox'/>
                          <Form.Field label='PC/Laptop' control='input' type='checkbox'/>
                          <Form.Field label='Tablet/Smartphone' control='input' type='checkbox'/>
                          <Form.Field label='Hardware/Basteln' control='input' type='checkbox'/>
                          <Form.Field label='Videos/Filme' control='input' type='checkbox'/>
                        </Form.Group>
                      </Table.Cell>
                    </Table.Row>

                  </Table.Body>

                </Table>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine="singleLine">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>
                        <Header as='h2' color='black' textAlign='center'>Dauer des Projekts?</Header>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Form.Group grouped="grouped">
                          <Form.Field label='Unterrichstreihe' control='input' type='checkbox'/>
                          <Form.Field label='Stunde' control='input' type='checkbox'/>
                          <Form.Field label='Doppelstunde' control='input' type='checkbox'/>
                          <Form.Field label='Flexibel  ' control='input' type='checkbox'/>
                          <Form.Field label='Sonstiges' control='input' type='checkbox'/>
                        </Form.Group>
                      </Table.Cell>
                    </Table.Row>

                  </Table.Body>

                </Table>
              </div>
            </div>
          </Tab.Pane>
      }, {
        menuItem: {
          key: 'step3',
          icon: 'child',
          content: 'Management'
        },
        render: () => <Tab.Pane attached={false}>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine="singleLine">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>
                        <Header as='h2' color='black' textAlign='center'>Auf welcher organisatorischen Ebene wird das Projekt durchgeführt?</Header>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Form.Group grouped="grouped">
                          <Form.Field label='Klasse' control='input' type='checkbox'/>
                          <Form.Field label='Schule' control='input' type='checkbox'/>
                          <Form.Field label='Fachlich' control='input' type='checkbox'/>
                          <Form.Field label='Lehrer  ' control='input' type='checkbox'/>
                          <Form.Field label='Elternvertretung' control='input' type='checkbox'/>
                        </Form.Group>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>

              </div>
            </div>

            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine="singleLine">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>
                        <Header as='h2' color='black' textAlign='center'>Was ist dein Ziel für das Projekt?</Header>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Form.Group grouped="grouped">
                          <Form.Field label='Zeitmanagement besser planen' control='input' type='checkbox'/>
                          <Form.Field label='Budget/ Finanzierung' control='input' type='checkbox'/>
                          <Form.Field label='Bildung/ Wissenvermittlung' control='input' type='checkbox'/>
                          <Form.Field label='Unterricht neu gestalten' control='input' type='checkbox'/>
                          <Form.Field label='Verwaltung verbessern' control='input' type='checkbox'/>
                          <Form.Field label='Konfliktmanagement' control='input' type='checkbox'/>
                          <Form.Field label='Sonstige strategische Ziele' control='input' type='checkbox'/>
                        </Form.Group>

                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>

              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine="singleLine">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>
                        <Header as='h2' color='black' textAlign='center'>Dauer des Projekts?</Header>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Form.Group grouped="grouped">
                          <Form.Field label='Tage' control='input' type='checkbox'/>
                          <Form.Field label='Wochen' control='input' type='checkbox'/>
                          <Form.Field label='Monate' control='input' type='checkbox'/>
                          <Form.Field label='Sonstiges' control='input' type='checkbox'/>
                        </Form.Group>

                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>

              </div>
            </div>
          </Tab.Pane>
      }, {
        menuItem: {
          key: 'step4',
          icon: 'resize horizontal',
          content: 'Unterstützungsprozesse'
        },
        render: () => <Tab.Pane attached={false}>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine="singleLine">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>

                        <Header as='h2' color='black' textAlign='center'>Auf welcher organisatorischen Ebene wird das Projekt durchgeführt?</Header>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Form.Group grouped="grouped">
                          <Form.Field label='Klasse' control='input' type='checkbox'/>
                          <Form.Field label='Schule' control='input' type='checkbox'/>
                          <Form.Field label='Fachlich' control='input' type='checkbox'/>
                          <Form.Field label='Lehrer' control='input' type='checkbox'/>
                          <Form.Field label='Eltern' control='input' type='checkbox'/>
                          <Form.Field label='Stadt/ Gemeinde' control='input' type='checkbox'/>
                        </Form.Group>

                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine="singleLine">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>

                        <Header as='h2' color='black' textAlign='center'>Welcher Fokus wird in deinem Projekt gelegt?</Header>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Form.Group grouped="grouped">
                          <Form.Field label='Personal' control='input' type='checkbox'/>
                          <Form.Field label='Schüler' control='input' type='checkbox'/>
                          <Form.Field label='Sport' control='input' type='checkbox'/>
                          <Form.Field label='Bildung' control='input' type='checkbox'/>
                          <Form.Field label='Schulische Ausstatung' control='input' type='checkbox'/>
                          <Form.Field label='IT, technischer Support' control='input' type='checkbox'/>
                          <Form.Field label='Verpflegung in der Schule' control='input' type='checkbox'/>
                          <Form.Field label='Finazierung' control='input' type='checkbox'/>
                          <Form.Field label='Soziales Engagement' control='input' type='checkbox'/>
                          <Form.Field label='Sonstiges' control='input' type='checkbox'/>
                        </Form.Group>

                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </div>
          </Tab.Pane>
      }, {
        menuItem: {
          key: 'step5',
          icon: 'edit',
          content: 'Projektinformationen'
        },
        render: () => <Tab.Pane attached={false}>

            <Table singleLine="singleLine">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>

                    <Header as='h2' color='black' textAlign='center'>Projektinformationen</Header>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Form>
                      <Form.Group>
                        <Form.Input style={{
                            width: "600px"
                          }} placeholder='Titel' icon='user' iconPosition='left'/>
                      </Form.Group>
                      <Form.Group widths='equal'>
                        <Form.TextArea rows={2} placeholder='Projektbeschreibung'/>
                      </Form.Group>
                      <Form.Group widths='equal'>
                        <Form.TextArea rows={2} placeholder='Wie soll die Zielerreichung gemessen werden?'/>
                      </Form.Group>
                      <div>
                        <Input icon='tags' iconPosition='left' label={{
                            tag: true,
                            content: 'Add Tag',
                            color: 'blue'
                          }} labelPosition='right' placeholder='Tags'/></div>
                      <br/>

                      <div>
                        <Input icon='tags' iconPosition='left' label={{
                            tag: true,
                            content: 'Add Tag',
                            color: 'grey'
                          }} labelPosition='right' placeholder='Ressourcen'/></div>
                      <br/>
                      <div>
                        <Form.Field>
                          <label>Projektbeginn</label><Form.Input style={{
              width: "200px"
            }} type='date' placeholder='Projektbeginn' icon='calendar' iconPosition='left'/></Form.Field>
                      </div>
                      <br/>
                      <div className="form-group">
                        <Form.Field style={{
                            width: "200px"
                          }} label='Privatsphäre' control='select'>
                          <option value='p'>privat</option>
                          <option value='o'>&ouml;ffentlich</option>
                        </Form.Field>
                        <label>
                          <b>Anhang</b>
                        </label>
                        <input type="file" style={{
                            width: "400px"
                          }} className="form-control-file" id="exampleFormControlFile1"></input>
                      </div>

                      <label>
                        <b>Fotos</b>
                      </label>
                      <input type="file" style={{
                          width: "400px"
                        }} className="form-control-file" id="exampleFormControlFile1"></input>

                    </Form>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Tab.Pane>
      }
    ]
    return (<div className="container">
      <div className="row justify-content-md-center">
        <Container fluid="fluid">
          <Tab menu={{
              fluid: true,
              tabular: 'right'
            }} panes={panes} activeIndex={activeIndex}/><br/>
        </Container>
        <div className="container">
          <div className="row justify-content-md-center">
            <Button animated="animated" color='teal' style={{
                width: "150px"
              }} onClick={this.changeTab.bind(this)}>
              <Button.Content hidden="hidden">speichern</Button.Content>
              <Button.Content visible="visible">
                <Icon name='check'/>
              </Button.Content>
            </Button>
            <Button animated="animated" color='teal' style={{
                width: "150px"
              }} onClick={this.goBack.bind(this)}>
              <Button.Content hidden="hidden">zurück</Button.Content>
              <Button.Content visible="visible">
                <Icon name='arrow left'/>
              </Button.Content>
            </Button>

          </div>
        </div>
      </div><br/></div>)
  }
}

export default Wizard;
