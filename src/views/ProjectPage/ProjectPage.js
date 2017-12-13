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
    <Card centered={true} link={true} header='Oemer' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
    <Card link={true} header='Kevin' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
    <Card link={true} header='Burcu' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
    <Card link={true} header='Felix' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
  </Card.Group>
</div>

//constant for form.select in edit modal
const options = [
{ key: '1', text: 'Wenn man das wählt wird Timeline blau', value: 'blau' },
{ key: '2', text: 'Wenn man das wählt wird Timeline gelb', value: 'gelb'},
]

//tabs for edit modal
const panes = [

  { menuItem: 'Aktivität', render: () => <Tab.Pane>
    <h3>Neue Aktivität</h3>
    <Form>
    <Form.Field required>
          <label>Was ist die neue Aktivität?</label>
          <input placeholder='Aktivitäts Titel' />
          <Form.Field required control={TextArea} label='Worum geht es bei dieser Aktivität' placeholder='Aktivitäts Beschreibung' />

    </Form.Field>
    <Form.Group grouped>
    <Form.Select required label='Die ist ein ' options={options} placeholder='Gender' />
    <label>Hast du dich an einem anderen Projekt orientiert?</label>
    <Form.Field required label='Nein' control='input' type='radio' name='htmlRadios' />
    <Form.Field required label='Ja' control='input' type='radio' name='htmlRadios' />
  </Form.Group>
  </Form>

</Tab.Pane> },
  { menuItem: 'Datein', render: () => <Tab.Pane>Bearbeiten</Tab.Pane> },
  { menuItem: 'Fotos', render: () => <Tab.Pane><div className="form-group">
    <label htmlFor="exampleFormControlFile1"><b>Füge fotos der Gallery hinzu</b></label>
    <br/>
    <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
  </div></Tab.Pane> },
]

//Conent of the edit modal
const editModal = <div>
  <Tab panes={panes} />
  <br /></div>

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
      <Input type="text" size='small' value={currentPageUrl} id="InputFieldContent" style={{
          width: '15em'
        }} action={<Button
        color = 'teal'
        icon = 'clipboard'
        onClick = {
          copyToClipboard
        }
        />}/>
    </div>
  </div>
</div>

//images for gallery
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

function copyToClipboard() {
  var copyText = document.getElementById('InputFieldContent');
  copyText.select();
  document.execCommand('Copy');
}

class ProjectPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      modalShare: false,
      modalMember: false,
      modalEdit: false,
      Name: "",
      Text: "",
      Karma: "",
      Data: []

    };
    this.toggleShare = this.toggleShare.bind(this);
    this.toggleMember = this.toggleMember.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);

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

  getReactions(){
    var target = ('http://edu-hub-backend.azurewebsites.net/project/getReactions/' + this.props.match.params.projectid)
    fetch(target)

      .then((results) =>{
        return results.json();

        }).then((json)=>{

          this.setState(
            {Data: json},
            function () {
              }
            )

            })
  }

  createNode(node) {
    return <TimelineComponent name={node.project_name} author={node.project_author} text={node.project_text} key={node.projectid} />;
    }


  createNodes(nodes) {

      return nodes.map(this.createNode);

    }


  //fetching the corresponding data from the server to display it on the webpage
  setData(){
    //var target = ('http://localhost:8000/user/' + localStorage.getItem('email'))                                      //dev
    var target = ('http://edu-hub-backend.azurewebsites.net/project/' + this.props.match.params.projectid)                   //prod
    fetch(target)

      .then((results) =>{
        return results.json();

        }).then((json)=>{

          this.setState({Name : json[0].project_name});
          this.setState({Text : json[0].project_text});
          this.setState({Karma : json[0].project_karma});
          this.setState({Bild : json[0].project_imagepath});

            })
  }


componentDidMount(){
  this.getReactions();
  this.setData();
}



  handleClick = () => this.setState({
    active: !this.state.active
  })

  render() {
    const {active, activeItem, Name, Text, Karma} = this.state
    return (
    <div className="animated fadeIn">
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
          <div className="projektfoto"><Image src={'http://edu-hub-backend.azurewebsites.net' + this.state.Bild} size='medium' bordered={true} circular={true}/><br/></div>
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
            <div>
              <Popup content='Siehe dir die Projektteilnehmer an' trigger={<Button circular = {
                  true
                }
                color = 'grey' icon = 'user' onClick = {
                  this.toggleMember
                } />}/>
              <Modal isOpen={this.state.modalMember} toggle={this.toggleMember} className={this.props.className} size='lg'>
                <ModalBody>
                  {memberModal}
                </ModalBody>
              </Modal>
            </div>
            <div>
              <Popup content='Füge ein Beitrag hinzu' trigger={<Button circular = {
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

          <Button fluid={true} toggle={true} active={false} onClick={this.handleClick} color={active ? 'red' :'green'} content={active? 'Austreten' : 'Beitreten'}/>

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
    </VerticalTimeline>

</div>
</div>

  )
  }
}

export default ProjectPage;
