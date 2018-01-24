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
  handleSuchenVerarbeitenundAufbewahren = (e) => this.setState({SuchenVerarbeitenundAufbewahren : !this.state.SuchenVerarbeitenundAufbewahren}, function(){if(this.state.SuchenVerarbeitenundAufbewahren){this.addTag("Suchen&Verarbeiten")}else{this.removeTag("Suchen&Verarbeiten")}})
  handleKommunizierenundKooperieren = (e) => this.setState({KommunizierenundKooperieren : !this.state.KommunizierenundKooperieren},function(){if(this.state.KommunizierenundKooperieren){this.addTag("Kommunizieren")}else{this.removeTag("Kommunizieren")}})
  handleProduzierenundPräsentieren = (e) => this.setState({ProduzierenundPräsentieren : !this.state.ProduzierenundPräsentieren},function(){if(this.state.ProduzierenundPräsentieren){this.addTag("Produzieren")}else{this.removeTag("Produzieren")}})
  handleSchützenundsicheragieren = (e) => this.setState({Schützenundsicheragieren : !this.state.Schützenundsicheragieren},function(){if(this.state.Schützenundsicheragieren){this.addTag("Sichern")}else{this.removeTag("Sichern")}} )
  handleProblemelösenundHandeln = (e) => this.setState({ProblemelösenundHandeln : !this.state.ProblemelösenundHandeln}, function(){if(this.state.ProblemelösenundHandeln){this.addTag("Probelembehandlung")}else{this.removeTag("Probelembehandlung")}} )
  handleAnalysierenundReflektieren = (e) => this.setState({AnalysierenundReflektieren : !this.state.AnalysierenundReflektieren},function(){if(this.state.AnalysierenundReflektieren){this.addTag("Analysieren")}else{this.removeTag("Analysieren")}})
  handleKitaVorschule = (e) => this.setState({KitaVorschule : !this.state.KitaVorschule}, function(){if(this.state.KitaVorschule){this.addTag("Vorschule")}else{this.removeTag("Vorschule")}})
  handleGrundschule = (e) => this.setState({Grundschule : !this.state.Grundschule}, function(){if(this.state.Grundschule){this.addTag("Grundschule")}else{this.removeTag("Grundschule")}})
  handleSekundarstufe1 = (e) => this.setState({Sekundarstufe1 : !this.state.Sekundarstufe1}, function(){if(this.state.Sekundarstufe1){this.addTag("Sekundarstufe1")}else{this.removeTag("Sekundarstufe1")}})
  handleSekundarstufe2 = (e) => this.setState({Sekundarstufe2 : !this.state.Sekundarstufe2},function(){if(this.state.Sekundarstufe2){this.addTag("Sekundarstufe2")}else{this.removeTag("Sekundarstufe2")}})
  handleHoehereHandelschule = (e) => this.setState({HoehereHandelschule : !this.state.HoehereHandelschule}, function(){if(this.state.HoehereHandelschule){this.addTag("HoehereHandelschule")}else{this.removeTag("HoehereHandelschule")}})
  handleHandelschule = (e) => this.setState({Handelschule : !this.state.Handelschule}, function(){if(this.state.Handelschule){this.addTag("Handelschule")}else{this.removeTag("Handelschule")}})
  handleSprachen = (e) => this.setState({Sprachen : !this.state.Sprachen}, function(){if(this.state.Sprachen){this.addTag("Sprachen")}else{this.removeTag("Sprachen")}})
  handleKulturelleBildung = (e) => this.setState({KulturelleBildung : !this.state.KulturelleBildung}, function(){if(this.state.KulturelleBildung){this.addTag("Kultur")}else{this.removeTag("Kultur")}})
  handleGeschichteGesellschaft = (e) => this.setState({GeschichteGesellschaft : !this.state.GeschichteGesellschaft}, function(){if(this.state.GeschichteGesellschaft){this.addTag("Geschichte&Gesellschaft")}else{this.removeTag("Geschichte&Gesellschaft")}})
  handleNaturwissenschaften = (e) => this.setState({Naturwissenschaften : !this.state.Naturwissenschaften},function(){if(this.state.Naturwissenschaften){this.addTag("Naturwissenschaften")}else{this.removeTag("Naturwissenschaften")}})
  handleInformatiktechnischeBildung = (e) => this.setState({InformatiktechnischeBildung : !this.state.InformatiktechnischeBildung}, function(){if(this.state.InformatiktechnischeBildung){this.addTag("Informationslehre")}else{this.removeTag("Informationslehre")}})
  handleMathematik = (e) => this.setState({Mathematik : !this.state.Mathematik}, function(){if(this.state.Mathematik){this.addTag("Mathematik")}else{this.removeTag("Mathematik")}})
  handleDeutsch = (e) => this.setState({Deutsch : !this.state.Deutsch}, function(){if(this.state.Deutsch){this.addTag("Deutsch")}else{this.removeTag("Deutsch")}})
  handleEnglisch = (e) => this.setState({Englisch : !this.state.Englisch}, function(){if(this.state.Englisch){this.addTag("Englisch")}else{this.removeTag("Englisch")}})
  handlePhysik = (e) => this.setState({Physik : !this.state.Physik}, function(){if(this.state.Physik){this.addTag("Physik")}else{this.removeTag("Physik")}})
  handleChemie = (e) => this.setState({Chemie : !this.state.Chemie}, function(){if(this.state.Chemie){this.addTag("Chemie")}else{this.removeTag("Chemie")}})
  handleErdkunde = (e) => this.setState({Erdkunde : !this.state.Erdkunde}, function(){if(this.state.Erdkund){this.addTag("Erdkund")}else{this.removeTag("Erdkund")}})
  handleSport = (e) => this.setState({Sport : !this.state.Sport}, function(){if(this.state.Sport){this.addTag("Sport")}else{this.removeTag("Sport")}})
  handleKunst = (e) => this.setState({Kunst : !this.state.Kunst}, function(){if(this.state.Kunst){this.addTag("Kunst")}else{this.removeTag("Kunst")}})
  handleFranzösisch = (e) => this.setState({Französisch : !this.state.Französisch}, function(){if(this.state.Französisch){this.addTag("Französisch")}else{this.removeTag("Französisch")}})
  handleSpanisch = (e) => this.setState({Spanisch : !this.state.Spanisch}, function(){if(this.state.Spanisch){this.addTag("Spanisch")}else{this.removeTag("Spanisch")}})
  handleItalienisch = (e) => this.setState({Italienisch : !this.state.Italienisch}, function(){if(this.state.Italienisch){this.addTag("Italienisch")}else{this.removeTag("Italienisch")}})
  handleBwl = (e) => this.setState({Bwl : !this.state.Bwl}, function(){if(this.state.Bwl){this.addTag("BWL")}else{this.removeTag("BWL")}})
  handleVwl = (e) => this.setState({Vwl : !this.state.Vwl}, function(){if(this.state.Vwl){this.addTag("Vwl")}else{this.removeTag("Vwl")}})
  handleInformatik = (e) => this.setState({Informatik : !this.state.Informatik}, function(){if(this.state.Informatik){this.addTag("Informatik")}else{this.removeTag("Informatik")}})
  handlePädagogik = (e) => this.setState({Pädagogik : !this.state.Pädagogik}, function(){if(this.state.Pädagogik){this.addTag("Pädagogik")}else{this.removeTag("Pädagogik")}})
  handlePolitik = (e) => this.setState({Politik : !this.state.Politik}, function(){if(this.state.Politik){this.addTag("Politik")}else{this.removeTag("Politik")}})
  handleKeinInternet = (e) => this.setState({KeinInternet : !this.state.KeinInternet}, function(){if(this.state.KeinInternet){this.addTag("KeinInternet")}else{this.removeTag("KeinInternet")}})
  handlePCLaptop = (e) => this.setState({PCLaptop : !this.state.PCLaptop}, function(){if(this.state.PCLaptop){this.addTag("PCLaptop")}else{this.removeTag("PCLaptop")}})
  handleTabletSmartphone = (e) => this.setState({TabletSmartphone : !this.state.TabletSmartphone},function(){if(this.state.TabletSmartphone){this.addTag("Tablet - Smartphone")}else{this.removeTag("Tablet - Smartphone")}})
  handleHardwareBasteln = (e) => this.setState({HardwareBasteln : !this.state.HardwareBasteln},function(){if(this.state.HardwareBasteln){this.addTag("Hardware basteln")}else{this.removeTag("Hardware basteln")}})
  handleVideosFilme = (e) => this.setState({VideosFilme : !this.state.VideosFilme},function(){if(this.state.VideosFilme){this.addTag("Video-Filme")}else{this.removeTag("Video-Filme")}})
  handleUnterrichstreihe = (e) => this.setState({Unterrichstreihe : !this.state.Unterrichstreihe},function(){if(this.state.Unterrichstreihe){this.addTag("Unterrichtsreihe")}else{this.removeTag("Unterrichtsreihe")}})
  handleStunde = (e) => this.setState({Stunde : !this.state.Stunde},function(){if(this.state.Stunde){this.addTag("Stunde")}else{this.removeTag("Stunde")}})
  handleDoppelstunde = (e) => this.setState({Doppelstunde : !this.state.Doppelstunde},function(){if(this.state.Doppelstunde){this.addTag("Doppelstunde")}else{this.removeTag("Doppelstunde")}})
  handleFlexibel = (e) => this.setState({Flexibel : !this.state.Flexibel},function(){if(this.state.Flexibel){this.addTag("Flexibel")}else{this.removeTag("Flexibel")}})
  handleKlasse = (e) => this.setState({Klasse : !this.state.Klasse},function(){if(this.state.Klasse){this.addTag("Klasse")}else{this.removeTag("Klasse")}})
  handleSchule = (e) => this.setState({Schule : !this.state.Schule},function(){if(this.state.Schule){this.addTag("Schule")}else{this.removeTag("Schule")}})
  handleFachlich = (e) => this.setState({Fachlich : !this.state.Fachlich},function(){if(this.state.Fachlich){this.addTag("Fachlich")}else{this.removeTag("Fachlich")}})
  handleLehrer = (e) => this.setState({Lehrer : !this.state.Lehrer},function(){if(this.state.Lehrer){this.addTag("Lehrer")}else{this.removeTag("Lehrer")}})
  handleElternvertretung = (e) => this.setState({Elternvertretung : !this.state.Elternvertretung},function(){if(this.state.Elternvertretung){this.addTag("Elternvertretung")}else{this.removeTag("Elternvertretung")}})
  handleZeitmanagementbesserplanen = (e) => this.setState({Zeitmanagementbesserplanen : !this.state.Zeitmanagementbesserplanen},function(){if(this.state.Zeitmanagementbesserplanen){this.addTag("Zeitmanagement besser planen")}else{this.removeTag("Zeitmanagement besser planen")}})
  handleBudgetFinanzierung = (e) => this.setState({BudgetFinanzierung : !this.state.BudgetFinanzierung},function(){if(this.state.BudgetFinanzierung){this.addTag("Budget")}else{this.removeTag("Budget")}})
  handleBildungWissenvermittlung = (e) => this.setState({BildungWissenvermittlung : !this.state.BildungWissenvermittlung},function(){if(this.state.BildungWissenvermittlung){this.addTag("Wissen vermitteln")}else{this.removeTag("Wissen vermitteln")}})
  handleUnterrichtneugestalten = (e) => this.setState({Unterrichtneugestalten : !this.state.Unterrichtneugestalten},function(){if(this.state.Unterrichtneugestalten){this.addTag("Unterricht gestalten")}else{this.removeTag("Unterricht gestalten")}})
  handleVerwaltungverbessern = (e) => this.setState({Verwaltungverbessern : !this.state.Verwaltungverbessern},function(){if(this.state.Verwaltungverbessern){this.addTag("Verwaltung-Support")}else{this.removeTag("Verwaltung-Support")}})
  handleKonfliktmanagement = (e) => this.setState({Konfliktmanagement : !this.state.Konfliktmanagement},function(){if(this.state.Konfliktmanagement){this.addTag("Konfliktmanagement")}else{this.removeTag("Konfliktmanagement")}})
  handleSonstigestrategischeZiele = (e) => this.setState({SonstigestrategischeZiele : !this.state.SonstigestrategischeZiele})
  handleTage = (e) => this.setState({Tage : !this.state.Tage},function(){if(this.state.Tage){this.addTag("Tage")}else{this.removeTag("Tage")}})
  handleWochen = (e) => this.setState({Wochen : !this.state.Wochen},function(){if(this.state.Wochen){this.addTag("Schulische Ausstattung")}else{this.removeTag("Schulische Ausstattung")}})
  handleMonate = (e) => this.setState({Monate : !this.state.Monate},function(){if(this.state.Monate){this.addTag("Monate")}else{this.removeTag("Monate")}})
  handleStadtGemeinde = (e) => this.setState({StadtGemeinde : !this.state.StadtGemeinde},function(){if(this.state.StadtGemeinde){this.addTag("Stadt")}else{this.removeTag("Stadt")}})
  handlePersonal = (e) => this.setState({Personal : !this.state.Personal},function(){if(this.state.Personal){this.addTag("Personal")}else{this.removeTag("Personal")}})
  handleSchueler = (e) => this.setState({Schueler : !this.state.Schueler},function(){if(this.state.Schueler){this.addTag("Schüler")}else{this.removeTag("Schüler")}})
  handleBildung = (e) => this.setState({Bildung : !this.state.Bildung},function(){if(this.state.Bildung){this.addTag("Bildung")}else{this.removeTag("Bildung")}})
  handleSchulischeAusstatung = (e) => this.setState({SchulischeAusstatung : !this.state.SchulischeAusstatung},function(){if(this.state.SchulischeAusstatung){this.addTag("Schulische Ausstattung")}else{this.removeTag("Schulische Ausstattung")}})
  handleITtechnischerSupport = (e) => this.setState({ITtechnischerSupport : !this.state.ITtechnischerSupport},function(){if(this.state.ITtechnischerSupport){this.addTag("Technischer Support")}else{this.removeTag("Technischer Support")}})
  handleVerpflegunginderSchule = (e) => this.setState({VerpflegunginderSchule : !this.state.VerpflegunginderSchule},function(){if(this.state.VerpflegunginderSchule){this.addTag("Verpflegung")}else{this.removeTag("Verpflegung")}})
  handleFinanzierung = (e) => this.setState({Finanzierung : !this.state.Finanzierung},function(){if(this.state.Finanzierung){this.addTag("Finanzierung")}else{this.removeTag("Finanzierung")}})
  handleSozialesEngagement = (e) => this.setState({SozialesEngagement : !this.state.SozialesEngagement},function(){if(this.state.SozialesEngagement){this.addTag("Sozial")}else{this.removeTag("Sozial")}})

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

  removeTag(tag){
    var form = new FormData();
    form.append('projectid', this.state.ProjektId);
    form.append('tag_name', tag);

    fetch('http://backend-edu.azurewebsites.net/deletetag', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: form
    }).then((response) => {
      return response.json();
    }).then((json) => {
      });
  }

  handleTag(tag){
    if (this.state.tag){
      this.removeTag(tag);
    }
    else{
      this.addTag(tag);
    }
  }

  handleRights(event) {
    this.setState({rights: event.target.value});
  }

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
