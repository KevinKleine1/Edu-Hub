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
      selectedOption: 'option1',
      lehrundlernProjekt: false,
      managementProjekt: false,
      unterstuetzendesProjekt: false,
      Titel: "",
      Projektbeschreibung: "",
      Laden: false,
      file: '',
      Userid: ""

    };
  }

  setUserdata() {
    var target = ('http://backend-edu.azurewebsites.net/user/' + localStorage.getItem('email'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      localStorage.setItem('userid', json[0].userid);


    })
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({file: file});
    }

    reader.readAsDataURL(file)
  }

  handleChange = (e, {value}) => this.setState({value})
  handleText = (e, {name, value}) => this.setState({[name]: value})

  newProject(){
    this.setState({Laden: true});
    var form = new FormData();
    form.append('project_name', this.state.Titel);
    form.append('project_text', this.state.Projektbeschreibung);
    form.append('foo', this.state.file);
    form.append('fileName', "Projekt");


    fetch('http://backend-edu.azurewebsites.net/wizardctrl/newProject', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: form
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({
        Pid: json[0].projectid
      }, function() {
        var link = json[0].projectid
        history.push('/projectpage/' + link);
      });
    });
  }




  goBack() {
    if (this.state.value === "option1") {
      this.setState({activeIndex: 1});
    } else if (this.state.value === "option2") {
      this.setState({activeIndex: 2});
    } else if (this.state.value === "option3") {
      this.setState({activeIndex: 3});
    }
    if(this.state.activeIndex =="1"){
    this.setState({activeIndex: (this.state.activeIndex - 1)});
    }
    else if (this.state.activeIndex =="2"){
      this.setState({activeIndex: (this.state.activeIndex - 2)});
    }
    else if (this.state.activeIndex =="3"){
      this.setState({activeIndex: (this.state.activeIndex - 3)});
    }
  };

  changeTab() {
    if(this.state.activeIndex == "4"){
      this.newProject();
    }else{

    if (this.state.value === "option1") {
      this.setState({lehrundlernProjekt: true});
      this.setState({activeIndex: 1});
    } else if (this.state.value === "option2") {
      this.setState({managementProjekt: true});
      this.setState({activeIndex: 2});
    } else if (this.state.value === "option3") {
      this.setState({unterstuetzendesProjekt: true});
      this.setState({activeIndex: 3});
    }
    if(this.state.activeIndex =="1"){
    this.setState({activeIndex: (this.state.activeIndex + 3)});
    }
    else if (this.state.activeIndex =="2"){
      this.setState({activeIndex: (this.state.activeIndex + 2)});
    }
    else if (this.state.activeIndex =="3"){
      this.setState({activeIndex: (this.state.activeIndex + 1)});
    }

    }
  };

  componentDidMount(){
    this.setUserdata();
  }

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
                <Table singleLine={true}>
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
                          <Form.Group grouped={true}>
                            <Form.Field>
                              <Radio label='Ich möchte mit meinem Projekt für den Lehr-und Lernprozess in der Schule beitragen' control='input' value='option1' onChange={this.handleChange} type='radio' checked={this.state.value === 'option1'} name='htmlRadios'/>
                              <Popup trigger={<Icon name = 'info' />} wide='very' content='Das Kernziel einer Schule ist die Wissensvermittlung. Dazu gehören Projekte die den Unterricht fördern und neu gestalten können wie z.B Sportwoche, Theater AG oder Projekte wie „Effiziente Nutzung von Strom und Wasser im Alltag'/>
                            </Form.Field>
                            <br/>

                            <Form.Field>
                              <Radio label='Ich möchte koordinieren und organisieren' control='input' value='option2' onChange={this.handleChange} type='radio' checked={this.state.value === 'option2'} name='htmlRadios'/>
                              <Popup trigger={<Icon name = 'info' />} wide='very' content='z. B digitales Klassenbuch. Planung, Organisiation und Durchführung der Unterstützungsprojekte und Lehr-bzw Lernprojekte.'/>
                            </Form.Field><br/>
                            <Form.Field>
                              <Radio label='Ich möchte ein Projekt erstellen um die Ziele der Schule zu unterstützen' control='input' value='option3' onChange={this.handleChange} type='radio' checked={this.state.value === 'option3'} name='htmlRadios'/>
                              <Popup trigger={<Icon name = 'info' />} wide='very' content='Unterstützende Tätigikeiten wie z. B Infrastruktur der Schule verbessern oder Fundraising für eine Finanzierung.'/>
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
                <Table singleLine={true}>
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
                        <Form.Group grouped={true}>
                          <Form.Field label='Suchen, Verarbeiten und Aufbewahren' onChange={this.handleSuchenVerarbeitenundAufbewahren} checked={this.state.SuchenVerarbeitenundAufbewahren} control='input' type='checkbox'/>
                          <Form.Field label='Kommunizieren und Kooperieren' onChange={this.handleKommunizierenundKooperieren} checked={this.state.KommunizierenundKooperieren} control='input' type='checkbox'/>
                          <Form.Field label='Produzieren und Präsentieren' onChange={this.handleProduzierenundPräsentieren} checked={this.state.ProduzierenundPräsentieren} control='input' type='checkbox'/>
                          <Form.Field label='Schützen und sicher agieren' onChange={this.handleSchützenundsicheragieren} checked={this.state.Schützenundsicheragieren} control='input' type='checkbox'/>
                          <Form.Field label='Probleme lösen und Handeln' onChange={this.handleProblemelösenundHandeln} checked={this.state.ProblemelösenundHandeln} control='input' type='checkbox'/>
                          <Form.Field label='Analysieren und Reflektieren' onChange={this.handleAnalysierenundReflektieren} checked={this.state.AnalysierenundReflektieren} control='input' type='checkbox'/>
                        </Form.Group>
                      </Table.Cell>
                    </Table.Row>

                  </Table.Body>

                </Table>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine={true}>
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
                        <Form.Group grouped={true}>
                          <Form.Field label='Kita/Vorschule' onChange={this.handleKitaVorschule} checked={this.state.KitaVorschule} control='input' type='checkbox'/>
                          <Form.Field label='Grundschule' onChange={this.handleGrundschule} checked={this.state.Grundschule} control='input' type='checkbox'/>
                          <Form.Field label='Sekundarstufe 1' onChange={this.handleSekundarstufe1} checked={this.state.Sekundarstufe1} control='input' type='checkbox'/>
                          <Form.Field label='Sekundarstufe 2' onChange={this.handleSekundarstufe2} checked={this.state.Sekundarstufe2} control='input' type='checkbox'/>
                          <Form.Field label='Höhere Handelschule (Fachabi)' onChange={this.handleHoehereHandelschule} checked={this.state.HoehereHandelschule} control='input' type='checkbox'/>
                          <Form.Field label='Handelschule' onChange={this.handleHandelschule} checked={this.state.Handelschule} control='input' type='checkbox'/>
                        </Form.Group>
                      </Table.Cell>
                    </Table.Row>

                  </Table.Body>

                </Table>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine={true}>
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
                        <Form.Group grouped={true}>
                          <Form.Field label='Sprachen' onChange={this.handleSprachen} checked={this.state.Sprachen} control='input' type='checkbox'/>
                          <Form.Field label='Kulturelle Bildung' onChange={this.handleKulturelleBildung} checked={this.state.KulturelleBildung} control='input' type='checkbox'/>
                          <Form.Field label='Geschichte/ Gesellschaft' onChange={this.handleGeschichteGesellschaft} checked={this.state.GeschichteGesellschaft} control='input' type='checkbox'/>
                          <Form.Field label='Naturwissenschaften' onChange={this.handleNaturwissenschaften} checked={this.state.Naturwissenschaften} control='input' type='checkbox'/>
                          <Form.Field label='Informatik/ technische Bildung' onChange={this.handleInformatiktechnischeBildung} checked={this.state.InformatiktechnischeBildung} control='input' type='checkbox'/>
                        </Form.Group>
                      </Table.Cell>
                    </Table.Row>

                  </Table.Body>

                </Table>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine={true}>
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
                        <Form.Group grouped={true}>
                          <Form.Field label='Mathematik' onChange={this.handleMathematik} checked={this.state.Mathematik} control='input' type='checkbox'/>
                          <Form.Field label='Deutsch' onChange={this.handleDeutsch} checked={this.state.Deutsch} control='input' type='checkbox'/>
                          <Form.Field label='Englisch' onChange={this.handleEnglisch} checked={this.state.Englisch} control='input' type='checkbox'/>
                          <Form.Field label='Physik' onChange={this.handlePhysik} checked={this.state.Physik} control='input' type='checkbox'/>
                          <Form.Field label='Chemie' onChange={this.handleChemie} checked={this.state.Chemie} control='input' type='checkbox'/>
                          <Form.Field label='Erdkunde' onChange={this.handleErdkunde} checked={this.state.Erdkunde} control='input' type='checkbox'/>
                          <Form.Field label='Sport' onChange={this.handleSport} checked={this.state.Sport} control='input' type='checkbox'/>
                          <Form.Field label='Kunst' onChange={this.handleKunst} checked={this.state.Kunst} control='input' type='checkbox'/>
                          <Form.Field label='Französisch' onChange={this.handleFranzösisch} checked={this.state.Französisch} control='input' type='checkbox'/>
                          <Form.Field label='Spanisch' onChange={this.handleSpanisch} checked={this.state.Spanisch} control='input' type='checkbox'/>
                          <Form.Field label='Italienisch' onChange={this.handleItalienisch} checked={this.state.Italienisch} control='input' type='checkbox'/>
                          <Form.Field label='BWL' onChange={this.handleBwl} checked={this.state.Bwl} control='input' type='checkbox'/>
                          <Form.Field label='VWL' onChange={this.handleVwl} checked={this.state.Vwl} control='input' type='checkbox'/>
                          <Form.Field label='Informatik' onChange={this.handleInformatik} checked={this.state.Informatik} control='input' type='checkbox'/>
                          <Form.Field label='Pädagogik' onChange={this.handlePädagogik} checked={this.state.Pädagogik} control='input' type='checkbox'/>
                          <Form.Field label='Politik' onChange={this.handlePolitik} checked={this.state.Politik} control='input' type='checkbox'/>
                        </Form.Group>
                      </Table.Cell>
                    </Table.Row>

                  </Table.Body>

                </Table>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine={true}>
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
                        <Form.Group grouped={true}>
                          <Form.Field label='Kein Internet' onChange={this.handleKeinInternet} checked={this.state.KeinInternet} control='input' type='checkbox'/>
                          <Form.Field label='PC/Laptop' onChange={this.handlePCLaptop} checked={this.state.PCLaptop} control='input' type='checkbox'/>
                          <Form.Field label='Tablet/Smartphone' onChange={this.handleTabletSmartphone} checked={this.state.TabletSmartphone} control='input' type='checkbox'/>
                          <Form.Field label='Hardware/Basteln' onChange={this.handleHardwareBasteln} checked={this.state.HardwareBasteln} control='input' type='checkbox'/>
                          <Form.Field label='Videos/Filme' onChange={this.handleVideosFilme} checked={this.state.VideosFilme} control='input' type='checkbox'/>
                        </Form.Group>
                      </Table.Cell>
                    </Table.Row>

                  </Table.Body>

                </Table>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine={true}>
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
                        <Form.Group grouped={true}>
                          <Form.Field label='Unterrichstreihe' onChange={this.handleUnterrichstreihe} checked={this.state.Unterrichstreihe} control='input' type='checkbox'/>
                          <Form.Field label='Stunde' onChange={this.handleStunde} checked={this.state.Stunde} control='input' type='checkbox'/>
                          <Form.Field label='Doppelstunde' onChange={this.handleDoppelstunde} checked={this.state.Doppelstunde} control='input' type='checkbox'/>
                          <Form.Field label='Flexibel' onChange={this.handleFlexibel} checked={this.state.Flexibel} control='input' type='checkbox'/>
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
                <Table singleLine={true}>
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
                        <Form.Group grouped={true}>
                          <Form.Field label='Klasse' onChange={this.handleKlasse} checked={this.state.Klasse} control='input' type='checkbox'/>
                          <Form.Field label='Schule' onChange={this.handleSchule} checked={this.state.Schule} control='input' type='checkbox'/>
                          <Form.Field label='Fachlich' onChange={this.handleFachlich} checked={this.state.Fachlich} control='input' type='checkbox'/>
                          <Form.Field label='Lehrer  ' onChange={this.handleLehrer} checked={this.state.Lehrer} control='input' type='checkbox'/>
                          <Form.Field label='Elternvertretung' onChange={this.handleElternvertretung} checked={this.state.Elternvertretung} control='input' type='checkbox'/>
                        </Form.Group>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>

              </div>
            </div>

            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine={true}>
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
                        <Form.Group grouped={true}>
                          <Form.Field label='Zeitmanagement besser planen' onChange={this.handleZeitmanagementbesserplanen} checked={this.state.Zeitmanagementbesserplanen} control='input' type='checkbox'/>
                          <Form.Field label='Budget/ Finanzierung' onChange={this.handleBudgetFinanzierung} checked={this.state.BudgetFinanzierung} control='input' type='checkbox'/>
                          <Form.Field label='Bildung/ Wissenvermittlung' onChange={this.handleBildungWissenvermittlung} checked={this.state.BildungWissenvermittlung} control='input' type='checkbox'/>
                          <Form.Field label='Unterricht neu gestalten' onChange={this.handleUnterrichtneugestalten} checked={this.state.Unterrichtneugestalten} control='input' type='checkbox'/>
                          <Form.Field label='Verwaltung verbessern' onChange={this.handleVerwaltungverbessern} checked={this.state.Verwaltungverbessern} control='input' type='checkbox'/>
                          <Form.Field label='Konfliktmanagement' onChange={this.handleKonfliktmanagement} checked={this.state.Konfliktmanagement} control='input' type='checkbox'/>
                          <Form.Field label='Sonstige strategische Ziele' onChange={this.handleSonstigestrategischeZiele} checked={this.state.SonstigestrategischeZiele} control='input' type='checkbox'/>
                        </Form.Group>

                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>

              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <Table singleLine={true}>
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
                        <Form.Group grouped={true}>
                          <Form.Field label='Tage' onChange={this.handleTage} checked={this.state.Tage} control='input' type='checkbox'/>
                          <Form.Field label='Wochen' onChange={this.handleWochen} checked={this.state.Wochen} control='input' type='checkbox'/>
                          <Form.Field label='Monate' onChange={this.handleMonate} checked={this.state.Monate} control='input' type='checkbox'/>
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
                <Table singleLine={true}>
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
                        <Form.Group grouped={true}>
                          <Form.Field label='Klasse' control='input' type='checkbox'/>
                          <Form.Field label='Schule'  control='input' type='checkbox'/>
                          <Form.Field label='Fachlich'  control='input' type='checkbox'/>
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
                <Table singleLine={true}>
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
                        <Form.Group grouped={true}>
                          <Form.Field label='Personal' onChange={this.handlePersonal} checked={this.state.Personal} control='input' type='checkbox'/>
                          <Form.Field label='Schüler' onChange={this.handleSchueler} checked={this.state.Schueler} control='input' type='checkbox'/>
                          <Form.Field label='Sport' onChange={this.handleSport} checked={this.state.Sport} control='input' type='checkbox'/>
                          <Form.Field label='Bildung' onChange={this.handleBildung} checked={this.state.Bildung} control='input' type='checkbox'/>
                          <Form.Field label='Schulische Ausstatung' onChange={this.handleSchulischeAusstatung} checked={this.state.SchulischeAusstatung} control='input' type='checkbox'/>
                          <Form.Field label='IT, technischer Support' onChange={this.handleITtechnischerSupport} checked={this.state.ITtechnischerSupport} control='input' type='checkbox'/>
                          <Form.Field label='Verpflegung in der Schule' onChange={this.handleVerpflegunginderSchule} checked={this.state.VerpflegunginderSchule} control='input' type='checkbox'/>
                          <Form.Field label='Finanzierung' onChange={this.handleFinanzierung} checked={this.state.Finanzierung} control='input' type='checkbox'/>
                          <Form.Field label='Soziales Engagement' onChange={this.handleSozialesEngagement} checked={this.state.SozialesEngagement} control='input' type='checkbox'/>
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

            <Table singleLine={true}>
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
                    <Form loading={this.state.Laden}>
                      <Form.Group>
                        <Form.Input style={{
                            width: "600px"
                          }} placeholder='Titel' onChange={this.handleText} value={this.state.Titel} name="Titel" icon='user' iconPosition='left'/>
                      </Form.Group>
                      <Form.Group widths='equal'>
                        <Form.TextArea rows={2} onChange={this.handleText} value={this.state.Projektbeschreibung} name='Projektbeschreibung' placeholder='Projektbeschreibung'/>
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
                      </div>

                      <label>
                        <b>Titelbild</b>
                      </label>
                      <input type="file" name='foo' id='foo' onChange={(e) => this._handleImageChange(e)} style={{
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
        <Container fluid={true}>
          <Tab menu={{
              fluid: true,
              tabular: 'right'
            }} panes={panes} activeIndex={activeIndex}/><br/>
        </Container>
        <div className="container">
          <div className="row justify-content-md-center">
            <Button animated={true} color='teal' style={{
                width: "150px"
              }} onClick={this.changeTab.bind(this)}>
              <Button.Content hidden={true}>speichern</Button.Content>
              <Button.Content visible={true}>
                <Icon name='check'/>
              </Button.Content>
            </Button>
            <Button animated={true} color='teal' style={{
                width: "150px"
              }} onClick={this.goBack.bind(this)}>
              <Button.Content hidden={true}>zurück</Button.Content>
              <Button.Content visible={true}>
                <Icon name='arrow left'/>
              </Button.Content>
            </Button>

          </div>
        </div>
      </div><br/></div>)
  }
}

export default Wizard;
