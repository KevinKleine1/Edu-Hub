import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import Callback from '../../Callback/Callback';
import Dashboard from '../../views/Dashboard/';
import Auth from '../../Auth/Auth';
import Profile from '../../views/Profile/Profile';
import Admin from '../../views/Admin/Admin';
import ProfilePop from '../../views/Profile/ProfilePop';
import AdminPop from '../../views/Admin/AdminPop';
import Welcome from '../../views/Pages/Welcome/Welcome';
import NewProject from '../../views/NewProject/NewProject';
import NoWizard from '../../views/NoWizard/NoWizard';
import MyProjects from '../../views/MyProjects/MyProjects';
import Favs from '../../views/Favs/Favs';
import ProjectPage from '../../views/ProjectPage/projectPage';

//creates the login object to handle the authentication
const auth = new Auth();

//find a better way to integrate the function globally

//handles the authentication
const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}


//main app class where everything gets put together
class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
              <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
              <Route path="/profil" name="Profil" component={Profile}/>
              <Route path="/admin" name="Admin" component={Admin}/>
              <Route path="/profilpop" name="Profilpop" component={ProfilePop}/>
              <Route path="/adminpop" name="Adminpop" component={AdminPop}/>
              <Route path="/welcome" name="Welcome" component={Welcome}/>
              <Route path="/nowizard" name="Nowizard" component={NoWizard}/>
              <Route path="/myprojects" name="MyProjects" component={MyProjects}/>
              <Route path="/neuesprojekt" name="NewProject" component={NewProject}/>
              <Route path="/favs" name="Favoriten" component={Favs}/>
              <Route path="/projectpage" name="ProjectPage" component={ProjectPage}/>
              <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
              <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
