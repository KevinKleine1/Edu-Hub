import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
  Tab,
  Menu,
  Table,
  Checkbox
} from 'semantic-ui-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from 'react-router-dom';
import TimelineComponent from '../../components/TimelineComponent/TimelineComponent';
import UserCard from '../../components/UserCard/UserCard';
import Tags from '../../components/Tags/Tags';
import Ressources from '../../components/Ressources/Ressources';
import history from '../../history';
import Anhang from '../../components/Anhang/Anhang';
import Usercomponents from '../../components/Usercomponents/Usercomponents';

class ProjectPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      key: 23,
      joined: null,
      modalShare: false,
      modalMember: false,
      modalEdit: false,
      modalChange: false,
      modalRights: false,
      NutzerId: "",
      Name: "",
      Text: "",
      Karma: "",
      Erstellt: "",
      Data: [],
      Members: [],
      ProjectID: "",
      title: "",
      description: "",
      Laden: false,
      TagData: [],
      ResourceData: [],
      tag: "",
      resource: "",
      Commenttitle: "",
      Commenttext: "",
      DocumentData: [],
      file: '',
      Documenttitle: "",
      Documenttext: "",
      ImageData: [],
      Imagetitle: "",
      Imagetext: "",
      Termintitle: "",
      Termintext: "",
      Termindate: "",
      activeItem: "Alle",
      UploadData: [],
      showPics: false,
      isAuthor: false,
      isEditor: false,
      JoinData: [],
      CommentData: [],
      TerminData: []


    };
    this.toggleShare = this.toggleShare.bind(this);
    this.toggleMember = this.toggleMember.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
    this.toggleRights = this.toggleRights.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.handleProject = this.handleProject.bind(this);
    this.addTag = this.addTag.bind(this);
    this.addResource = this.addResource.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.addDocument = this.addDocument.bind(this);
    this.addImage = this.addImage.bind(this);
    this.addTermin = this.addTermin.bind(this);
    this.getImages = this.getImages.bind(this);
    this.setMembers = this.setMembers.bind(this);

  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
  toggleRights() {
    this.setState({
      modalRights: !this.state.modalRights
    });
  }

  getReactions() {
    var target = ('http://backend-edu.azurewebsites.net/project/getReactions/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        Data: json
      }, function () {
        this.getUploadReaction()
        this.getJoinReaction()
        this.getCommentReaction()
        this.getDateReaction()
      })

    })
  }

  getUploadReaction() {
    var target = ('http://backend-edu.azurewebsites.net/project/filter/documentsimage/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        UploadData: json
      }, function () { })

    })
  }
  getJoinReaction() {
    var target = ('http://backend-edu.azurewebsites.net/project/filter/memberevents/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        JoinData: json
      }, function () { })

    })
  }
  getCommentReaction() {
    var target = ('http://backend-edu.azurewebsites.net/project/filter/comments/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        CommentData: json
      }, function () { })

    })
  }
  getDateReaction() {
    var target = ('http://backend-edu.azurewebsites.net/project/termin/documentsimage/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        TerminData: json
      }, function () { })

    })
  }



  createTag(tag) {
    return <Tags Tag={tag.tag_name} key={tag.tagid} />
  }

  createTags(tags) {

    return tags.map(this.createTag);
  }

  getTags() {
    var target = ('http://backend-edu.azurewebsites.net/tag/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        TagData: json
      }, function () { })

    })
  }

  addTag() {
    this.setState({ Laden: true });
    const Tag = this.state.tag;
    var forma = new FormData();
    forma.append('pht_idproject', this.props.match.params.projectid);
    forma.append('tag_name', Tag);

    fetch('http://backend-edu.azurewebsites.net/addtag', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({ key: Math.random() }, function () {
        this.getTags();
        this.setState({ Laden: false });
        this.toggleEdit();
      });
    });

  }

  getDocuments() {
    var target = ('http://backend-edu.azurewebsites.net/project/documents/get/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        DocumentData: json
      }, function () { })

    })
  }

  createDocument(document) {
    return <Anhang name={document.project_name} doclink={document.document_documentpath} key={document.document_documentpath} />
  }

  createDocuments(documents) {

    return documents.map(this.createDocument);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({ file: file });
    }

    reader.readAsDataURL(file)
  }

  addDocument() {
    this.setState({ Laden: true });
    var forma = new FormData();
    forma.append('fileName', "Document");
    forma.append('foo', this.state.file);
    forma.append('project_author', localStorage.getItem('userid'));
    forma.append('Project_projectid', this.props.match.params.projectid);
    forma.append('project_name', this.state.Documenttitle);
    forma.append('project_text', this.state.Documenttext);

    fetch('http://backend-edu.azurewebsites.net/project/addDocument', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({ key: Math.random() }, function () {
        this.getDocuments();
        this.getReactions();
        this.setState({ Laden: false });
        this.toggleEdit();
      });
    });

  }

  getResources() {
    var target = ('http://backend-edu.azurewebsites.net/resource/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        ResourceData: json
      }, function () { })

    })
  }

  createResource(resource) {
    return <Ressources Resource={resource.resource_name} key={resource.resourceid} />
  }

  createResources(resources) {

    return resources.map(this.createResource);
  }

  addResource() {
    this.setState({ Laden: true });
    const Resource = this.state.resource;
    var forma = new FormData();
    forma.append('phr_idproject', this.props.match.params.projectid);
    forma.append('resource_name', Resource);

    fetch('http://backend-edu.azurewebsites.net/addresource', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({ key: Math.random() }, function () {
        this.getResources();
        this.setState({ Laden: false });
        this.toggleEdit();
      });
    });

  }

  addComment() {
    this.setState({ Laden: true });
    var forma = new FormData();
    forma.append('Project_projectid', this.props.match.params.projectid);
    forma.append('project_name', this.state.Commenttitle);
    forma.append('project_text', this.state.Commenttext);
    forma.append('project_author', localStorage.getItem('userid'));

    fetch('http://backend-edu.azurewebsites.net/project/addComment', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({ key: Math.random() }, function () {
        this.getReactions();
        this.setState({ Commenttext: "" });
        this.setState({ Commenttitle: "" });
        this.setState({ Laden: false });
        this.toggleEdit();
      });
    });
  }

  deleteProject() {
    this.setState({ Laden: true });
    var forma = new FormData();
    forma.append('projectid', this.props.match.params.projectid);

    fetch('http://backend-edu.azurewebsites.net/project/delete', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({ key: Math.random() }, function () {
        this.setState({ Laden: false });
        history.push('/dashboard');
      });
    });
  }

  //creates the nodes for our timeline
  createNode(node) {
    return <TimelineComponent type={node.project_projecttype} createDate={node.project_created_at} updateDate={node.project_updated_at} name={node.project_name} authorname={node.surname} authorvorname={node.forename} authormail={node.email} text={node.project_text} userid={node.userid} projectid={node.projectid} key={node.projectid} />;
  }

  createNodes(nodes) {

    return nodes.map(this.createNode);

  }

  //creates the user cards to check who in in the projcet
  createCard(card) {
    return <UserCard vorname={card.forename} nachname={card.surname} description={card.user_description} usermail={card.email} id={card.userid} key={card.userid} />;
  }

  createCards(cards) {

    return cards.map(this.createCard, this);

  }

  createUser(user) {
    if (user.uhp_userrole === "member"){
      var rights = false;
      var author = false;
    }
    else if (user.uhp_userrole === "editor"){
      var rights = true;
      var author = false;
    }
    else if (user.uhp_userrole === "author"){
      var author = true;
      var rights = true;
    }
  return <Usercomponents vorname={user.forename} update={() => this.setMembers()} new={() => this.getReactions()}  author={author} rights={rights} project={user.uhp_idproject} bild={user.profilpic} id={user.userid} key={user.userid} />;
  }

  createUsers(users) {

    return users.map(this.createUser, this);

  }

  //fetching the corresponding data from the server to display it on the webpage
  setData() {
    var target = ('http://backend-edu.azurewebsites.net/project/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({ Name: json[0].project_name });
      this.setState({ Text: json[0].project_text });
      this.setState({ Karma: json[0].project_karma });
      this.setState({ Bild: json[0].project_imagepath });
      this.setState({ Erstellt: json[0].project_created_at })

    })
  }
  //fetching the corresponding data from the server to display it on the webpage
  setUser() {
    var target = ('http://backend-edu.azurewebsites.net/user/' + localStorage.getItem('email'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        NutzerId: json[0].userid
      }, function () {
        localStorage.setItem('userid', this.state.NutzerId);
      });
    })
  }

  setEditor(){
    var target = ('http://backend-edu.azurewebsites.net/governance/amIEditor/' + localStorage.getItem('projectid') + '/' + localStorage.getItem('userid'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      if (json.response == 1) {
        this.setState({
          isEditor: true,
          joined: false
        }, function () { });
      } else if (json.response == 0) {
        this.setState({
          isEditor: false,
          joined: true
        }, function () { });
      }
    })
  }

  getImages() {

    var target = ('http://backend-edu.azurewebsites.net/project/images/get/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {
      if (json.length === 0) {
        this.setState({ showPics: false });
      }
      else {
        this.setState({ showPics: true });
      }
      this.setState({
        ImageData: json

      }, function () { })

    })
  }

  addImage() {
    this.setState({ Laden: true });
    var forma = new FormData();
    forma.append('fileName', "Bild");
    forma.append('foo', this.state.file);
    forma.append('project_author', localStorage.getItem('userid'));
    forma.append('Project_projectid', this.props.match.params.projectid);
    forma.append('project_name', this.state.Imagetitle);
    forma.append('project_text', this.state.Imagetext);

    fetch('http://backend-edu.azurewebsites.net/project/addImage', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({ key: Math.random() }, function () {
        this.getImages();
        this.setState({ Laden: false });
        this.toggleEdit();
      });
    });

  }

  changeTitle() {
    const title = this.state.title;
    var forma = new FormData();
    forma.append('userid', localStorage.getItem('userid'));
    forma.append('projectid', localStorage.getItem('projectid'));
    forma.append('changeid', 1);
    forma.append('newtitle', title);
    fetch('http://backend-edu.azurewebsites.net/project/update', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({ key: Math.random() }, function () {
        this.getReactions();
        this.setData();
        this.setState({ Laden: false });
        this.toggleChange();
      });
    });

  }

  changeDescription() {
    const description = this.state.description;
    var forma = new FormData();
    forma.append('userid', localStorage.getItem('userid'));
    forma.append('projectid', localStorage.getItem('projectid'));
    forma.append('changeid', 2);
    forma.append('newdescription', description);
    fetch('http://backend-edu.azurewebsites.net/project/update', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({ key: Math.random() }, function () {
        this.setData();
        this.getReactions();
        this.setState({ Laden: false });
        this.toggleChange();
      });
    });

  }

  changePicture() {
    var forme = new FormData();
    forme.append('foo', this.state.file);
    forme.append('email', localStorage.getItem('email'));

    fetch('http://backend-edu.azurewebsites.net/user/changepicture', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    })
  }

  //fetching the corresponding data from the server to display it on the webpage
  setMembers() {
    localStorage.setItem('projectid', this.props.match.params.projectid);
    var target = ('http://backend-edu.azurewebsites.net/project/members/' + this.props.match.params.projectid)
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        Members: json
      }, function () { })

    })
  }

  setMembership() {
    var target = ('http://backend-edu.azurewebsites.net/useraddsproject/amIMember/' + localStorage.getItem('projectid') + '/' + localStorage.getItem('userid'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      if (json.response == 1) {
        this.setState({
          joined: false
        }, function () { });
      } else if (json.response == 0) {
        this.setState({
          joined: true
        }, function () { });
      }
    })
  }

  setAuthor() {
    var target = ('http://backend-edu.azurewebsites.net/governance/amIAuthor/' + localStorage.getItem('projectid') + '/' + localStorage.getItem('userid'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      if (json.response == 1) {
        this.setState({
          isAuthor: true
        }, function () { });
      } else if (json.response == 0) {
        this.setState({
          isAuthor: false
        }, function () { });
      }
    })
   
  }

  handleProject() {
    this.setState({ Laden: true });
    if (this.state.title.length > 0) {
      this.changeTitle();
    }
    if (this.state.description.length > 0) {
      this.changeDescription();
    }
    this.setState({
      title: "",
      description: ""
    })
  }

  //handles the click on the toggle (join/leave) Button
  handleClick = () => this.setState({
    joined: !this.state.joined,
    function() { }
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
  }

  joinProject() {
    var user = localStorage.getItem('userid');
    var project = localStorage.getItem('projectid');

    fetch('http://backend-edu.azurewebsites.net/useraddsproject/beMember', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ uhp_iduser: user, uhp_idproject: project })
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({
        key: Math.random()
      }, function () {
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
    return fetch('http://backend-edu.azurewebsites.net/useraddsproject/cancelMembership', {
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
      }, function () {
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
    this.getTags();
    this.getResources();
    this.getDocuments();
    this.getImages();
    this.setAuthor();
    this.setEditor();
  }

  //updates the projectpage if the url match changes, so we can easily swap between projects without having to reload the page
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.projectid !== prevProps.match.params.projectid) {
      this.getReactions();
      this.setData();
      this.setMembers();
      this.setUser();
      this.setMembership();
      this.getTags();
      this.getResources();
      this.getDocuments();
      this.getImages();
      this.setAuthor();
      this.setEditor();
    }

  }

  //formats date
  formatDate(date_unformatted) {
    var day = date_unformatted.substr(8, 2);
    var month = date_unformatted.substr(5, 2);
    var year = date_unformatted.substr(0, 4);
    return day + '.' + month + '.' + year + '';
  }

  //function to copy text from an inputfield to the clipboard
  copyToClipboard() {
    var copyText = document.getElementById('InputFieldContent');
    copyText.select();
    document.execCommand('Copy');
  }

  addTermin() {
    this.setState({ Laden: true });
    var forma = new FormData();
    forma.append('project_author', localStorage.getItem('userid'));
    forma.append('Project_projectid', this.props.match.params.projectid);
    forma.append('project_name', this.state.Termintitle);
    forma.append('project_text', this.state.Termintext);
    forma.append('project_termin', this.state.Termindate);

    fetch('http://backend-edu.azurewebsites.net/project/addTermin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*'
      },
      body: forma
    }).then((response) => {
      return response.json();

    }).then((json) => {
      this.setState({ key: Math.random() }, function () {
        this.getReactions();
        this.setState({ Laden: false });
        this.toggleEdit();
      });
    });
  }


  render() {
    const {
      joined,
      activeItem,
      Name,
      Text,
      Karma,
      Members,
      TagData,
      ResourceData,
      showPics,
      isAuthor,
      isEditor
    } = this.state
    var org = this.state.Erstellt;
    var Erstellt = this.formatDate(org);
    //URL getter
    var currentPageUrl = window.location.href;
    var currentPageUrlShort = window.location.host + window.location.pathname;
    //Social media redirects
    var redirectToTwitter = 'https://twitter.com/intent/tweet?text=Hey,%20schau%20dir%20dieses%20Projekt%20an:%20' + currentPageUrl
    var redirectToGooglePlus = 'https://plus.google.com/share?url=' + currentPageUrl
    var redirectToFacebook = 'https://facebook.com/sharer.php?url=' + currentPageUrl
    var redirectToMail = 'mailto:?body=' + currentPageUrl

    //content of rights modal
    const rightsModal = <div className="container">
      <List divided={true}>
        {this.createUsers(Members)}
      </List>
    </div>

    //tabs for edit modal
    const panes = [

      {
        menuItem: 'Kommentar',
        render: () => <Tab.Pane>
          <Form>
            <Form.Field>
              <Form.Group><Form.Input onChange={this.handleChange} name="Commenttitle" value={this.state.Commenttitle} placeholder='Titel' style={{
                width: "600px"
              }} /><br /></Form.Group>
              <Form.Field control={TextArea} onChange={this.handleChange} name="Commenttext" value={this.state.Commenttext} placeholder='Kommentar einfügen' />
            </Form.Field>
            <br />
          </Form>
          <div className="row justify-content-md-center">
            <Button loading={this.state.Laden} onClick={this.addComment} animated={true} color='teal' style={{
              width: "130px"
            }}>
              <Button.Content visible={true}>Absenden</Button.Content>
              <Button.Content hidden={true}>
                <Icon name='check' />
              </Button.Content>
            </Button>
          </div>
        </Tab.Pane>
      }, {
        menuItem: 'Dokument',
        render: () => <Tab.Pane>
          <Form>
            <Form.Field>
              <Form.Group><Form.Input name="Documenttitle" onChange={this.handleChange} value={this.state.Documenttitle} placeholder='Titel' style={{
                width: "600px"
              }} /><br /></Form.Group>
              <Form.Field control={TextArea} name="Documenttext" onChange={this.handleChange} value={this.state.Documenttext} placeholder='Beschreibung' />
              <Form.Field>
                <label>
                  Dokument hinzufügen<Popup trigger={<Icon name='question' color='grey' />} wide='very' content='Nur .pdf Format erlaubt' />
                </label>
                <input type="file" name='foo' id='foo' onChange={(e) => this._handleImageChange(e)} style={{
                  width: "400px"
                }} className="form-control-file" id="exampleFormControlFile1"></input>
              </Form.Field>
            </Form.Field>
            <br />
          </Form>
          <div className="row justify-content-md-center">
            <Button loading={this.state.Laden} onClick={this.addDocument} animated={true} color='teal' style={{
              width: "130px"
            }}>
              <Button.Content visible={true}>Absenden</Button.Content>
              <Button.Content hidden={true}>
                <Icon name='check' />
              </Button.Content>
            </Button>
          </div>
        </Tab.Pane>
      }, {
        menuItem: 'Termin',
        render: () => <Tab.Pane>

          <Form>
            <Form.Field>
              <Form.Group><Form.Input name="Termintitle" value={this.state.Termintitle} onChange={this.handleChange} placeholder='Titel' style={{
                width: "600px"
              }} /><br /></Form.Group>
              <Form.Field control={TextArea} name="Termintext" value={this.state.Termintext} onChange={this.handleChange} placeholder='Beschreibung' />
              <Form.Field>
                <label>Termin</label><Form.Input style={{
                  width: "200px"
                }} type='date' placeholder='Datum' name="Termindate" onChange={this.handleChange} icon='calendar' iconPosition='left' /></Form.Field>
            </Form.Field><br />
          </Form>
          <div className="row justify-content-md-center">
            <Button loading={this.state.Laden} onClick={this.addTermin} animated={true} color='teal' style={{
              width: "130px"
            }}>
              <Button.Content visible={true}>Absenden</Button.Content>
              <Button.Content hidden={true}>
                <Icon name='check' />
              </Button.Content>
            </Button>
          </div>
        </Tab.Pane>
      }, {
        menuItem: 'Foto',
        render: () => <Tab.Pane>

          <Form>
            <Form.Field>
              <Form.Group><Form.Input name="Imagetitle" onChange={this.handleChange} value={this.state.Imagetitle} placeholder='Titel' style={{
                width: "600px"
              }} /><br /></Form.Group>
              <Form.Field control={TextArea} name="Imagetext" onChange={this.handleChange} value={this.state.Imagetext} placeholder='Beschreibung' />
              <label>
                Foto hinzufügen
                </label>
              <input type="file" onChange={(e) => this._handleImageChange(e)} style={{
                width: "400px"
              }} className="form-control-file" id="exampleFormControlFile1"></input>
            </Form.Field>
            <br />
          </Form>
          <div className="row justify-content-md-center">
            <Button loading={this.state.Laden} onClick={this.addImage} animated={true} color='teal' style={{
              width: "130px"
            }}>
              <Button.Content visible={true}>Absenden</Button.Content>
              <Button.Content hidden={true}>
                <Icon name='check' />
              </Button.Content>
            </Button>
          </div>
        </Tab.Pane>
      }, {
        menuItem: 'Ressourcen',
        render: () => <Tab.Pane>

          <Form>
            <Form.Field>

              <Input icon='tags' name="resource" value={this.state.resource} onChange={this.handleChange} iconPosition='left' label={{
                tag: true,
                content: 'Add Tag',
                color: 'grey'
              }} labelPosition='right' placeholder='Ressourcen' />

            </Form.Field>
            <br />
          </Form>
          <div className="row justify-content-md-center">
            <Button loading={this.state.Laden} onClick={this.addResource} animated={true} color='teal' style={{
              width: "130px"
            }}>
              <Button.Content visible={true}>Absenden</Button.Content>
              <Button.Content hidden={true}>
                <Icon name='check' />
              </Button.Content>
            </Button>
          </div>
        </Tab.Pane>
      }, {
        menuItem: 'Tags',
        render: () => <Tab.Pane>

          <Form>
            <Form.Field>
              <Input value={this.state.tag} name="tag" onChange={this.handleChange} icon='tags' iconPosition='left' label={{
                tag: true,
                content: 'Add Tag',
                color: 'grey'
              }} labelPosition='right' placeholder='Tags' />
            </Form.Field><br />
          </Form>
          <div className="row justify-content-md-center">
            <Button loading={this.state.Laden} onClick={this.addTag} animated={true} color='teal' style={{
              width: "130px"
            }}>
              <Button.Content visible={true}>Absenden</Button.Content>
              <Button.Content hidden={true}>
                <Icon name='check' />
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
            <Form.Group>
              <Form.Field>
                <Button floated='right' onClick={this.deleteProject} circular icon='delete' color='red' size='mini' />
                <Header as='h2' floated='left'>Projektdaten aktualisieren</Header>
              </Form.Field></Form.Group>
            <Form.Group widths='equal'>
              <Form.Input placeholder={Name} name="title" value={this.state.title} onChange={this.handleChange} icon='user' iconPosition='left' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.TextArea rows={2} name="description" value={this.state.description} onChange={this.handleChange} placeholder={Text} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.TextArea rows={2} placeholder='Zielerreichung' />
            </Form.Group>
            <Form.Field>
              <label>
                Titelbild aktualisieren
                </label>
              <input type="file" style={{
                width: "400px"
              }} className="form-control-file" id="exampleFormControlFile1"></input>
            </Form.Field>
            <div className="form-group">
              <Form.Field style={{
                width: "200px"
              }} label='Privatsphäre' control='select'>
                <option value='p'>privat</option>
                <option value='o'>&ouml;ffentlich</option>
              </Form.Field>
            </div>
            <div className="row justify-content-md-center">
              <Button loading={this.state.Laden} onClick={this.handleProject} animated={true} color='teal' style={{
                width: "130px"
              }}>
                <Button.Content visible={true}>Speichern</Button.Content>
                <Button.Content hidden={true}>
                  <Icon name='check' />
                </Button.Content>
              </Button>
            </div>

          </Form>
        </Tab.Pane>
      }
    ]

    //Conent of the edit modal
    const editModal = <div>
      <Tab panes={panes} />
      <br /></div>

    const changeModal = <div>
      <Tab panes={tabs} />
      <br /></div>

    //content of the share modal
    const shareModal = <div className="container">
      <div className="row justify-content-md-center">
        <h4>Teile dieses Projekt auf deiner lieblings Plattform</h4>
        <div>
          <br />
          <Button color='facebook' href={redirectToFacebook} target="_blank">
            <Icon name='facebook' />
            Facebook
          </Button>
          <Button color='twitter' href={redirectToTwitter}>
            <Icon name='twitter' />
            Twitter
          </Button>
          <Button color='google plus' href={redirectToGooglePlus} target="_blank">
            <Icon name='google plus' />
            Google Plus
          </Button>
          <Button icon='mail' color='grey' href={redirectToMail} />
        </div>
        <div>
          <br />
          <Input type="text" size='small' value={currentPageUrlShort} id="InputFieldContent" style={{
            width: '15em'
          }} action={<Button
            color='teal'
            icon='clipboard'
            onClick={
              this.copyToClipboard
            }
          />} />
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
            {
              showPics && (
                <div className="bilder">
                  <Divider horizontal={true}>
                    <h3>Fotos</h3>
                  </Divider>
                  <Gallery images={this.state.ImageData} maxRows={1} imageCountSeparator=' von ' showImageCount={true} showLightboxThumbnails={true} backdropClosesModal={true} showCloseButton={false} enableImageSelection={true} />
                </div>
              )
            }
          </Grid.Column>
          <Grid.Column width={3}>
            <br />
            <div className="projektfoto"><Image src={'http://backend-edu.azurewebsites.net/' + this.state.Bild} size='medium' bordered={true} circular={true} /><br /></div>
            <div className="row justify-content-md-center">
              <div>
                <Popup content='Füge dieses Projekt deinen Favoriten hinzu' trigger={<Button circular={
                  true
                }
                  color='grey' icon='empty heart' />} />
              </div>
              <div>
                <Popup content='Teile dieses Projekt mit anderen' trigger={<Button circular={
                  true
                }
                  color='grey' icon='share alternate square' onClick={
                    this.toggleShare
                  } />} />
                <Modal isOpen={this.state.modalShare} toggle={this.toggleShare} className={this.props.className}>
                  <ModalBody>
                    {shareModal}
                  </ModalBody>
                </Modal>
              </div>
              <div key={this.state.key}>
                <Popup content='Siehe dir die Projektteilnehmer an' trigger={<Button circular={
                  true
                }
                  color='grey' icon='user' onClick={
                    this.toggleMember
                  } />} />
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
              {
                isAuthor &&(
              <div>
                <Popup content='Füge einen Beitrag hinzu' trigger={<Button circular={
                  true
                }
                  color='grey' icon='edit' onClick={
                    this.toggleEdit
                  } />} />
                <Modal isOpen={this.state.modalEdit} toggle={this.toggleEdit} className={this.props.className} size='lg'>
                  <ModalBody>
                    <div fluid="fluid">
                      {editModal}
                    </div>
                  </ModalBody>
                </Modal>
              </div>
                )}
                {
              isEditor &&(
              <div>
                <Popup content='Füge einen Beitrag hinzu' trigger={<Button circular={
                  true
                }
                  color='grey' icon='edit' onClick={
                    this.toggleEdit
                  } />} />
                <Modal isOpen={this.state.modalEdit} toggle={this.toggleEdit} className={this.props.className} size='lg'>
                  <ModalBody>
                    <div fluid="fluid">
                      {editModal}
                    </div>
                  </ModalBody>
                </Modal>
              </div>
                )}
                {
                  isAuthor &&(
              <div>
                <Popup content='Bearbeite dein Projekt' trigger={<Button circular={
                  true
                }
                  color='grey' icon='setting' onClick={
                    this.toggleChange
                  } />} />
                <Modal isOpen={this.state.modalChange} toggle={this.toggleChange} className={this.props.className} size='lg'>
                  <ModalBody>
                    <div fluid="fluid">
                      {changeModal}
                    </div>
                  </ModalBody>
                </Modal>
              </div>
                  )}
              {
                isAuthor &&(
              <div>
                <Popup content='Rechtemanagement' trigger={<Button circular={
                  true
                }
                  color='grey' icon='privacy' onClick={
                    this.toggleRights
                  } />} />
                <Modal isOpen={this.state.modalRights} toggle={this.toggleRights} className={this.props.className} size='lg'>
                  <ModalBody>
                    <div fluid="fluid">
                      {rightsModal}
                    </div>
                  </ModalBody>
                </Modal>
              </div>
                )}
              <br />
              <div className="container">
                  <div>
                  <br />
                    <Button fluid as='div' labelPosition='right'>
                      <Button fluid color='blue'>
                        <Icon name='like outline' />
                        Like
                      </Button>
                      <Label as='a' basic color='blue' pointing='left'>{Karma}</Label>
                    </Button>
                  </div>
              </div>
            </div>
            <br />


            {
              !isAuthor && (
                <Button fluid={true} toggle={true} onClick={this.handleJoin.bind(this)} color={joined
                  ? 'green'
                  : 'red'} content={joined
                    ? 'Beitreten'
                    : 'Austreten'} />
              )
            }
            <div className="tags">

              <div className="Tags">
                <Divider horizontal={true}>
                  <h3>Tags</h3>
                </Divider>

                <Label.Group size='medium' color='teal'>
                  {this.createTags(TagData)}

                </Label.Group>
              </div>
              <br />
              <div className="Ressourcen">
                <Divider horizontal={true}>
                  <h3>Ressourcen</h3>
                </Divider>
                <Label.Group size='medium' color='blue'>
                  {this.createResources(ResourceData)}

                </Label.Group>
              </div>
              <br />
              <div>
                <Divider horizontal={true}>
                  <h3>Anhang</h3>
                </Divider>
                <List divided={true} relaxed={true}>
                  {this.createDocuments(this.state.DocumentData)}
                </List>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="timeline">
        <Menu pointing secondary>
          <Menu.Item name='Alle' active={activeItem === 'Alle'} onClick={this.handleItemClick} />
          <Menu.Item name='Uploads' active={activeItem === 'Uploads'} onClick={this.handleItemClick} />
          <Menu.Item name='Beitritte' active={activeItem === 'Beitritte'} onClick={this.handleItemClick} />
          <Menu.Item name='Kommentare' active={activeItem === 'Kommentare'} onClick={this.handleItemClick} />
          <Menu.Item name='Termine' active={activeItem === 'Termine'} onClick={this.handleItemClick} />
        </Menu>
        {
          (activeItem == "Alle") && (<VerticalTimeline>
            <VerticalTimelineElement className="vertical-timeline-element" iconStyle={{
              background: 'rgb(233, 30, 99)',
            }} animate={true}>
            </VerticalTimelineElement>
            {this.createNodes(this.state.Data)}
            <VerticalTimelineElement className="vertical-timeline-element--education" iconStyle={{
              background: 'rgb(233, 30, 99)',
              color: '#fff'
            }} animate={true}>
              <h3 className="vertical-timeline-element-title">Projekt wurde erstellt</h3>

              <h4 className="vertical-timeline-element-subtitle">Insert Creator Here!!</h4>

              <p>
                Das Projekt wurde am {""} {Erstellt}
                erstellt.
            </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          )}
        {

          (activeItem == "Uploads") && (<VerticalTimeline>
            {this.createNodes(this.state.UploadData)}
          </VerticalTimeline>)
        }
                {

        (activeItem == "Beitritte") && (<VerticalTimeline>
           {this.createNodes(this.state.JoinData)}
            </VerticalTimeline>)
}
        {

(activeItem == "Kommentare") && (<VerticalTimeline>
  {this.createNodes(this.state.CommentData)}
</VerticalTimeline>)
}
        {

(activeItem == "Termine") && (<VerticalTimeline>
  {this.createNodes(this.state.TerminData)}
</VerticalTimeline>)
}



      </div>
    </div>)
  }
}

export default ProjectPage;
