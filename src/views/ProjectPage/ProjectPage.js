import React, {Component} from 'react';
import {render} from 'react-dom';
import Gallery from 'react-grid-gallery';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {
  Card,
  Grid,
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
  Message
} from 'semantic-ui-react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Link} from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'



const memberModal = <div className="container">
  <Card.Group itemsPerRow={3}>
    <Card centered={true} link={true} header='Oemer' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
    <Card link={true} header='Kevin' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
    <Card link={true} header='Burcu' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
    <Card link={true} header='Felix' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
  </Card.Group>
</div>

const editModal = <div>
  <div>
    <Form>
      <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Neues Event' placeholder='Neues Event'/>
    </Form>
  </div><br/>
  <div><Input icon='tag' iconPosition='left' label={{
    tag: true,
    content: 'Tag hinzufügen'
  }} labelPosition='right' placeholder='Neues Tag eingeben'/></div><br/>
  <div><Input icon='configure' iconPosition='left' label={{
    tag: true,
    content: 'Tag hinzufügen'
  }} labelPosition='right' placeholder='Ressourcen hinzufügen'/></div>
</div>

const shareModal = <div className="container">
  <div className="row justify-content-md-center">
    <Button color='facebook'>
      <Icon name='facebook'/>
      Facebook
    </Button>
    <Button color='twitter'>
      <Icon name='twitter'/>
      Twitter
    </Button>
    <Button color='google plus'>
      <Icon name='google plus'/>
      Google Plus
    </Button>
  </div>
</div>

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

class ProjectPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      modalShare: false,
      modalMember: false,
      modalEdit: false,
      activeItem: 'vertical',
      Name: "",
      Text: "",
      Karma: ""

    };
    this.toggleShare = this.toggleShare.bind(this);
    this.toggleMember = this.toggleMember.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  setData(){
    //var target = ('http://localhost:8000/user/' + localStorage.getItem('email'))                                      //dev
    var target = ('http://edu-hub-backend.azurewebsites.net/project/1')                   //prod
    fetch(target)

      .then((results) =>{
        return results.json();

        }).then((json)=>{

          this.setState({Name : json[0].name});
          this.setState({Text : json[0].text});
          this.setState({Karma : json[0].karma});
        
            })
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
 
  componentDidMount(){
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
          <div className="projektfoto"><Image src='https://i.imgur.com/uk2MB1c.jpg' size='medium' bordered={true} circular={true}/><br/></div>
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
                    <List.Header as='a'>Bauplan.pdf</List.Header>
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
    <Menu pointing secondary>
          <Menu.Item name='vertical' active={activeItem === 'vertical'} onClick={this.handleItemClick} />
          <Menu.Item name='horizontal' active={activeItem === 'horizontal'} onClick={this.handleItemClick} />
        </Menu>

       { (activeItem==='vertical') && (     
    <VerticalTimeline>
      <Link to="/dasboard">
<VerticalTimelineElement
className="vertical-timeline-element--work"

iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

animate={true}
>
<h3 className="vertical-timeline-element-title">Creative Director</h3>
<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
<p>
Creative Direction, User Experience, Visual Design, Project Management, Team Leading
</p>
</VerticalTimelineElement>
</Link>
<VerticalTimelineElement
className="vertical-timeline-element--work"

iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

animate={true}
>
<h3 className="vertical-timeline-element-title">Art Director</h3>
<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
<p>
Creative Direction, User Experience, Visual Design, SEO, Online Marketing
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"

iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
animate={true}


>
<h3 className="vertical-timeline-element-title">Web Designer</h3>
<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
<p>
User Experience, Visual Design
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"

iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

animate={true}
>
<h3 className="vertical-timeline-element-title">Web Designer</h3>
<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
<p>
User Experience, Visual Design
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--education"

iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
animate={true}

>
<h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
<h4 className="vertical-timeline-element-subtitle">Online Course</h4>
<p>
Strategy, Social Media
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--education"

iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

animate={true}
>
<h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
<h4 className="vertical-timeline-element-subtitle">Certification</h4>
<p>
Creative Direction, User Experience, Visual Design
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--education"

iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
animate={true}

>
<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
<p>
Creative Direction, Visual Design
</p>
</VerticalTimelineElement>
</VerticalTimeline>
       )}
</div>  
</div>
  
  )
  }
}

export default ProjectPage;
