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
      Userid: "",
      ProjektId: "",
      SuchenVerarbeitenundAufbewahren: false,
     KommunizierenundKooperieren: false,
     ProduzierenundPräsentieren: false,
     Schützenundsicheragieren: false,
     ProblemelösenundHandeln: false,
     AnalysierenundReflektieren: false,
     KitaVorschule: false,
     Grundschule: false,
     Sekundarstufe1: false,
     Sekundarstufe2: false,
     HoehereHandelschule: false,
     Handelschule: false,
     Sprachen: false,
     KulturelleBildung: false,
     GeschichteGesellschaft: false,
     Naturwissenschaften: false,
     InformatiktechnischeBildung: false,
     Mathematik: false,
     Deutsch: false,
     Englisch: false,
     Physik: false,
     Chemie: false,
     Erdkunde: false,
     Sport: false,
     Kunst: false,
     Französisch: false,
     Spanisch: false,
     Italienisch: false,
     Bwl: false,
     Vwl: false,
     Informatik: false,
     Pädagogik: false,
     Politik: false,
     KeinInternet: false,
     PCLaptop: false,
     TabletSmartphone: false,
     HardwareBasteln: false,
     VideosFilme: false,
     Unterrichstreihe: false,
     Stunde: false,
     Doppelstunde: false,
     Flexibel: false,
     Klasse: false,
     Schule: false,
     Fachlich: false,
     Lehrer: false,
     Elternvertretung: false,
     Zeitmanagementbesserplanen: false,
     BudgetFinanzierung: false,
     BildungWissenvermittlung: false,
     Unterrichtneugestalten: false,
     Verwaltungverbessern: false,
     Konfliktmanagement: false,
     SonstigestrategischeZiele: false,
     Tage: false,
     Wochen: false,
     Monate: false,
     StadtGemeinde: false,
     Personal: false,
     Schueler: false,
     Bildung: false,
     SchulischeAusstatung: false,
     ITtechnischerSupport: false,
     VerpflegunginderSchule: false,
     Finanzierung: false,
     SozialesEngagement: false,
     goal: "",
     startdate: "",
     rights:"o"

    };
    this.firstClick = this.firstClick.bind(this);
    this.newProject = this.newProject.bind(this);
    this.goBack = this.goBack.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.nextField = this.nextField.bind(this);
    this.handleRights = this.handleRights.bind(this);
  }

  setUserdata() {
    var target = ('http://backend-edu.azurewebsites.net/user/' + localStorage.getItem('email'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      localStorage.setItem('userid', json[0].userid);


    })
  }

  firstClick(){
    if(this.state.value === 'option1'){
      var activity = "lehrundlernProjekte";
    }
    if(this.state.value === 'option2'){
      var activity = "managementProjekt";
    }
    if(this.state.value === 'option3'){
      var activity = "unterstuetzendesProjekt";
    }

    var form = new FormData();
    form.append('project_author', localStorage.getItem("userid"));
    form.append('project_activity', activity);

    fetch('http://backend-edu.azurewebsites.net/wizardctrl/newProject', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: form
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({ProjektId: json[0].projectid},
      function(){
        this.changeTab();
      });
  });
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
  handleSuchenVerarbeitenundAufbewahren = (e) => this.setState({SuchenVerarbeitenundAufbewahren : !this.state.SuchenVerarbeitenundAufbewahren})
  handleKommunizierenundKooperieren = (e) => this.setState({KommunizierenundKooperieren : !this.state.KommunizierenundKooperieren})
  handleProduzierenundPräsentieren = (e) => this.setState({ProduzierenundPräsentieren : !this.state.ProduzierenundPräsentieren},function(){this.addTag("Produzieren")})
  handleSchützenundsicheragieren = (e) => this.setState({Schützenundsicheragieren : !this.state.Schützenundsicheragieren})
  handleProblemelösenundHandeln = (e) => this.setState({ProblemelösenundHandeln : !this.state.ProblemelösenundHandeln})
  handleAnalysierenundReflektieren = (e) => this.setState({AnalysierenundReflektieren : !this.state.AnalysierenundReflektieren})
  handleKitaVorschule = (e) => this.setState({KitaVorschule : !this.state.KitaVorschule})
  handleGrundschule = (e) => this.setState({Grundschule : !this.state.Grundschule})
  handleSekundarstufe1 = (e) => this.setState({Sekundarstufe1 : !this.state.Sekundarstufe1})
  handleSekundarstufe2 = (e) => this.setState({Sekundarstufe2 : !this.state.Sekundarstufe2})
  handleHoehereHandelschule = (e) => this.setState({HoehereHandelschule : !this.state.HoehereHandelschule})
  handleHandelschule = (e) => this.setState({Handelschule : !this.state.Handelschule})
  handleSprachen = (e) => this.setState({Sprachen : !this.state.Sprachen})
  handleKulturelleBildung = (e) => this.setState({KulturelleBildung : !this.state.KulturelleBildung})
  handleGeschichteGesellschaft = (e) => this.setState({GeschichteGesellschaft : !this.state.GeschichteGesellschaft})
  handleNaturwissenschaften = (e) => this.setState({Naturwissenschaften : !this.state.Naturwissenschaften})
  handleInformatiktechnischeBildung = (e) => this.setState({InformatiktechnischeBildung : !this.state.InformatiktechnischeBildung})
  handleMathematik = (e) => this.setState({Mathematik : !this.state.Mathematik})
  handleDeutsch = (e) => this.setState({Deutsch : !this.state.Deutsch})
  handleEnglisch = (e) => this.setState({Englisch : !this.state.Englisch})
  handlePhysik = (e) => this.setState({Physik : !this.state.Physik})
  handleChemie = (e) => this.setState({Chemie : !this.state.Chemie})
  handleErdkunde = (e) => this.setState({Erdkunde : !this.state.Erdkunde})
  handleSport = (e) => this.setState({Sport : !this.state.Sport})
  handleKunst = (e) => this.setState({Kunst : !this.state.Kunst})
  handleFranzösisch = (e) => this.setState({Französisch : !this.state.Französisch})
  handleSpanisch = (e) => this.setState({Spanisch : !this.state.Spanisch})
  handleItalienisch = (e) => this.setState({Italienisch : !this.state.Italienisch})
  handleBwl = (e) => this.setState({Bwl : !this.state.Bwl})
  handleVwl = (e) => this.setState({Vwl : !this.state.Vwl})
  handleInformatik = (e) => this.setState({Informatik : !this.state.Informatik})
  handlePädagogik = (e) => this.setState({Pädagogik : !this.state.Pädagogik})
  handlePolitik = (e) => this.setState({Politik : !this.state.Politik})
  handleKeinInternet = (e) => this.setState({KeinInternet : !this.state.KeinInternet})
  handlePCLaptop = (e) => this.setState({PCLaptop : !this.state.PCLaptop})
  handleTabletSmartphone = (e) => this.setState({TabletSmartphone : !this.state.TabletSmartphone})
  handleHardwareBasteln = (e) => this.setState({HardwareBasteln : !this.state.HardwareBasteln})
  handleVideosFilme = (e) => this.setState({VideosFilme : !this.state.VideosFilme})
  handleUnterrichstreihe = (e) => this.setState({Unterrichstreihe : !this.state.Unterrichstreihe})
  handleStunde = (e) => this.setState({Stunde : !this.state.Stunde})
  handleDoppelstunde = (e) => this.setState({Doppelstunde : !this.state.Doppelstunde})
  handleFlexibel = (e) => this.setState({Flexibel : !this.state.Flexibel})
  handleKlasse = (e) => this.setState({Klasse : !this.state.Klasse})
  handleSchule = (e) => this.setState({Schule : !this.state.Schule})
  handleFachlich = (e) => this.setState({Fachlich : !this.state.Fachlich})
  handleLehrer = (e) => this.setState({Lehrer : !this.state.Lehrer})
  handleElternvertretung = (e) => this.setState({Elternvertretung : !this.state.Elternvertretung})
  handleZeitmanagementbesserplanen = (e) => this.setState({Zeitmanagementbesserplanen : !this.state.Zeitmanagementbesserplanen})
  handleBudgetFinanzierung = (e) => this.setState({BudgetFinanzierung : !this.state.BudgetFinanzierung})
  handleBildungWissenvermittlung = (e) => this.setState({BildungWissenvermittlung : !this.state.BildungWissenvermittlung})
  handleUnterrichtneugestalten = (e) => this.setState({Unterrichtneugestalten : !this.state.Unterrichtneugestalten})
  handleVerwaltungverbessern = (e) => this.setState({Verwaltungverbessern : !this.state.Verwaltungverbessern})
  handleKonfliktmanagement = (e) => this.setState({Konfliktmanagement : !this.state.Konfliktmanagement})
  handleSonstigestrategischeZiele = (e) => this.setState({SonstigestrategischeZiele : !this.state.SonstigestrategischeZiele})
  handleTage = (e) => this.setState({Tage : !this.state.Tage})
  handleWochen = (e) => this.setState({Wochen : !this.state.Wochen})
  handleMonate = (e) => this.setState({Monate : !this.state.Monate})
  handleStadtGemeinde = (e) => this.setState({StadtGemeinde : !this.state.StadtGemeinde})
  handlePersonal = (e) => this.setState({Personal : !this.state.Personal})
  handleSchueler = (e) => this.setState({Schueler : !this.state.Schueler})
  handleBildung = (e) => this.setState({Bildung : !this.state.Bildung})
  handleSchulischeAusstatung = (e) => this.setState({SchulischeAusstatung : !this.state.SchulischeAusstatung})
  handleITtechnischerSupport = (e) => this.setState({ITtechnischerSupport : !this.state.ITtechnischerSupport})
  handleVerpflegunginderSchule = (e) => this.setState({VerpflegunginderSchule : !this.state.VerpflegunginderSchule})
  handleFinanzierung = (e) => this.setState({Finanzierung : !this.state.Finanzierung})
  handleSozialesEngagement = (e) => this.setState({SozialesEngagement : !this.state.SozialesEngagement})

  addTag(tag){
    var form = new FormData();
    form.append('projectid', this.state.ProjektId);
    form.append('tag_name', tag);

    fetch('http://backend-edu.azurewebsites.net/addtag', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: form
    }).then((response) => {
      return response.json();
    }).then((json) => {
      });
  }

  handleRights(event) {
    this.setState({value: event.target.value});
  }


  addTags(){
  if(this.state.lehrundlernProjekt){
    this.addTag("Lehr und Lernprojekt");
  }
  if(this.state.managementProjekt){
    this.addTag("Managementprojekt");
  }
  if(this.state.unterstuetzendesProjekt){
    this.addTag("Unterstützend");
  }
  if(this.state.ProduzierenundPräsentieren){
    this.addTag("Produzieren und Präsentieren");
  }
  if(this.state.SuchenVerarbeitenundAufbewahren){
    this.addTag("Suchen verarbeiten und aufbewahren");
  }
  if(this.state.KommunizierenundKooperieren){
    this.addTag("Kommunizieren und Kooperieren");
  }
  if(this.state.Schützenundsicheragieren){
    this.addTag("Schützenundsicheragieren");
  }
  if(this.state.ProblemelösenundHandeln){
    this.addTag("Probleme lösen und Handeln");
  }
  if(this.state.AnalysierenundReflektieren){
    this.addTag("Analysieren und Reflektieren");
  }
  if(this.state.KitaVorschule){
    var KitaVorschule = 1;
  }
  if(this.state.Grundschule){
    var Grundschule = 1;
  }
  if(this.state.Sekundarstufe1){
    var Sekundarstufe1 = 1;
  }
  if(this.state.Sekundarstufe2){
    var Sekundarstufe2 = 1;
  }
  if(this.state.HoehereHandelschule){
    var HoehereHandelschule = 1;
  }
  if(this.state.Handelschule){
    var Handelschule = 1;
  }
  if(this.state.Sprachen){
    var Sprachen = 1;
  }
  if(this.state.KulturelleBildung){
    var KulturelleBildung = 1;
  }
  if(this.state.GeschichteGesellschaft){
    var GeschichteGesellschaft = 1;
  }
  if(this.state.Naturwissenschaften){
    var Naturwissenschaften = 1;
  }
  if(this.state.InformatiktechnischeBildung){
    var InformatiktechnischeBildung = 1;
  }
  if(this.state.Mathematik){
    var Mathematik = 1;
  }
  if(this.state.Deutsch){
    var Deutsch = 1;
  }
  if(this.state.Englisch){
    var Englisch = 1;
  }
  if(this.state.Physik){
    var Physik = 1;
  }
  if(this.state.Chemie){
    var Chemie = 1;
  }
  if(this.state.Erdkunde){
    var Erdkunde = 1;
  }
  if(this.state.Sport){
    var Sport = 1;
  }
  if(this.state.Kunst){
    var Kunst = 1;
  }
  if(this.state.Französisch){
    var Französisch = 1;
  }
  if(this.state.Spanisch){
    var Spanisch = 1;
  }
  if(this.state.Italienisch){
    var Italienisch = 1;
  }
  if(this.state.Bwl){
    var Bwl = 1;
  }
  if(this.state.Vwl){
    var Vwl = 1;
  }
  if(this.state.Informatik){
    var Informatik = 1;
  }
  if(this.state.Pädagogik){
    var Pädagogik = 1;
  }
  if(this.state.Politik){
    var Politik = 1;
  }
  if(this.state.KeinInternet){
    var KeinInternet = 1;
  }
  if(this.state.PCLaptop){
    var PCLaptop = 1;
  }
  if(this.state.TabletSmartphone){
    var TabletSmartphone = 1;
  }
  if(this.state.HardwareBasteln){
    var HardwareBasteln = 1;
  }
  if(this.state.VideosFilme){
    var VideosFilme = 1;
  }
  if(this.state.Unterrichstreihe){
    var Unterrichstreihe = 1;
  }
  if(this.state.Stunde){
    var Stunde = 1;
  }
  if(this.state.Doppelstunde){
    var Doppelstunde = 1;
  }
  if(this.state.Flexibel){
    var Flexibel = 1;
  }
  if(this.state.Klasse){
    var Klasse = 1;
  }
  if(this.state.Schule){
    var Schule = 1;
  }
  if(this.state.Fachlich){
    var Fachlich = 1;
  }
  if(this.state.Lehrer){
    var Lehrer = 1;
  }
  if(this.state.Elternvertretung){
    var Elternvertretung = 1;
  }
  if(this.state.Zeitmanagementbesserplanen){
    var Zeitmanagementbesserplanen = 1;
  }
  if(this.state.BudgetFinanzierung){
    var BudgetFinanzierung = 1;
  }
  if(this.state.BildungWissenvermittlung){
    var BildungWissenvermittlung = 1;
  }
  if(this.state.Unterrichtneugestalten){
    var Unterrichtneugestalten = 1;
  }
  if(this.state.Verwaltungverbessern){
    var Verwaltungverbessern = 1;
  }
  if(this.state.Konfliktmanagement){
    var Konfliktmanagement = 1;
  }
  if(this.state.SonstigestrategischeZiele){
    var SonstigestrategischeZiele = 1;
  }
  if(this.state.Tage){
    var Tage = 1;
  }
  if(this.state.Wochen){
    var Wochen = 1;
  }
  if(this.state.Monate){
    var Monate = 1;
  }
  if(this.state.StadtGemeinde){
    var StadtGemeinde = 1;
  }
  if(this.state.Personal){
    var Personal = 1;
  }
  if(this.state.Schueler){
    var Schueler = 1;
  }
  if(this.state.Bildung){
    var Bildung = 1;
  }
  if(this.state.SchulischeAusstatung){
    var SchulischeAusstatung = 1;
  }
  if(this.state.ITtechnischerSupport){
    var ITtechnischerSupport = 1;
  }
  if(this.state.VerpflegunginderSchule){
    var VerpflegunginderSchule = 1;
  }
  if(this.state.Finanzierung){
    var Finanzierung = 1;
  }
  if(this.state.SozialesEngagement){
    var SozialesEngagement = 1;
  }
  if(this.state.Titel){
    var Titel = 1;
  }
  if(this.state.Projektbeschreibung){
    var Projektbeschreibung = 1;
  }
}

