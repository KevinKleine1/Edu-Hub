import React, {Component} from 'react';
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
  Message
} from 'semantic-ui-react';

var karma = 800;
var header = 'Header';
var descirption = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi';
const member = <div className="container">
  <div className="row justify-content-md-center">
    <Card.Group>
      <Card link="link" header='Oemer' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
      <Card link="link" header='Kevin' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
      <Card link="link" header='Burcu' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
      <Card link="link" header='Felix' meta='Scientist' description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family'].join('')}/>
    </Card.Group>
  </div>
</div>;

const edit = <div>
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


const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';
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
      modalEdit: false
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

  state = {}

  handleClick = () => this.setState({
    active: !this.state.active
  })

  render() {
    const {active} = this.state
    return (<Grid columns={2} divided="divided" colums="equal">
      <Grid.Row stretched="true">
        <Grid.Column width={13}>
          <div className="projektname">
            <Container fluid="true" text="true">
              <Divider horizontal="horizontal">
                <Header as='h1'>{header}</Header>
              </Divider>

              <p>{descirption}</p>

            </Container>

          </div>
          <div className="bilder">
            <Divider horizontal="horizontal">
              <h3>Fotos</h3>
            </Divider>
            <Image.Group size='small'>
              <div>
                <Image src={'https://i.imgur.com/KnnT5LQ.jpg'}/>
                <Image src={'https://i.imgur.com/ockpsKj.jpg'}/>
                <Image src={'https://i.imgur.com/zGHOb6A.jpg'}/>
              </div>
            </Image.Group>
          </div>

          <div className="timeline">Timeline
          </div>

        </Grid.Column>
        <Grid.Column width={3}>
          <br/>
          <div className="projektfoto"><Image src='https://i.imgur.com/uk2MB1c.jpg' size='medium' bordered="true" circular="circular"/><br/></div>
          <div className="row justify-content-md-center">
            <div>
              <Popup content='Füge dieses Projekt deinen Favoriten hinzu' trigger={<Button circular = "circular" color = 'grey' icon = 'bookmark' />}/>
            </div>
            <div>
              <Popup content='Teile dieses Projekt mit anderen' trigger={<Button circular = "circular" color = 'grey' icon = 'share alternate square' onClick = {
                  this.toggleShare
                } />}/>
              <Modal isOpen={this.state.modalShare} toggle={this.toggleShare} className={this.props.className}>
                <ModalBody>
                  test
                </ModalBody>
              </Modal>
            </div>
            <div>
              <Popup content='Siehe dir die Projektteilnehmer an' trigger={<Button circular = "circular" color = 'grey' icon = 'user' onClick = {
                  this.toggleMember
                } />}/>
              <Modal isOpen={this.state.modalMember} toggle={this.toggleMember} className={this.props.className} size='lg'>
                <ModalBody>
                  {member}
                </ModalBody>
              </Modal>
            </div>
            <div>
              <Popup content='Füge ein Beitrag hinzu' trigger={<Button circular = "circular" color = 'grey' icon = 'edit' onClick = {
                  this.toggleEdit
                } />}/>
              <Modal isOpen={this.state.modalEdit} toggle={this.toggleEdit} className={this.props.className} size='lg'>
                <ModalBody>
                  {edit}
                </ModalBody>
              </Modal>
            </div>
            <br/>
            <div className="container">
              <div className="row justify-content-md-center">
                <br/>
                <Statistic fluid="fluid" color='purple' size='tiny' horizontal="horizontal">
                  <Statistic.Value>
                    <Icon name='diamond'/> {karma}
                  </Statistic.Value>
                  <Statistic.Label>Karma</Statistic.Label>
                </Statistic>
              </div>
            </div>
          </div>
          <br/>

          <Button fluid toggle="toggle" active={active} onClick={this.handleClick} color={active ? 'green' : 'red'} content={active ? 'Beitreten' : 'Austreten'} />

          <div className="tags">

            <div className="Tags">
              <Divider horizontal="horizontal">
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
              <Divider horizontal="horizontal">
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
              <Divider horizontal="horizontal">
                <h3>Anhang</h3>
              </Divider>
              <List divided="divided" relaxed="relaxed">
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
    </Grid>)
  }
}

export default ProjectPage;