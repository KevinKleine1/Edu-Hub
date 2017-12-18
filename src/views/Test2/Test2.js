import React, {Component} from 'react';
import {render} from 'react-dom';
import Gallery from 'react-grid-gallery';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {
  Card,
  Grid,
  Segment,
  Image,
  Container,
  Header,
  Icon,
  Statistic,
  Label,
  Divider,
  Button,
  Popup,
  List,
  Input,
  Form,
  TextArea,
  Message,
  Tab
} from 'semantic-ui-react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Link} from 'react-router-dom';
import TimelineComponent from '../../components/TimelineComponent/TimelineComponent';
import UserCard from '../../components/UserCard/UserCard';

class Test2 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      key: "4234234",
      joined: null,
      modalShare: false,
      modalMember: false,
      modalEdit: false,
      modalChange: false,
      modalInfo: false,
      NutzerId: "",
      Name: "",
      Text: "",
      Karma: "",
      Erstellt: "",
      Data: [],
      Members: [],
      ProjectID: ""

    };
    this.toggleShare = this.toggleShare.bind(this);
    this.toggleMember = this.toggleMember.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);

  }
  toggleShare() {
    this.setState({
      modalShare: !this.state.modalShare
    });
  }
  toggleMember() {
    this.setState({
      modalMember: !this.state.modalMember
    });
  }
  toggleEdit() {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }
  toggleChange() {
    this.setState({
      modalChange: !this.state.modalChange
    });
  }
  toggleInfo() {
    this.setState({
      modalInfo: !this.state.modalInfo
    });
  }

  getReactions() {
    var target = ('http://edu-hub-backend.azurewebsites.net/project/getReactions/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        Data: json
      }, function() {})

    })
  }

  //creates the nodes for our timeline
  createNode(node) {
    return <TimelineComponent name={node.project_name} authorname={node.surname} authorvorname={node.forename} authormail={node.email} text={node.project_text} userid={node.userid} projectid={node.projectid} key={node.projectid}/>;
  }

  createNodes(nodes) {

    return nodes.map(this.createNode);

  }

  //creates the user cards to check who in in the projcet
  createCard(card) {
    return <UserCard vorname={card.forename} nachname={card.surname} description={card.user_description} usermail={card.email} id={card.userid} key={card.userid}/>;
  }

  createCards(cards) {

    return cards.map(this.createCard);

  }

  //fetching the corresponding data from the server to display it on the webpage
  setData() {
    var target = ('http://edu-hub-backend.azurewebsites.net/project/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({Name: json[0].project_name});
      this.setState({Text: json[0].project_text});
      this.setState({Karma: json[0].project_karma});
      this.setState({Bild: json[0].project_imagepath});
      this.setState({Erstellt: json[0].project_created_at})

    })
  }
  //fetching the corresponding data from the server to display it on the webpage
  setUser() {
    var target = ('http://edu-hub-backend.azurewebsites.net/user/' + localStorage.getItem('email'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        NutzerId: json[0].userid
      }, function() {
        localStorage.setItem('userid', this.state.NutzerId);
      });
    })
  }

  //fetching the corresponding data from the server to display it on the webpage
  setMembers() {
    localStorage.setItem('projectid', this.props.match.params.projectid);
    var target = ('http://edu-hub-backend.azurewebsites.net/project/members/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        Members: json
      }, function() {})

    })
  }

  setMembership() {
    var target = ('http://edu-hub-backend.azurewebsites.net/useraddsproject/amIMember/' + localStorage.getItem('projectid') + '/' + localStorage.getItem('userid'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      if (json.response == 1) {
        this.setState({
          joined: false
        }, function() {});
      } else if (json.response == 0) {
        this.setState({
          joined: true
        }, function() {});
      }
    })
  }

  //handles the click on the toggle (join/leave) Button
  handleClick = () => this.setState({
    joined: !this.state.joined,
    function() {}
  })

  //checks if the user is a member of the project or not and the calls the correct function to either leave the project or join it
  handleJoin() {

    var joined = this.state.joined;
    if (joined) {
      this.joinProject();
    } else {
      this.leaveProject();
    }
    this.handleClick();
    this.setMembers();
    this.setState({key: Math.random()});
  }

  joinProject() {
    var user = localStorage.getItem('userid');
    var project = localStorage.getItem('projectid');

    fetch('http://edu-hub-backend.azurewebsites.net/useraddsproject/beMember', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({uhp_iduser: user, uhp_idproject: project})
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({
        key: Math.random()
      }, function() {
        this.setMembers();
        this.getReactions();
      });
    });

  }

  leaveProject() {
    var user = localStorage.getItem('userid');
    var project = localStorage.getItem('projectid');
    var form = new FormData();
    form.append('uhp_iduser', user);
    form.append('uhp_idproject', project);
    return fetch('http://edu-hub-backend.azurewebsites.net/useraddsproject/cancelMembership', {
      method: 'delete',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: form
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({
        key: Math.random()
      }, function() {
        this.setMembers();
        this.getReactions();
      });
    });

  }
  //initial mount call for all data getting functions
  componentDidMount() {
    this.getReactions();
    this.setData();
    this.setMembers();
    this.setUser();
    this.setMembership();
  }

  //updates the projectpage if the url match changes, so we can easily swap between projects without having to reload the page
  componentDidUpdate(prevProps) {
    if (this.props.match.params.projectid !== prevProps.match.params.projectid) {
      this.getReactions();
      this.setData();
      this.setMembers();
      this.setUser();
      this.setMembership();
    }
  }

  //formats date
  formatDate(date_unformatted) {
    var day = date_unformatted.substr(8, 2);
    var month = date_unformatted.substr(5, 2);
    var year = date_unformatted.substr(0, 4);
    return day + '.' + month + '.' + year;
  }

  //function to copy text from an inputfield to the clipboard
  copyToClipboard() {
    var copyText = document.getElementById('InputFieldContent');
    copyText.select();
    document.execCommand('Copy');
  }

  render() {
    const {
      joined,
      activeItem,
      Name,
      Text,
      Karma,
      Members
    } = this.state
    var org = this.state.Erstellt;
    var Erstellt = this.formatDate(org);
    //URL getter
    var currentPageUrl = window.location.href;
    var currentPageUrlShort = window.location.host + window.location.pathname;
    //Social media redirects
    var redirectToTwitter = 'https://twitter.com/intent/tweet?text=Hey,%20schau%20dir%20dieses%20Projekt%20an:%20' + currentPageUrl
    var redirectToGooglePlus = 'https://plus.google.com/share?url=' + currentPageUrl
    var redirectToFacebook = 'https://facebook.com/sharer.php?u=' + currentPageUrl
    var redirectToMail = 'mailto:?body=' + currentPageUrl

    //content of the member modal
    const memberModal = <div className="container">
      <Card.Group itemsPerRow={3}>
        <Card link={true} header='Oemer' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
        <Card link={true} header='Kevin' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
        <Card link={true} header='Burcu' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
        <Card link={true} header='Felix' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
      </Card.Group>
    </div>

    //content of info modal
    const infoModal = <div className="container">
      bla bla bla bla bla bla mehr bla bla bla bla bla bla
    </div>

    //tabs for edit modal
    const panes = [
      {
        menuItem: 'Aktivitätstyp',
        render: () => <Tab.Pane>
            <div className="row justify-content-md-center">
          <Button.Group vertical>
            <Button style={{width: "300px", height:"170px", background: "#e6f2ff"}} ><h2>Kommentar</h2></Button>
            <Button style={{width: "300px", height:"170px", background: "#b3d9ff"}}><h2>Termin</h2></Button>
            <Button style={{width: "300px", height:"170px", background: "#80bfff"}}><h2>Foto</h2></Button>
        </Button.Group>
        <Button.Group vertical>
          <Button style={{width: "300px", height:"170px", background: "#cce6ff" }}><h2>Dokument</h2></Button>
          <Button style={{width: "300px", height:"170px", background: "#99ccff" }}><h2>Ressourcen</h2></Button>
          <Button style={{width: "300px", height:"170px", background: "#66b3ff" }}><h2>Tags</h2></Button>
      </Button.Group>
    </div>
        </Tab.Pane>
      },

      {
        menuItem: 'Kommentar',
        render: () => <Tab.Pane>
            <Form>
              <Form.Field>
                <Form.Group><Form.Input placeholder='Titel' style={{
                    width: "600px"
                  }}/><br/></Form.Group>
                <Form.Field control={TextArea} label='Beschreibung' placeholder='Beschreibung'/>
              </Form.Field>
            </Form>
            <div className="row justify-content-md-center">
            <Button animated={true} color='teal' style={{
                width: "130px"
              }}>
              <Button.Content visible={true}>Absenden</Button.Content>
              <Button.Content hidden={true}>
                <Icon name='check'/>
              </Button.Content>
            </Button>
          </div>
          </Tab.Pane>
      },
      {
        menuItem: 'Dokument',
        render: () => <Tab.Pane>
            <Form>
              <Form.Field>
                <Form.Group><Form.Input placeholder='Titel' style={{
                    width: "600px"
                  }}/><br/></Form.Group>
                <Form.Field control={TextArea} label='Beschreibung' placeholder='Beschreibung'/>
              </Form.Field>
            </Form>
            <div className="row justify-content-md-center">
            <Button animated={true} color='teal' style={{
                width: "130px"
              }}>
              <Button.Content visible={true}>Absenden</Button.Content>
              <Button.Content hidden={true}>
                <Icon name='check'/>
              </Button.Content>
            </Button>
          </div>
          </Tab.Pane>
      },
      {
        menuItem: 'Termin',
        render: () => <Tab.Pane>

            <Form>
              <Form.Field>
                <Form.Group><Form.Input placeholder='Titel' style={{
                    width: "600px"
                  }}/><br/></Form.Group>
                <Form.Field control={TextArea} label='Beschreibung' placeholder='Beschreibung'/>
              </Form.Field>
            </Form>
            <div className="row justify-content-md-center">
            <Button animated={true} color='teal' style={{
                width: "130px"
              }}>
              <Button.Content visible={true}>Absenden</Button.Content>
              <Button.Content hidden={true}>
                <Icon name='check'/>
              </Button.Content>
            </Button>
          </div>
          </Tab.Pane>
      },
      {
        menuItem: 'Ressourcen',
        render: () => <Tab.Pane>

            <Form>
              <Form.Field>
                <Form.Group><Form.Input placeholder='Titel' style={{
                    width: "600px"
                  }}/><br/></Form.Group>
                <Form.Field control={TextArea} label='Beschreibung' placeholder='Beschreibung'/>
              </Form.Field>
            </Form>
            <div className="row justify-content-md-center">
            <Button animated={true} color='teal' style={{
                width: "130px"
              }}>
              <Button.Content visible={true}>Absenden</Button.Content>
              <Button.Content hidden={true}>
                <Icon name='check'/>
              </Button.Content>
            </Button>
          </div>
          </Tab.Pane>
      },
      {
        menuItem: 'Foto',
        render: () => <Tab.Pane>

            <Form>
              <Form.Field>
                <Form.Group><Form.Input placeholder='Titel' style={{
                    width: "600px"
                  }}/><br/></Form.Group>
                <Form.Field control={TextArea} label='Beschreibung' placeholder='Beschreibung'/>
              </Form.Field>
            </Form>
            <div className="row justify-content-md-center">
            <Button animated={true} color='teal' style={{
                width: "130px"
              }}>
              <Button.Content visible={true}>Absenden</Button.Content>
              <Button.Content hidden={true}>
                <Icon name='check'/>
              </Button.Content>
            </Button>
          </div>
          </Tab.Pane>
      },
      {
        menuItem: 'Tags',
        render: () => <Tab.Pane>

            <Form>
              <Form.Field>
                <Form.Group><Form.Input placeholder='Titel' style={{
                    width: "600px"
                  }}/><br/></Form.Group>
                <Form.Field control={TextArea} label='Beschreibung' placeholder='Beschreibung'/>
              </Form.Field>
            </Form>
            <div className="row justify-content-md-center">
            <Button animated={true} color='teal' style={{
                width: "130px"
              }}>
              <Button.Content visible={true}>Absenden</Button.Content>
              <Button.Content hidden={true}>
                <Icon name='check'/>
              </Button.Content>
            </Button>
          </div>
          </Tab.Pane>
      }
    ]

    const tabs = [
      {
        menuItem: 'Bearbeiten',
        render: () => <Tab.Pane>
        <Form>
          <h3> Projektdaten Aktualisieren </h3>
          <Form.Group widths='equal'>
            <Form.Input placeholder='Titel' icon='user' iconPosition='left'/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.TextArea rows={2} placeholder='Projektbeschreibung'/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.TextArea rows={2} placeholder='Zielerreichung'/>
          </Form.Group>
          <label>
            <b>Titelbild aktualisieren</b>
          </label>
          <input type="file" style={{
              width: "400px"
            }} className="form-control-file" id="exampleFormControlFile1"></input>
          <div className="form-group"><br/>
            <Form.Field style={{
                width: "200px"
              }} label='Privatsphäre' control='select'>
              <option value='p'>privat</option>
              <option value='o'>&ouml;ffentlich</option>
            </Form.Field>
          </div>
          <div className="row justify-content-md-center">
          <Button animated={true} color='teal' style={{
              width: "130px"
            }}>
            <Button.Content visible={true}>Speichern</Button.Content>
            <Button.Content hidden={true}>
              <Icon name='check'/>
            </Button.Content>
          </Button>
        </div>

        </Form>
          </Tab.Pane>
      }
    ]

    //Conent of the edit modal
    const editModal = <div>
      <Tab panes={panes}/>
      <br/></div>

      const changeModal = <div>
        <Tab panes={tabs}/>
        <br/></div>

    //content of the share modal
    const shareModal = <div className="container">
      <div className="row justify-content-md-center">
        <h4>Teile dieses Projekt auf deiner lieblings Plattform</h4>
        <div>
          <br/>
          <Button color='facebook' href={redirectToFacebook} target="_blank">
            <Icon name='facebook'/>
            Facebook
          </Button>
          <Button color='twitter' href={redirectToTwitter}>
            <Icon name='twitter'/>
            Twitter
          </Button>
          <Button color='google plus' href={redirectToGooglePlus} target="_blank">
            <Icon name='google plus'/>
            Google Plus
          </Button>
          <Button icon='mail' color='grey' href={redirectToMail}/>
        </div>
        <div>
          <br/>
          <Input type="text" size='small' value={currentPageUrlShort} id="InputFieldContent" style={{
              width: '15em'
            }} action={<Button
            color = 'teal'
            icon = 'clipboard'
            onClick = {
              this.copyToClipboard
            }
            />}/>
        </div>
      </div>
    </div>


    //images for gallery (need to be generated dynamicly later)
    const IMAGES = [
      {
        src: "https://i.imgur.com/ockpsKj.jpg",
        thumbnail: "https://i.imgur.com/ockpsKj.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      }, {
        src: "https://i.imgur.com/KnnT5LQ.jpg",
        thumbnail: "https://i.imgur.com/KnnT5LQ.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      }, {
        src: "https://i.imgur.com/zGHOb6A.jpg",
        thumbnail: "https://i.imgur.com/zGHOb6A.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      }, {
        src: "https://i.imgur.com/ockpsKj.jpg",
        thumbnail: "https://i.imgur.com/ockpsKj.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      }, {
        src: "https://i.imgur.com/KnnT5LQ.jpg",
        thumbnail: "https://i.imgur.com/KnnT5LQ.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      }, {
        src: "https://i.imgur.com/zGHOb6A.jpg",
        thumbnail: "https://i.imgur.com/zGHOb6A.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      }
    ]

    const colors = [
      'red',
      'orange',
      'yellow',
      'olive',
      'green',
      'teal',
      'blue',
      'violet',
      'purple',
      'pink',
      'brown',
      'grey',
      'black'
    ]
    return (<div className="animated fadeIn">
      <Grid columns={2} divided={true} colums="equal">
        <Grid.Row stretched={true}>
          <Grid.Column width={13}>
            <div className="projektname">
              <Container fluid={true} text={true}>
                <Divider horizontal={true}>
                  <Header as='h1'>{Name}</Header>
                </Divider>

                <p>{Text}</p>

              </Container>

            </div>
            <div className="bilder">
              <Divider horizontal={true}>
                <h3>Fotos</h3>
              </Divider>
              <Gallery images={IMAGES} maxRows={1} imageCountSeparator=' von ' showImageCount={true} showLightboxThumbnails={true} backdropClosesModal={true} showCloseButton={false} enableImageSelection={true}/>
            </div>

          </Grid.Column>
          <Grid.Column width={3}>
            <br/>
            <div className="projektfoto"><Image src={'http://edu-hub-backend.azurewebsites.net/' + this.state.Bild} size='medium' bordered={true} circular={true}/><br/></div>
            <div className="row justify-content-md-center">
              <div>
                <Popup content='Füge dieses Projekt deinen Favoriten hinzu' trigger={<Button circular = {
                    true
                  }
                  color = 'grey' icon = 'bookmark' />}/>
              </div>
              <div>
                <Popup content='Teile dieses Projekt mit anderen' trigger={<Button circular = {
                    true
                  }
                  color = 'grey' icon = 'share alternate square' onClick = {
                    this.toggleShare
                  } />}/>
                <Modal isOpen={this.state.modalShare} toggle={this.toggleShare} className={this.props.className}>
                  <ModalBody>
                    {shareModal}
                  </ModalBody>
                </Modal>
              </div>
              <div key={this.state.key}>
                <Popup content='Siehe dir die Projektteilnehmer an' trigger={<Button circular = {
                    true
                  }
                  color = 'grey' icon = 'user' onClick = {
                    this.toggleMember
                  } />}/>
                <Modal isOpen={this.state.modalMember} toggle={this.toggleMember} className={this.props.className} size='lg'>
                  <ModalBody>
                    <div className="container">
                      <Card.Group itemsPerRow={3}>
                        {this.createCards(Members)}
                      </Card.Group>
                    </div>
                  </ModalBody>
                </Modal>
              </div>
              <div>
                <Popup content='Füge einen Beitrag hinzu' trigger={<Button circular = {
                    true
                  }
                  color = 'grey' icon = 'edit' onClick = {
                    this.toggleEdit
                  } />}/>
                <Modal isOpen={this.state.modalEdit} toggle={this.toggleEdit} className={this.props.className} size='lg'>
                  <ModalBody>
                    <div fluid="fluid">
                      {editModal}
                    </div>
                  </ModalBody>
                </Modal>
              </div>
              <div>
                <Popup content='Bearbeite dein Projekt' trigger={<Button circular = {
                    true
                  }
                  color = 'grey' icon = 'setting' onClick = {
                    this.toggleChange
                  } />}/>
                <Modal isOpen={this.state.modalChange} toggle={this.toggleChange} className={this.props.className} size='lg'>
                  <ModalBody>
                    <div fluid="fluid">
                      {changeModal}
                    </div>
                  </ModalBody>
                </Modal>
              </div>

              <div>
                <Popup content='Informationen zu diesem Projekt' trigger={<Button circular = {
                    true
                  }
                  color = 'grey' icon = 'info' onClick = {
                    this.toggleInfo
                  } />}/>
                <Modal isOpen={this.state.modalInfo} toggle={this.toggleInfo} className={this.props.className} size='lg'>
                  <ModalBody>
                    <div fluid="fluid">
                      {infoModal}
                    </div>
                  </ModalBody>
                </Modal>
              </div>
              <br/>
              <div className="container">
                <div className="row justify-content-md-center">
                  <br/>
                  <Statistic fluid="true" color='purple' size='tiny' horizontal={true}>
                    <Statistic.Value>
                      <Icon name='diamond'/> {Karma}
                    </Statistic.Value>
                    <Statistic.Label>Karma</Statistic.Label>
                  </Statistic>
                </div>
              </div>
            </div>
            <br/>

            <Button fluid={true} toggle={true} onClick={this.handleJoin.bind(this)} color={joined
                ? 'green'
                : 'red'} content={joined
                ? 'Beitreten'
                : 'Austreten'}/>

            <div className="tags">

              <div className="Tags">
                <Divider horizontal={true}>
                  <h3>Tags</h3>
                </Divider>

                <Label.Group size='medium' color='teal'>
                  <Label>Schüler</Label>
                  <Label>Selbstständigkeit</Label>
                  <Label>Schule</Label>
                  <Label>Bibliothek</Label>
                  <Label>...</Label>
                </Label.Group>
              </div>
              <br/>
              <div className="Ressourcen">
                <Divider horizontal={true}>
                  <h3>Ressourcen</h3>
                </Divider>

                <Label.Group size='medium' color='blue'>
                  <Label>Aufsichts Person</Label>
                  <Label>Tische</Label>
                  <Label>Stühle</Label>
                  <Label>Stromversorgung</Label>
                  <Label>Super kräfte</Label>
                  <Label>...</Label>
                </Label.Group>
              </div>
              <br/>
              <div>
                <Divider horizontal={true}>
                  <h3>Anhang</h3>
                </Divider>
                <List divided={true} relaxed={true}>
                  <List.Item>
                    <List.Icon name='file outline' size='large' verticalAlign='middle'/>
                    <List.Content>
                      <List.Header as='a'>zeitplan.pdf</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='file outline' size='large' verticalAlign='middle'/>
                    <List.Content>
                      <List.Header as='a'>Vorlage.pdf</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="timeline">

        <VerticalTimeline>
          {this.createNodes(this.state.Data)}
          <VerticalTimelineElement className="vertical-timeline-element--education" iconStyle={{
              background: 'rgb(233, 30, 99)',
              color: '#fff'
            }} animate={true}>
            <h3 className="vertical-timeline-element-title">Projekt wurde erstellt</h3>

            <h4 className="vertical-timeline-element-subtitle">Insert Creator Here!!</h4>

            <p>
              Das Projekt wurde am {Erstellt}
              erstellt.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
    </div>)
  }
}

export default Test2;