//TODO: Add all tag possibilities

  newProject(){
    if(this.state.rights === 'o'){
      var zahl = 0;
    }
    else{
      var zahl = 1;
    }
    this.setState({Laden: true});
    var form = new FormData();
    form.append('project_name', this.state.Titel);
    form.append('project_text', this.state.Projektbeschreibung);
    form.append('foo', this.state.file);
    form.append('fileName', "Projekt");
    form.append('project_writeRights', zahl );
    form.append('project_statement', this.state.goal);
    form.append('termin', this.state.startdate);
    form.append('projectid', this.state.ProjektId); 

    fetch('http://backend-edu.azurewebsites.net/wizardctrl/newProject', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: form
    }).then((response) => {
      return response.json();
    }).then((json) => {
        // this.addTags();
      history.push("projectpage/" + this.state.ProjektId);
      });
  }


  nextField(){
    if (this.state.lehrundlernProjekt || this.state.unterstuetzendesProjekt || this.state.managementProjekt){
      this.changeTab();
    }
    else{
      this.firstClick();
    }
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
                        <Form.TextArea rows={2} onChange={this.handleText} value={this.state.goal} name='goal' placeholder='Wie soll die Zielerreichung gemessen werden?'/>
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
            }} type='date' placeholder='Projektbeginn' name="startdate" onChange={this.handleText} icon='calendar' iconPosition='left'/></Form.Field>
                      </div>
                      <br/>
                      <div className="form-group">
                        <Form.Field style={{
                            width: "200px"
                          }} label='Privatsphäre' control='select' value={this.state.rights} onChange={this.handleRights}>
                          <option name="o" value='o'>&ouml;ffentlich</option>
                          <option name="p" value='p'>privat</option>
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
              }} onClick={this.nextField}>
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
